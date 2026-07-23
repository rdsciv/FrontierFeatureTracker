import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Resolve repo-root data/tracker.db from package location */
export function defaultDbPath(): string {
  const repoRoot = path.resolve(__dirname, "../../..");
  return path.join(repoRoot, "data", "tracker.db");
}

export type TrackerSqlite = DatabaseSync;

export function openDb(dbPath = process.env.FFT_DB_PATH ?? defaultDbPath()) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  const sqlite = new DatabaseSync(dbPath);
  sqlite.exec("PRAGMA journal_mode = WAL;");
  sqlite.exec("PRAGMA foreign_keys = ON;");
  return { sqlite, dbPath };
}

export function migrate(sqlite: DatabaseSync) {
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS companies (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      region TEXT NOT NULL,
      type TEXT NOT NULL,
      website TEXT,
      notes TEXT,
      is_core INTEGER NOT NULL DEFAULT 1
    );

    CREATE TABLE IF NOT EXISTS models (
      id TEXT PRIMARY KEY,
      company_id TEXT NOT NULL REFERENCES companies(id),
      name TEXT NOT NULL,
      slug TEXT NOT NULL,
      release_date TEXT,
      status TEXT NOT NULL DEFAULT 'ga',
      params_total TEXT,
      params_active TEXT,
      moe INTEGER,
      context_window TEXT,
      modalities TEXT NOT NULL,
      open_weights INTEGER NOT NULL DEFAULT 0,
      license TEXT,
      api_input_per_m REAL,
      api_output_per_m REAL,
      consumer_plans TEXT,
      benchmarks TEXT,
      capability_delta TEXT,
      source_urls TEXT NOT NULL,
      last_verified_at TEXT,
      notes TEXT
    );

    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      company_id TEXT NOT NULL REFERENCES companies(id),
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT,
      platforms TEXT NOT NULL,
      pricing_notes TEXT,
      launch_date TEXT,
      status TEXT NOT NULL DEFAULT 'ga',
      source_urls TEXT NOT NULL,
      notes TEXT
    );

    CREATE TABLE IF NOT EXISTS features (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT,
      sort_order INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS matrix_cells (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company_id TEXT NOT NULL REFERENCES companies(id),
      feature_id TEXT NOT NULL REFERENCES features(id),
      support_level TEXT NOT NULL,
      notes TEXT,
      evidence_url TEXT,
      as_of TEXT
    );

    CREATE TABLE IF NOT EXISTS gaps (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      competitor_examples TEXT NOT NULL,
      grok_status TEXT NOT NULL,
      revenue_impact INTEGER NOT NULL,
      user_demand INTEGER NOT NULL,
      competitive_urgency INTEGER NOT NULL,
      priority_score REAL NOT NULL,
      priority TEXT NOT NULL,
      recommended_action TEXT NOT NULL,
      owner_team TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'open',
      seeded INTEGER NOT NULL DEFAULT 1,
      source_urls TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS opportunities (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      linked_gap_ids TEXT NOT NULL,
      linked_financial_signal_ids TEXT NOT NULL,
      market_category TEXT,
      estimated_tam_notes TEXT,
      recommended_move TEXT NOT NULL,
      urgency TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'open'
    );

    CREATE TABLE IF NOT EXISTS financial_signals (
      id TEXT PRIMARY KEY,
      company_id TEXT REFERENCES companies(id),
      signal_type TEXT NOT NULL,
      period TEXT,
      metric_name TEXT NOT NULL,
      metric_value TEXT,
      unit TEXT,
      is_estimate INTEGER NOT NULL DEFAULT 0,
      quote TEXT,
      source_url TEXT,
      source_reliability TEXT NOT NULL,
      as_of TEXT,
      implication_for_grok TEXT
    );

    CREATE TABLE IF NOT EXISTS events (
      id TEXT PRIMARY KEY,
      event_type TEXT NOT NULL,
      company_id TEXT REFERENCES companies(id),
      title TEXT NOT NULL,
      summary TEXT,
      occurred_at TEXT NOT NULL,
      source_url TEXT,
      severity TEXT NOT NULL DEFAULT 'info',
      tags TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sources (
      id TEXT PRIMARY KEY,
      company_id TEXT REFERENCES companies(id),
      name TEXT NOT NULL,
      url TEXT NOT NULL,
      source_type TEXT NOT NULL,
      cadence TEXT NOT NULL DEFAULT 'daily',
      enabled INTEGER NOT NULL DEFAULT 1,
      last_checked_at TEXT,
      last_hash TEXT,
      last_status TEXT,
      notes TEXT
    );

    CREATE TABLE IF NOT EXISTS scrape_runs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source_id TEXT REFERENCES sources(id),
      started_at TEXT NOT NULL,
      finished_at TEXT,
      status TEXT NOT NULL,
      change_detected INTEGER DEFAULT 0,
      error TEXT,
      content_hash TEXT
    );

    CREATE TABLE IF NOT EXISTS meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);
}

export function parseJsonArray(value: string | null | undefined): string[] {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value) as unknown;
    return Array.isArray(parsed) ? (parsed as string[]) : [];
  } catch {
    return [];
  }
}

export function parseJsonObject(
  value: string | null | undefined,
): Record<string, string | number> | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as Record<string, string | number>;
  } catch {
    return null;
  }
}
