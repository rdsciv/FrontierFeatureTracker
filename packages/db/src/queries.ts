import type { DatabaseSync } from "node:sqlite";
import { parseJsonArray, parseJsonObject } from "./client";

type Row = Record<string, unknown>;

function all(sqlite: DatabaseSync, sql: string, params: unknown[] = []): Row[] {
  return sqlite.prepare(sql).all(...params) as Row[];
}

function one(sqlite: DatabaseSync, sql: string, params: unknown[] = []): Row | undefined {
  return sqlite.prepare(sql).get(...params) as Row | undefined;
}

export type Company = {
  id: string;
  name: string;
  region: string;
  type: string;
  website: string | null;
  notes: string | null;
  isCore: boolean;
};

export type Model = {
  id: string;
  companyId: string;
  name: string;
  slug: string;
  releaseDate: string | null;
  status: string;
  paramsTotal: string | null;
  paramsActive: string | null;
  moe: boolean | null;
  contextWindow: string | null;
  modalities: string[];
  openWeights: boolean;
  license: string | null;
  apiInputPerM: number | null;
  apiOutputPerM: number | null;
  consumerPlans: string | null;
  benchmarks: Record<string, string | number> | null;
  capabilityDelta: string | null;
  sourceUrls: string[];
  lastVerifiedAt: string | null;
  notes: string | null;
};

export type Product = {
  id: string;
  companyId: string;
  name: string;
  category: string;
  description: string | null;
  platforms: string[];
  pricingNotes: string | null;
  launchDate: string | null;
  status: string;
  sourceUrls: string[];
  notes: string | null;
};

export type Feature = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string | null;
  sortOrder: number;
};

export type MatrixCell = {
  id: number;
  companyId: string;
  featureId: string;
  supportLevel: string;
  notes: string | null;
  evidenceUrl: string | null;
  asOf: string | null;
};

export type Gap = {
  id: string;
  title: string;
  description: string;
  competitorExamples: string[];
  grokStatus: string;
  revenueImpact: number;
  userDemand: number;
  competitiveUrgency: number;
  priorityScore: number;
  priority: string;
  recommendedAction: string;
  ownerTeam: string;
  status: string;
  seeded: boolean;
  sourceUrls: string[];
};

export type Opportunity = {
  id: string;
  title: string;
  description: string | null;
  linkedGapIds: string[];
  linkedFinancialSignalIds: string[];
  marketCategory: string | null;
  estimatedTamNotes: string | null;
  recommendedMove: string;
  urgency: string;
  status: string;
};

export type FinancialSignal = {
  id: string;
  companyId: string | null;
  signalType: string;
  period: string | null;
  metricName: string;
  metricValue: string | null;
  unit: string | null;
  isEstimate: boolean;
  quote: string | null;
  sourceUrl: string | null;
  sourceReliability: string;
  asOf: string | null;
  implicationForGrok: string | null;
};

export type Event = {
  id: string;
  eventType: string;
  companyId: string | null;
  title: string;
  summary: string | null;
  occurredAt: string;
  sourceUrl: string | null;
  severity: string;
  tags: string[];
};

export type Source = {
  id: string;
  companyId: string | null;
  name: string;
  url: string;
  sourceType: string;
  cadence: string;
  enabled: boolean;
  lastCheckedAt: string | null;
  lastHash: string | null;
  lastStatus: string | null;
  notes: string | null;
};

function mapCompany(r: Row): Company {
  return {
    id: String(r.id),
    name: String(r.name),
    region: String(r.region),
    type: String(r.type),
    website: (r.website as string) ?? null,
    notes: (r.notes as string) ?? null,
    isCore: Boolean(r.is_core),
  };
}

function mapModel(r: Row): Model {
  return {
    id: String(r.id),
    companyId: String(r.company_id),
    name: String(r.name),
    slug: String(r.slug),
    releaseDate: (r.release_date as string) ?? null,
    status: String(r.status),
    paramsTotal: (r.params_total as string) ?? null,
    paramsActive: (r.params_active as string) ?? null,
    moe: r.moe == null ? null : Boolean(r.moe),
    contextWindow: (r.context_window as string) ?? null,
    modalities: parseJsonArray(r.modalities as string),
    openWeights: Boolean(r.open_weights),
    license: (r.license as string) ?? null,
    apiInputPerM: (r.api_input_per_m as number) ?? null,
    apiOutputPerM: (r.api_output_per_m as number) ?? null,
    consumerPlans: (r.consumer_plans as string) ?? null,
    benchmarks: parseJsonObject(r.benchmarks as string),
    capabilityDelta: (r.capability_delta as string) ?? null,
    sourceUrls: parseJsonArray(r.source_urls as string),
    lastVerifiedAt: (r.last_verified_at as string) ?? null,
    notes: (r.notes as string) ?? null,
  };
}

