/**
 * Build-time export: YAML seed → apps/dashboard/src/data/tracker.json
 * Used by the static GitHub Pages dashboard (no SQLite at runtime).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import {
  TrackerSeedSchema,
  computePriorityScore,
  priorityFromScore,
} from "../packages/schema/src/index.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const seedPath = path.join(repoRoot, "data", "seed", "baseline-2026-07.yaml");
const sourcesPath = path.join(repoRoot, "data", "sources.yaml");
const outPath = path.join(repoRoot, "apps", "dashboard", "src", "data", "tracker.json");

const raw = YAML.parse(fs.readFileSync(seedPath, "utf8"));
const seed = TrackerSeedSchema.parse(raw);

let sources: Array<{
  id: string;
  companyId?: string;
  name: string;
  url: string;
  sourceType: string;
  cadence?: string;
  enabled?: boolean;
  notes?: string;
}> = [];

if (fs.existsSync(sourcesPath)) {
  const doc = YAML.parse(fs.readFileSync(sourcesPath, "utf8")) as {
    sources?: typeof sources;
  };
  sources = doc.sources ?? [];
}

const gaps = seed.gaps.map((g) => {
  const priorityScore = computePriorityScore(
    g.revenueImpact,
    g.userDemand,
    g.competitiveUrgency,
  );
  return {
    ...g,
    priorityScore,
    priority: priorityFromScore(priorityScore),
  };
});

const snapshot = {
  baselineDate: seed.baselineDate,
  asOf: seed.asOf,
  exportedAt: new Date().toISOString(),
  companies: seed.companies,
  models: seed.models,
  products: seed.products,
  features: seed.features,
  matrix: seed.matrix,
  gaps,
  opportunities: seed.opportunities,
  financialSignals: seed.financialSignals,
  events: seed.events,
  sources: sources.map((s) => ({
    id: s.id,
    companyId: s.companyId ?? null,
    name: s.name,
    url: s.url,
    sourceType: s.sourceType,
    cadence: s.cadence ?? "daily",
    enabled: s.enabled !== false,
    lastCheckedAt: null as string | null,
    lastHash: null as string | null,
    lastStatus: null as string | null,
    notes: s.notes ?? null,
  })),
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(snapshot, null, 2) + "\n");
console.log(`✓ Wrote static snapshot → ${path.relative(repoRoot, outPath)}`);
console.log(
  `  companies=${snapshot.companies.length} models=${snapshot.models.length} gaps=${snapshot.gaps.length} matrix=${snapshot.matrix.length}`,
);
