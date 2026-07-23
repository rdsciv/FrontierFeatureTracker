import path from "node:path";
import { openDb, migrate, type TrackerSqlite } from "@fft/db";

let cached: { sqlite: TrackerSqlite; dbPath: string } | null = null;

export function getSqlite() {
  if (cached) return cached.sqlite;
  const resolved =
    process.env.FFT_DB_PATH ??
    path.resolve(
      process.cwd(),
      process.cwd().endsWith("dashboard") ? "../../data/tracker.db" : "data/tracker.db",
    );

  const { sqlite, dbPath } = openDb(resolved);
  migrate(sqlite);
  cached = { sqlite, dbPath };
  return sqlite;
}