function mapProduct(r: Row): Product {
  return {
    id: String(r.id),
    companyId: String(r.company_id),
    name: String(r.name),
    category: String(r.category),
    description: (r.description as string) ?? null,
    platforms: parseJsonArray(r.platforms as string),
    pricingNotes: (r.pricing_notes as string) ?? null,
    launchDate: (r.launch_date as string) ?? null,
    status: String(r.status),
    sourceUrls: parseJsonArray(r.source_urls as string),
    notes: (r.notes as string) ?? null,
  };
}

function mapFeature(r: Row): Feature {
  return {
    id: String(r.id),
    slug: String(r.slug),
    name: String(r.name),
    category: String(r.category),
    description: (r.description as string) ?? null,
    sortOrder: Number(r.sort_order ?? 0),
  };
}

function mapCell(r: Row): MatrixCell {
  return {
    id: Number(r.id),
    companyId: String(r.company_id),
    featureId: String(r.feature_id),
    supportLevel: String(r.support_level),
    notes: (r.notes as string) ?? null,
    evidenceUrl: (r.evidence_url as string) ?? null,
    asOf: (r.as_of as string) ?? null,
  };
}

function mapGap(r: Row): Gap {
  return {
    id: String(r.id),
    title: String(r.title),
    description: String(r.description),
    competitorExamples: parseJsonArray(r.competitor_examples as string),
    grokStatus: String(r.grok_status),
    revenueImpact: Number(r.revenue_impact),
    userDemand: Number(r.user_demand),
    competitiveUrgency: Number(r.competitive_urgency),
    priorityScore: Number(r.priority_score),
    priority: String(r.priority),
    recommendedAction: String(r.recommended_action),
    ownerTeam: String(r.owner_team),
    status: String(r.status),
    seeded: Boolean(r.seeded),
    sourceUrls: parseJsonArray(r.source_urls as string),
  };
}

function mapOpp(r: Row): Opportunity {
  return {
    id: String(r.id),
    title: String(r.title),
    description: (r.description as string) ?? null,
    linkedGapIds: parseJsonArray(r.linked_gap_ids as string),
    linkedFinancialSignalIds: parseJsonArray(r.linked_financial_signal_ids as string),
    marketCategory: (r.market_category as string) ?? null,
    estimatedTamNotes: (r.estimated_tam_notes as string) ?? null,
    recommendedMove: String(r.recommended_move),
    urgency: String(r.urgency),
    status: String(r.status),
  };
}

function mapFin(r: Row): FinancialSignal {
  return {
    id: String(r.id),
    companyId: (r.company_id as string) ?? null,
    signalType: String(r.signal_type),
    period: (r.period as string) ?? null,
    metricName: String(r.metric_name),
    metricValue: (r.metric_value as string) ?? null,
    unit: (r.unit as string) ?? null,
    isEstimate: Boolean(r.is_estimate),
    quote: (r.quote as string) ?? null,
    sourceUrl: (r.source_url as string) ?? null,
    sourceReliability: String(r.source_reliability),
    asOf: (r.as_of as string) ?? null,
    implicationForGrok: (r.implication_for_grok as string) ?? null,
  };
}

function mapEvent(r: Row): Event {
  return {
    id: String(r.id),
    eventType: String(r.event_type),
    companyId: (r.company_id as string) ?? null,
    title: String(r.title),
    summary: (r.summary as string) ?? null,
    occurredAt: String(r.occurred_at),
    sourceUrl: (r.source_url as string) ?? null,
    severity: String(r.severity),
    tags: parseJsonArray(r.tags as string),
  };
}

function mapSource(r: Row): Source {
  return {
    id: String(r.id),
    companyId: (r.company_id as string) ?? null,
    name: String(r.name),
    url: String(r.url),
    sourceType: String(r.source_type),
    cadence: String(r.cadence),
    enabled: Boolean(r.enabled),
    lastCheckedAt: (r.last_checked_at as string) ?? null,
    lastHash: (r.last_hash as string) ?? null,
    lastStatus: (r.last_status as string) ?? null,
    notes: (r.notes as string) ?? null,
  };
}

export function getMeta(sqlite: DatabaseSync): Record<string, string> {
  const rows = all(sqlite, `SELECT key, value FROM meta`);
  return Object.fromEntries(rows.map((r) => [String(r.key), String(r.value)]));
}

export function getCompanies(sqlite: DatabaseSync): Company[] {
  return all(sqlite, `SELECT * FROM companies ORDER BY name`).map(mapCompany);
}

export function getModels(sqlite: DatabaseSync) {
  return all(
    sqlite,
    `SELECT m.*, c.name AS company_name, c.region AS company_region
     FROM models m LEFT JOIN companies c ON c.id = m.company_id
     ORDER BY m.release_date DESC NULLS LAST`,
  ).map((r) => ({
    model: mapModel(r),
    companyName: (r.company_name as string) ?? null,
    companyRegion: (r.company_region as string) ?? null,
  }));
}

export function getProducts(sqlite: DatabaseSync) {
  return all(
    sqlite,
    `SELECT p.*, c.name AS company_name
     FROM products p LEFT JOIN companies c ON c.id = p.company_id
     ORDER BY p.name`,
  ).map((r) => ({
    product: mapProduct(r),
    companyName: (r.company_name as string) ?? null,
  }));
}

