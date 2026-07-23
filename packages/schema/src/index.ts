import { z } from "zod";

// ── Enums ──────────────────────────────────────────────────────────────────

export const RegionSchema = z.enum(["western", "chinese", "other"]);
export type Region = z.infer<typeof RegionSchema>;

export const CompanyTypeSchema = z.enum(["lab", "cloud", "platform", "hardware", "other"]);
export type CompanyType = z.infer<typeof CompanyTypeSchema>;

export const ModelStatusSchema = z.enum(["preview", "ga", "deprecated", "rumored"]);
export type ModelStatus = z.infer<typeof ModelStatusSchema>;

export const ProductCategorySchema = z.enum([
  "desktop_work",
  "mobile",
  "web",
  "cli",
  "browser_ext",
  "ide",
  "hardware",
  "cloud_agent",
  "education",
  "partner_network",
  "enterprise",
  "api",
  "multimodal",
  "other",
]);
export type ProductCategory = z.infer<typeof ProductCategorySchema>;

export const FeatureCategorySchema = z.enum([
  "agentic",
  "coding",
  "multimodal",
  "enterprise",
  "ecosystem",
  "distribution",
  "desktop",
  "pricing",
  "other",
]);
export type FeatureCategory = z.infer<typeof FeatureCategorySchema>;

export const SupportLevelSchema = z.enum([
  "none",
  "partial",
  "full",
  "unknown",
  "superior",
]);
export type SupportLevel = z.infer<typeof SupportLevelSchema>;

export const GrokStatusSchema = z.enum(["missing", "partial", "shipping", "closed"]);
export type GrokStatus = z.infer<typeof GrokStatusSchema>;

export const PrioritySchema = z.enum(["high", "medium", "low"]);
export type Priority = z.infer<typeof PrioritySchema>;

export const GapStatusSchema = z.enum([
  "open",
  "watching",
  "in_progress",
  "won",
  "wontfix",
]);
export type GapStatus = z.infer<typeof GapStatusSchema>;

export const OwnerTeamSchema = z.enum([
  "product",
  "gtm",
  "eng",
  "leadership",
  "partnerships",
  "marketing",
]);
export type OwnerTeam = z.infer<typeof OwnerTeamSchema>;

export const SignalTypeSchema = z.enum([
  "earnings_commentary",
  "arr_estimate",
  "usage_share",
  "cloud_growth",
  "funding",
  "acquisition",
  "other",
]);
export type SignalType = z.infer<typeof SignalTypeSchema>;

export const SourceReliabilitySchema = z.enum([
  "official",
  "reputable_press",
  "estimate",
  "rumor",
]);
export type SourceReliability = z.infer<typeof SourceReliabilitySchema>;

export const EventTypeSchema = z.enum([
  "model_release",
  "pricing_change",
  "product_launch",
  "partner_program",
  "hardware",
  "earnings",
  "acquisition",
  "other",
]);
export type EventType = z.infer<typeof EventTypeSchema>;

export const SeveritySchema = z.enum(["info", "notable", "critical"]);
export type Severity = z.infer<typeof SeveritySchema>;

export const ModalitySchema = z.enum([
  "text",
  "image",
  "video",
  "audio",
  "tools",
  "computer_use",
]);
export type Modality = z.infer<typeof ModalitySchema>;

// ── Scoring ────────────────────────────────────────────────────────────────

export const SCORING_WEIGHTS = {
  revenueImpact: 0.4,
  userDemand: 0.3,
  competitiveUrgency: 0.3,
} as const;

export function computePriorityScore(
  revenueImpact: number,
  userDemand: number,
  competitiveUrgency: number,
): number {
  const score =
    SCORING_WEIGHTS.revenueImpact * revenueImpact +
    SCORING_WEIGHTS.userDemand * userDemand +
    SCORING_WEIGHTS.competitiveUrgency * competitiveUrgency;
  return Math.round(score * 100) / 100;
}

export function priorityFromScore(score: number): Priority {
  if (score >= 3.5) return "high";
  if (score >= 2.5) return "medium";
  return "low";
}

// ── Seed schemas ───────────────────────────────────────────────────────────

export const CompanySeedSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  region: RegionSchema,
  type: CompanyTypeSchema,
  website: z.string().url().optional(),
  notes: z.string().optional(),
  isCore: z.boolean().default(true),
});
export type CompanySeed = z.infer<typeof CompanySeedSchema>;

