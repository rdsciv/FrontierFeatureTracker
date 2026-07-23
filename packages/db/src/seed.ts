import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import {
  TrackerSeedSchema,
  computePriorityScore,
  priorityFromScore,
} from "@fft/schema";
import { openDb, migrate, defaultDbPath } from "./client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../../..");
const seedPath = path.join(repoRoot, "data", "seed", "baseline-2026-07.yaml");
const sourcesPath = path.join(repoRoot, "data", "sources.yaml");

function loadYaml(filePath: string): unknown {
  return YAML.parse(fs.readFileSync(filePath, "utf8"));
}

export function seedDatabase(dbPath = defaultDbPath()) {
  if (!fs.existsSync(seedPath)) {
    throw new Error(`Seed file not found: ${seedPath}`);
  }

  const parsed = TrackerSeedSchema.parse(loadYaml(seedPath));
  const { sqlite, dbPath: resolved } = openDb(dbPath);
  migrate(sqlite);

  sqlite.exec(`
    DELETE FROM scrape_runs;
    DELETE FROM sources;
    DELETE FROM events;
    DELETE FROM financial_signals;
    DELETE FROM opportunities;
    DELETE FROM gaps;
    DELETE FROM matrix_cells;
    DELETE FROM features;
    DELETE FROM products;
    DELETE FROM models;
    DELETE FROM companies;
    DELETE FROM meta;
  `);

  const insertCompany = sqlite.prepare(
    `INSERT INTO companies (id, name, region, type, website, notes, is_core)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
  );
  for (const c of parsed.companies) {
    insertCompany.run(
      c.id,
      c.name,
      c.region,
      c.type,
      c.website ?? null,
      c.notes ?? null,
      c.isCore ? 1 : 0,
    );
  }

  const insertModel = sqlite.prepare(
    `INSERT INTO models (
      id, company_id, name, slug, release_date, status, params_total, params_active,
      moe, context_window, modalities, open_weights, license, api_input_per_m, api_output_per_m,
      consumer_plans, benchmarks, capability_delta, source_urls, last_verified_at, notes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  for (const m of parsed.models) {
    insertModel.run(
      m.id,
      m.companyId,
      m.name,
      m.slug,
      m.releaseDate ?? null,
      m.status,
      m.paramsTotal ?? null,
      m.paramsActive ?? null,
      m.moe == null ? null : m.moe ? 1 : 0,
      m.contextWindow ?? null,
      JSON.stringify(m.modalities),
      m.openWeights ? 1 : 0,
      m.license ?? null,
      m.apiInputPerM ?? null,
      m.apiOutputPerM ?? null,
      m.consumerPlans ?? null,
      m.benchmarks ? JSON.stringify(m.benchmarks) : null,
      m.capabilityDelta ?? null,
      JSON.stringify(m.sourceUrls),
      m.lastVerifiedAt ?? null,
      m.notes ?? null,
    );
  }

  const insertProduct = sqlite.prepare(
    `INSERT INTO products (
      id, company_id, name, category, description, platforms, pricing_notes,
      launch_date, status, source_urls, notes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  for (const p of parsed.products) {
    insertProduct.run(
      p.id,
      p.companyId,
      p.name,
      p.category,
      p.description ?? null,
      JSON.stringify(p.platforms),
      p.pricingNotes ?? null,
      p.launchDate ?? null,
      p.status,
      JSON.stringify(p.sourceUrls),
      p.notes ?? null,
    );
  }

  const insertFeature = sqlite.prepare(
    `INSERT INTO features (id, slug, name, category, description, sort_order)
     VALUES (?, ?, ?, ?, ?, ?)`,
  );
  for (const f of parsed.features) {
    insertFeature.run(
      f.id,
      f.slug,
      f.name,
      f.category,
      f.description ?? null,
      f.sortOrder,
    );
  }

  const insertCell = sqlite.prepare(
    `INSERT INTO matrix_cells (company_id, feature_id, support_level, notes, evidence_url, as_of)
     VALUES (?, ?, ?, ?, ?, ?)`,
  );
  for (const cell of parsed.matrix) {
    insertCell.run(
      cell.companyId,
      cell.featureId,
      cell.supportLevel,
      cell.notes ?? null,
      cell.evidenceUrl ?? null,
      cell.asOf ?? parsed.asOf,
    );
  }

  const insertGap = sqlite.prepare(
    `INSERT INTO gaps (
      id, title, description, competitor_examples, grok_status, revenue_impact, user_demand,
      competitive_urgency, priority_score, priority, recommended_action, owner_team, status,
      seeded, source_urls
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  for (const g of parsed.gaps) {
    const priorityScore = computePriorityScore(
      g.revenueImpact,
      g.userDemand,
      g.competitiveUrgency,
    );
    insertGap.run(
      g.id,
      g.title,
      g.description,
      JSON.stringify(g.competitorExamples),
      g.grokStatus,
      g.revenueImpact,
      g.userDemand,
      g.competitiveUrgency,
      priorityScore,
      priorityFromScore(priorityScore),
      g.recommendedAction,
      g.ownerTeam,
      g.status,
      g.seeded ? 1 : 0,
      JSON.stringify(g.sourceUrls),
    );
  }

  const insertOpp = sqlite.prepare(
    `INSERT INTO opportunities (
      id, title, description, linked_gap_ids, linked_financial_signal_ids, market_category,
      estimated_tam_notes, recommended_move, urgency, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  for (const o of parsed.opportunities) {
    insertOpp.run(
      o.id,
      o.title,
      o.description ?? null,
      JSON.stringify(o.linkedGapIds),
      JSON.stringify(o.linkedFinancialSignalIds),
      o.marketCategory ?? null,
      o.estimatedTamNotes ?? null,
      o.recommendedMove,
      o.urgency,
      o.status,
    );
  }

  const insertFin = sqlite.prepare(
    `INSERT INTO financial_signals (
      id, company_id, signal_type, period, metric_name, metric_value, unit, is_estimate,
      quote, source_url, source_reliability, as_of, implication_for_grok
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  for (const s of parsed.financialSignals) {
    insertFin.run(
      s.id,
      s.companyId ?? null,
      s.signalType,
      s.period ?? null,
      s.metricName,
      s.metricValue ?? null,
      s.unit ?? null,
      s.isEstimate ? 1 : 0,
      s.quote ?? null,
      s.sourceUrl ?? null,
      s.sourceReliability,
      s.asOf ?? null,
      s.implicationForGrok ?? null,
    );
  }

  const insertEvent = sqlite.prepare(
    `INSERT INTO events (
      id, event_type, company_id, title, summary, occurred_at, source_url, severity, tags
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  for (const e of parsed.events) {
    insertEvent.run(
      e.id,
      e.eventType,
      e.companyId ?? null,
      e.title,
      e.summary ?? null,
      e.occurredAt,
      e.sourceUrl ?? null,
      e.severity,
      JSON.stringify(e.tags),
    );
  }

  if (fs.existsSync(sourcesPath)) {
    const sourcesDoc = loadYaml(sourcesPath) as {
      sources?: Array<{
        id: string;
        companyId?: string;
        name: string;
        url: string;
        sourceType: string;
        cadence?: string;
        enabled?: boolean;
        notes?: string;
      }>;
    };
    const insertSource = sqlite.prepare(
      `INSERT INTO sources (id, company_id, name, url, source_type, cadence, enabled, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    );
    for (const s of sourcesDoc.sources ?? []) {
      insertSource.run(
        s.id,
        s.companyId ?? null,
        s.name,
        s.url,
        s.sourceType,
        s.cadence ?? "daily",
        s.enabled === false ? 0 : 1,
        s.notes ?? null,
      );
    }
  }

  const insertMeta = sqlite.prepare(`INSERT INTO meta (key, value) VALUES (?, ?)`);
  insertMeta.run("baseline_date", parsed.baselineDate);
  insertMeta.run("as_of", parsed.asOf);
  insertMeta.run("seeded_at", new Date().toISOString());

  sqlite.close();

  return {
    dbPath: resolved,
    counts: {
      companies: parsed.companies.length,
      models: parsed.models.length,
      products: parsed.products.length,
      features: parsed.features.length,
      matrix: parsed.matrix.length,
      gaps: parsed.gaps.length,
      opportunities: parsed.opportunities.length,
      financialSignals: parsed.financialSignals.length,
      events: parsed.events.length,
    },
  };
}

const isMain =
  process.argv[1] &&
  (process.argv[1].endsWith("seed.ts") || process.argv[1].endsWith("seed.js"));

if (isMain) {
  const result = seedDatabase();
  console.log("✓ Seeded Frontier Feature Tracker");
  console.log(`  DB: ${result.dbPath}`);
  console.log(`  Counts:`, result.counts);
}
