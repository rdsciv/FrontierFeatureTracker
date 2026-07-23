/**
 * Generate reports/baseline-2026-07.md from the seeded SQLite DB.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  openDb,
  migrate,
  getMeta,
  getGaps,
  getOpportunities,
  getFinancialSignals,
  getEvents,
  getModels,
} from "../packages/db/src/index.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outPath = path.join(repoRoot, "reports", "baseline-2026-07.md");

const { sqlite } = openDb();
migrate(sqlite);

const metaMap = getMeta(sqlite);
const gapRows = getGaps(sqlite);
const oppRows = getOpportunities(sqlite);
const finRows = getFinancialSignals(sqlite);
const eventRows = getEvents(sqlite, 100);
const modelRows = getModels(sqlite);

const lines: string[] = [];
lines.push("# Frontier Feature Tracker — July 2026 Baseline Report");
lines.push("");
lines.push(`**Baseline date:** ${metaMap.baseline_date ?? "2026-07-01"}  `);
lines.push(`**As of:** ${metaMap.as_of ?? "2026-07-22"}  `);
lines.push(`**Generated:** ${new Date().toISOString()}`);
lines.push("");
lines.push(
  "Internal competitive intelligence for xAI / SpaceXAI product, GTM, and leadership. Every seeded claim should be re-verified against primary sources before executive decisions.",
);
lines.push("");
lines.push("## Executive summary");
lines.push("");
lines.push(
  "Western competitors have moved from model releases alone into **desktop Work super-apps**, **funded partner channels**, **coding-agent packaging**, and **hardware amplification**. Chinese labs are shipping **open-weight MoE frontier models** at high cadence and low cost. Grok has strong models (4.5), Grok Build, Imagine, and real enterprise identity features — gaps are primarily **packaging, visibility, channel, desktop, and Cursor productization**.",
);
lines.push("");
lines.push("## Priority gaps (scored)");
lines.push("");
lines.push(
  "| Priority | Score | Gap | Grok status | Owner | Recommended action |",
);
lines.push("|---|---:|---|---|---|---|");
for (const g of gapRows) {
  const action = g.recommendedAction.replace(/\s+/g, " ").trim().slice(0, 120);
  lines.push(
    `| **${g.priority}** | ${g.priorityScore} | ${g.title} | ${g.grokStatus} | ${g.ownerTeam} | ${action}${g.recommendedAction.length > 120 ? "…" : ""} |`,
  );
}
lines.push("");
lines.push("### Scoring");
lines.push("");
lines.push(
  "`priority_score = 0.4 * revenue_impact + 0.3 * user_demand + 0.3 * competitive_urgency` (each 1–5). High ≥ 3.5, Medium ≥ 2.5.",
);
lines.push("");
lines.push("## Steal market share opportunities");
lines.push("");
for (const o of oppRows) {
  lines.push(`### ${o.title}`);
  lines.push("");
  lines.push(`- **Urgency:** ${o.urgency}`);
  lines.push(`- **Category:** ${o.marketCategory ?? "—"}`);
  lines.push(`- **Move:** ${o.recommendedMove}`);
  if (o.estimatedTamNotes) lines.push(`- **Notes:** ${o.estimatedTamNotes}`);
  lines.push(`- **Linked gaps:** ${o.linkedGapIds.join(", ") || "—"}`);
  lines.push("");
}
lines.push("## Financial signals (excerpt)");
lines.push("");
lines.push("| Company ID | Metric | Value | Reliability | Estimate? |");
lines.push("|---|---|---|---|---|");
for (const { signal: s } of finRows) {
  lines.push(
    `| ${s.companyId ?? "—"} | ${s.metricName} | ${s.metricValue ?? "—"} ${s.unit ?? ""} | ${s.sourceReliability} | ${s.isEstimate ? "yes" : "no"} |`,
  );
}
lines.push("");
lines.push("## Model landscape snapshot");
lines.push("");
for (const { model, companyName, companyRegion } of modelRows) {
  lines.push(
    `- **${model.name}** (${companyName}, ${companyRegion}) — ${model.releaseDate ?? "n/a"} — ${model.openWeights ? "open" : "closed"}${model.capabilityDelta ? ` — ${model.capabilityDelta}` : ""}`,
  );
}
lines.push("");
lines.push("## Critical timeline events");
lines.push("");
for (const { event: e } of eventRows.filter((x) => x.event.severity === "critical")) {
  lines.push(
    `- **${e.occurredAt}** — ${e.title}${e.sourceUrl ? ` ([source](${e.sourceUrl}))` : ""}`,
  );
}
lines.push("");
lines.push("## Operating cadence");
lines.push("");
lines.push("| Cadence | Action |");
lines.push("|---|---|");
lines.push(
  "| Daily | `npm run collect` — hash product/docs/pricing pages; write alerts on change |",
);
lines.push(
  "| Weekly | Full feature audit — update `data/seed/baseline-*.yaml` matrix cells; re-seed |",
);
lines.push("| Real-time | Watch key lab blogs + X; critical events → `events` table |");
lines.push(
  "| Quarterly | Earnings deep-dive (Alphabet, MSFT, AMZN, Meta); refresh financial_signals |",
);
lines.push("");
lines.push("## How to maintain");
lines.push("");
lines.push("1. Edit curated YAML under `data/seed/` (diffable, reviewable).");
lines.push("2. `npm run seed` reloads SQLite.");
lines.push("3. `npm run dev` opens the dashboard at http://localhost:3456.");
lines.push("4. Collectors never auto-overwrite gaps/matrix (proposal mode / events only).");
lines.push("");
lines.push("---");
lines.push("*Generated by `npm run report:baseline`.*");

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, lines.join("\n"));
sqlite.close();
console.log(`Wrote ${outPath}`);