export const ModelSeedSchema = z.object({
  id: z.string().min(1),
  companyId: z.string().min(1),
  name: z.string().min(1),
  slug: z.string().min(1),
  releaseDate: z.string().optional(),
  status: ModelStatusSchema.default("ga"),
  paramsTotal: z.string().optional(),
  paramsActive: z.string().optional(),
  moe: z.boolean().optional(),
  contextWindow: z.string().optional(),
  modalities: z.array(ModalitySchema).default(["text"]),
  openWeights: z.boolean().default(false),
  license: z.string().optional(),
  apiInputPerM: z.number().optional(),
  apiOutputPerM: z.number().optional(),
  consumerPlans: z.string().optional(),
  benchmarks: z.record(z.union([z.string(), z.number()])).optional(),
  capabilityDelta: z.string().optional(),
  sourceUrls: z.array(z.string()).default([]),
  lastVerifiedAt: z.string().optional(),
  notes: z.string().optional(),
});
export type ModelSeed = z.infer<typeof ModelSeedSchema>;

export const ProductSeedSchema = z.object({
  id: z.string().min(1),
  companyId: z.string().min(1),
  name: z.string().min(1),
  category: ProductCategorySchema,
  description: z.string().optional(),
  platforms: z.array(z.string()).default([]),
  pricingNotes: z.string().optional(),
  launchDate: z.string().optional(),
  status: z.string().default("ga"),
  sourceUrls: z.array(z.string()).default([]),
  notes: z.string().optional(),
});
export type ProductSeed = z.infer<typeof ProductSeedSchema>;

export const FeatureSeedSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  category: FeatureCategorySchema,
  description: z.string().optional(),
  sortOrder: z.number().default(0),
});
export type FeatureSeed = z.infer<typeof FeatureSeedSchema>;

export const MatrixCellSeedSchema = z.object({
  companyId: z.string().min(1),
  featureId: z.string().min(1),
  supportLevel: SupportLevelSchema,
  notes: z.string().optional(),
  evidenceUrl: z.string().optional(),
  asOf: z.string().optional(),
});
export type MatrixCellSeed = z.infer<typeof MatrixCellSeedSchema>;

export const GapSeedSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  competitorExamples: z.array(z.string()).default([]),
  grokStatus: GrokStatusSchema,
  revenueImpact: z.number().min(1).max(5),
  userDemand: z.number().min(1).max(5),
  competitiveUrgency: z.number().min(1).max(5),
  recommendedAction: z.string().min(1),
  ownerTeam: OwnerTeamSchema,
  status: GapStatusSchema.default("open"),
  seeded: z.boolean().default(true),
  sourceUrls: z.array(z.string()).default([]),
});
export type GapSeed = z.infer<typeof GapSeedSchema>;

export const OpportunitySeedSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
  linkedGapIds: z.array(z.string()).default([]),
  linkedFinancialSignalIds: z.array(z.string()).default([]),
  marketCategory: z.string().optional(),
  estimatedTamNotes: z.string().optional(),
  recommendedMove: z.string().min(1),
  urgency: PrioritySchema,
  status: z.string().default("open"),
});
export type OpportunitySeed = z.infer<typeof OpportunitySeedSchema>;

export const FinancialSignalSeedSchema = z.object({
  id: z.string().min(1),
  companyId: z.string().optional(),
  signalType: SignalTypeSchema,
  period: z.string().optional(),
  metricName: z.string().min(1),
  metricValue: z.string().optional(),
  unit: z.string().optional(),
  isEstimate: z.boolean().default(false),
  quote: z.string().optional(),
  sourceUrl: z.string().optional(),
  sourceReliability: SourceReliabilitySchema.default("reputable_press"),
  asOf: z.string().optional(),
  implicationForGrok: z.string().optional(),
});
export type FinancialSignalSeed = z.infer<typeof FinancialSignalSeedSchema>;

export const EventSeedSchema = z.object({
  id: z.string().min(1),
  eventType: EventTypeSchema,
  companyId: z.string().optional(),
  title: z.string().min(1),
  summary: z.string().optional(),
  occurredAt: z.string().min(1),
  sourceUrl: z.string().optional(),
  severity: SeveritySchema.default("info"),
  tags: z.array(z.string()).default([]),
});
export type EventSeed = z.infer<typeof EventSeedSchema>;

export const TrackerSeedSchema = z.object({
  baselineDate: z.string(),
  asOf: z.string(),
  companies: z.array(CompanySeedSchema),
  models: z.array(ModelSeedSchema),
  products: z.array(ProductSeedSchema),
  features: z.array(FeatureSeedSchema),
  matrix: z.array(MatrixCellSeedSchema),
  gaps: z.array(GapSeedSchema),
  opportunities: z.array(OpportunitySeedSchema),
  financialSignals: z.array(FinancialSignalSeedSchema),
  events: z.array(EventSeedSchema),
});
export type TrackerSeed = z.infer<typeof TrackerSeedSchema>;
