import Link from "next/link";
import { PriorityBadge, SeverityBadge } from "@/components/Badges";
import {
  getEvents,
  getGaps,
  getMeta,
  getOpportunities,
  getStats,
  getChineseModels,
} from "@/lib/data";

export default function CommandCenterPage() {
  const meta = getMeta();
  const stats = getStats();
  const gaps = getGaps().filter((g) => g.status !== "won" && g.status !== "wontfix");
  const highGaps = gaps.filter((g) => g.priority === "high").slice(0, 6);
  const events = getEvents(8);
  const opps = getOpportunities().filter((o) => o.status === "open").slice(0, 5);
  const cnModels = getChineseModels().slice(0, 4);

  return (
    <>
      <h1>Command Center</h1>
      <p className="subtitle">
        Living competitive intelligence for Grok / xAI · Baseline{" "}
        <strong>{meta.baseline_date ?? "—"}</strong> · Research as of{" "}
        <strong>{meta.as_of ?? "—"}</strong>
        {meta.seeded_at ? (
          <>
            {" "}
            · Snapshot <span className="muted">{meta.seeded_at.slice(0, 10)}</span>
          </>
        ) : null}
      </p>

      <div className="card" style={{ marginBottom: "1.25rem", borderColor: "var(--high)" }}>
        <h2 style={{ color: "var(--high)", marginTop: 0 }}>July 2026 heat (not vibes)</h2>
        <p className="muted" style={{ marginTop: 0 }}>
          Gaps below are re-ranked from primary-source research — not a paste of an initial wishlist.
          The month is defined by <strong style={{ color: "var(--text)" }}>Kimi K3</strong> (2.8T open,
          Jul 16, signup crisis), <strong style={{ color: "var(--text)" }}>GPT-5.6 Sol</strong> (Jul 9),{" "}
          <strong style={{ color: "var(--text)" }}>Claude Fable 5</strong> (restored Jul 1),{" "}
          <strong style={{ color: "var(--text)" }}>GLM-5.2</strong> (MIT long-horizon), and{" "}
          <strong style={{ color: "var(--text)" }}>Inkling</strong> (open multimodal, Jul 15).
          Grok 4.5 is competitive on some boards; the gaps are open distribution, generation narrative,
          and coding-agent productization.
        </p>
      </div>

      <div className="grid grid-4" style={{ marginBottom: "1.25rem" }}>
        <div className="card">
          <div className="stat-label">High priority gaps</div>
          <div className="stat-value" style={{ color: "var(--high)" }}>
            {stats.highGaps}
          </div>
        </div>
        <div className="card">
          <div className="stat-label">Open opportunities</div>
          <div className="stat-value">{stats.opportunities}</div>
        </div>
        <div className="card">
          <div className="stat-label">Models tracked</div>
          <div className="stat-value">{stats.models}</div>
        </div>
        <div className="card">
          <div className="stat-label">Sources monitored</div>
          <div className="stat-value">{stats.sources}</div>
        </div>
      </div>

      <div className="grid grid-2">
        <section className="card stack">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Top Grok gaps</h2>
            <Link href="/gaps">All gaps →</Link>
          </div>
          {highGaps.map((g) => (
            <div key={g.id} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "0.65rem" }}>
              <div className="gap-meta">
                <PriorityBadge priority={g.priority} />
                <span className="muted">score {g.priorityScore}</span>
                <span className="tag">{g.ownerTeam}</span>
                <span className="tag">{g.grokStatus}</span>
              </div>
              <strong>{g.title}</strong>
              <div className="action">{g.recommendedAction}</div>
            </div>
          ))}
        </section>

        <section className="card stack">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Recent critical / notable events</h2>
            <Link href="/timeline">Timeline →</Link>
          </div>
          {events.map(({ event, companyName }) => (
            <div key={event.id} className="timeline-item" style={{ gridTemplateColumns: "88px 1fr", border: "none", padding: "0.4rem 0" }}>
              <div className="timeline-date">{event.occurredAt}</div>
              <div>
                <SeverityBadge severity={event.severity} />{" "}
                <strong>{event.title}</strong>
                <div className="muted" style={{ fontSize: "0.8rem" }}>
                  {companyName ?? "Industry"} · {event.eventType}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="card stack">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Steal market share</h2>
            <Link href="/opportunities">All →</Link>
          </div>
          {opps.map((o) => (
            <div key={o.id}>
              <PriorityBadge priority={o.urgency} />{" "}
              <strong>{o.title}</strong>
              <div className="muted" style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>
                {o.recommendedMove}
              </div>
            </div>
          ))}
        </section>

        <section className="card stack">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Chinese velocity pulse</h2>
            <Link href="/chinese">Full board →</Link>
          </div>
          {cnModels.map(({ model, companyName }) => (
            <div key={model.id}>
              <strong>{model.name}</strong>{" "}
              <span className="muted">({companyName})</span>
              <div className="muted" style={{ fontSize: "0.8rem" }}>
                {model.releaseDate ?? "—"} ·{" "}
                {model.openWeights ? "open weights" : "closed"} ·{" "}
                {model.paramsTotal ? `${model.paramsTotal} params` : "params n/a"}
              </div>
              {model.capabilityDelta ? (
                <div style={{ fontSize: "0.85rem", marginTop: "0.2rem" }}>
                  {model.capabilityDelta}
                </div>
              ) : null}
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