export function getFeatures(sqlite: DatabaseSync): Feature[] {
  return all(sqlite, `SELECT * FROM features ORDER BY sort_order`).map(mapFeature);
}

export function getMatrix(sqlite: DatabaseSync): MatrixCell[] {
  return all(sqlite, `SELECT * FROM matrix_cells`).map(mapCell);
}

export function getGaps(sqlite: DatabaseSync): Gap[] {
  return all(sqlite, `SELECT * FROM gaps ORDER BY priority_score DESC`).map(mapGap);
}

export function getOpportunities(sqlite: DatabaseSync): Opportunity[] {
  return all(sqlite, `SELECT * FROM opportunities`).map(mapOpp);
}

export function getFinancialSignals(sqlite: DatabaseSync) {
  return all(
    sqlite,
    `SELECT s.*, c.name AS company_name
     FROM financial_signals s LEFT JOIN companies c ON c.id = s.company_id`,
  ).map((r) => ({
    signal: mapFin(r),
    companyName: (r.company_name as string) ?? null,
  }));
}

export function getEvents(sqlite: DatabaseSync, limit = 50) {
  return all(
    sqlite,
    `SELECT e.*, c.name AS company_name
     FROM events e LEFT JOIN companies c ON c.id = e.company_id
     ORDER BY e.occurred_at DESC LIMIT ?`,
    [limit],
  ).map((r) => ({
    event: mapEvent(r),
    companyName: (r.company_name as string) ?? null,
  }));
}

export function getSources(sqlite: DatabaseSync): Source[] {
  return all(sqlite, `SELECT * FROM sources ORDER BY name`).map(mapSource);
}

export function getChineseModels(sqlite: DatabaseSync) {
  return all(
    sqlite,
    `SELECT m.*, c.name AS company_name, c.region AS company_region
     FROM models m INNER JOIN companies c ON c.id = m.company_id
     WHERE c.region = 'chinese'
     ORDER BY m.release_date DESC NULLS LAST`,
  ).map((r) => ({
    model: mapModel(r),
    companyName: (r.company_name as string) ?? null,
    companyRegion: (r.company_region as string) ?? null,
  }));
}

export function getStats(sqlite: DatabaseSync) {
  const count = (table: string) =>
    Number(one(sqlite, `SELECT COUNT(*) AS n FROM ${table}`)?.n ?? 0);
  const highGaps = Number(
    one(sqlite, `SELECT COUNT(*) AS n FROM gaps WHERE priority = 'high'`)?.n ?? 0,
  );
  return {
    companies: count("companies"),
    models: count("models"),
    products: count("products"),
    gaps: count("gaps"),
    highGaps,
    opportunities: count("opportunities"),
    events: count("events"),
    sources: count("sources"),
  };
}

export function listEnabledSources(sqlite: DatabaseSync): Source[] {
  return all(sqlite, `SELECT * FROM sources WHERE enabled = 1`).map(mapSource);
}

export function updateSourceCheck(
  sqlite: DatabaseSync,
  id: string,
  fields: {
    lastCheckedAt: string;
    lastHash?: string;
    lastStatus: string;
  },
) {
  if (fields.lastHash !== undefined) {
    sqlite
      .prepare(
        `UPDATE sources SET last_checked_at = ?, last_hash = ?, last_status = ? WHERE id = ?`,
      )
      .run(fields.lastCheckedAt, fields.lastHash, fields.lastStatus, id);
  } else {
    sqlite
      .prepare(`UPDATE sources SET last_checked_at = ?, last_status = ? WHERE id = ?`)
      .run(fields.lastCheckedAt, fields.lastStatus, id);
  }
}

export function insertScrapeRun(
  sqlite: DatabaseSync,
  row: {
    sourceId: string;
    startedAt: string;
    finishedAt: string;
    status: string;
    changeDetected: boolean;
    error?: string;
    contentHash?: string;
  },
) {
  sqlite
    .prepare(
      `INSERT INTO scrape_runs (source_id, started_at, finished_at, status, change_detected, error, content_hash)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      row.sourceId,
      row.startedAt,
      row.finishedAt,
      row.status,
      row.changeDetected ? 1 : 0,
      row.error ?? null,
      row.contentHash ?? null,
    );
}

export function insertEvent(
  sqlite: DatabaseSync,
  event: {
    id: string;
    eventType: string;
    companyId: string | null;
    title: string;
    summary: string;
    occurredAt: string;
    sourceUrl: string;
    severity: string;
    tags: string[];
  },
) {
  sqlite
    .prepare(
      `INSERT INTO events (id, event_type, company_id, title, summary, occurred_at, source_url, severity, tags)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      event.id,
      event.eventType,
      event.companyId,
      event.title,
      event.summary,
      event.occurredAt,
      event.sourceUrl,
      event.severity,
      JSON.stringify(event.tags),
    );
}
