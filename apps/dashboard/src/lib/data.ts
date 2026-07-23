import tracker from "@/data/tracker.json";

export type Company = (typeof tracker.companies)[number];
export type Model = (typeof tracker.models)[number];
export type Product = (typeof tracker.products)[number];
export type Feature = (typeof tracker.features)[number];
export type MatrixCell = (typeof tracker.matrix)[number];
export type Gap = (typeof tracker.gaps)[number];
export type Opportunity = (typeof tracker.opportunities)[number];
export type FinancialSignal = (typeof tracker.financialSignals)[number];
export type Event = (typeof tracker.events)[number];
export type Source = (typeof tracker.sources)[number];

const companyById = new Map(tracker.companies.map((c) => [c.id, c]));

export function getMeta() {
  return {
    baseline_date: tracker.baselineDate,
    as_of: tracker.asOf,
    seeded_at: tracker.exportedAt,
  };
}

export function getCompanies() {
  return [...tracker.companies].sort((a, b) => a.name.localeCompare(b.name));
}

export function getModels() {
  return [...tracker.models]
    .map((model) => {
      const company = companyById.get(model.companyId);
      return {
        model,
        companyName: company?.name ?? null,
        companyRegion: company?.region ?? null,
      };
    })
    .sort((a, b) => (b.model.releaseDate ?? "").localeCompare(a.model.releaseDate ?? ""));
}

export function getProducts() {
  return [...tracker.products]
    .map((product) => ({
      product,
      companyName: companyById.get(product.companyId)?.name ?? null,
    }))
    .sort((a, b) => a.product.name.localeCompare(b.product.name));
}

export function getFeatures() {
  return [...tracker.features].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
}

export function getMatrix() {
  return tracker.matrix;
}

export function getGaps() {
  return [...tracker.gaps].sort((a, b) => b.priorityScore - a.priorityScore);
}

export function getOpportunities() {
  const order = { high: 0, medium: 1, low: 2 } as Record<string, number>;
  return [...tracker.opportunities].sort(
    (a, b) => (order[a.urgency] ?? 9) - (order[b.urgency] ?? 9),
  );
}

export function getFinancialSignals() {
  return tracker.financialSignals.map((signal) => ({
    signal,
    companyName: signal.companyId
      ? (companyById.get(signal.companyId)?.name ?? null)
      : null,
  }));
}

export function getEvents(limit = 50) {
  return [...tracker.events]
    .sort((a, b) => b.occurredAt.localeCompare(a.occurredAt))
    .slice(0, limit)
    .map((event) => ({
      event,
      companyName: event.companyId
        ? (companyById.get(event.companyId)?.name ?? null)
        : null,
    }));
}

export function getSources() {
  return [...tracker.sources].sort((a, b) => a.name.localeCompare(b.name));
}

export function getChineseModels() {
  return getModels().filter((m) => m.companyRegion === "chinese");
}

export function getStats() {
  const gaps = tracker.gaps;
  return {
    companies: tracker.companies.length,
    models: tracker.models.length,
    products: tracker.products.length,
    gaps: gaps.length,
    highGaps: gaps.filter((g) => g.priority === "high").length,
    opportunities: tracker.opportunities.length,
    events: tracker.events.length,
    sources: tracker.sources.length,
  };
}
