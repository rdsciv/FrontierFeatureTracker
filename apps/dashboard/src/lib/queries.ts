import {
  getMeta as dbMeta,
  getCompanies as dbCompanies,
  getModels as dbModels,
  getProducts as dbProducts,
  getFeatures as dbFeatures,
  getMatrix as dbMatrix,
  getGaps as dbGaps,
  getOpportunities as dbOpportunities,
  getFinancialSignals as dbFinancial,
  getEvents as dbEvents,
  getSources as dbSources,
  getChineseModels as dbChinese,
  getStats as dbStats,
} from "@fft/db";
import { getSqlite } from "./db";

export function getMeta() {
  return dbMeta(getSqlite());
}
export function getCompanies() {
  return dbCompanies(getSqlite());
}
export function getModels() {
  return dbModels(getSqlite());
}
export function getProducts() {
  return dbProducts(getSqlite());
}
export function getFeatures() {
  return dbFeatures(getSqlite());
}
export function getMatrix() {
  return dbMatrix(getSqlite());
}
export function getGaps() {
  return dbGaps(getSqlite());
}
export function getOpportunities() {
  return dbOpportunities(getSqlite());
}
export function getFinancialSignals() {
  return dbFinancial(getSqlite());
}
export function getEvents(limit = 50) {
  return dbEvents(getSqlite(), limit);
}
export function getSources() {
  return dbSources(getSqlite());
}
export function getChineseModels() {
  return dbChinese(getSqlite());
}
export function getStats() {
  return dbStats(getSqlite());
}
