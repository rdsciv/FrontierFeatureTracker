import { PriorityBadge } from "@/components/Badges";
import { getGaps } from "@/lib/data";

export default function GapsPage() {
  const gaps = getGaps();

  return (
    <>
      <h1>Gap analysis board</h1>
      <p className="subtitle">
        Explicit Grok / xAI competitive gaps with priority scoring. Formula: 0.4×revenue + 0.3×demand
        + 0.3×urgency (1–5 each).
      </p>

      <div className="stack">
        {gaps.map((g) => (
          <article key={g.id} className="card gap-card">
            <div className="gap-meta">
              <PriorityBadge priority={g.priority} />
              <span className="badge badge-info">{g.status}</span>
              <span className="tag">{g.ownerTeam}</span>
              <span className="tag">grok: {g.grokStatus}</span>
              {g.seeded ? (
                <span className="tag">seeded (re-scored)</span>
              ) : (
                <span className="tag">research-derived</span>
              )}
            </div>
            <h3>{g.title}</h3>
            <p style={{ margin: "0 0 0.5rem" }}>{g.description}</p>
            <div className="score-bar">
              <span>Score <strong style={{ color: "var(--text)" }}>{g.priorityScore}</strong></span>
              <span>Revenue {g.revenueImpact}/5</span>
              <span>Demand {g.userDemand}/5</span>
              <span>Urgency {g.competitiveUrgency}/5</span>
            </div>
            {g.competitorExamples.length > 0 ? (
              <div style={{ marginTop: "0.35rem" }}>
                <span className="muted" style={{ fontSize: "0.8rem" }}>
                  Competitor proof points:{" "}
                </span>
                {g.competitorExamples.map((ex) => (
                  <span key={ex} className="tag">
                    {ex}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="action">
              <strong style={{ color: "var(--text)" }}>Recommended: </strong>
              {g.recommendedAction}
            </div>
            {g.sourceUrls.length > 0 ? (
              <div style={{ marginTop: "0.5rem", fontSize: "0.8rem" }}>
                Sources:{" "}
                {g.sourceUrls.map((u) => (
                  <a key={u} href={u} target="_blank" rel="noreferrer" style={{ marginRight: "0.5rem" }}>
                    {new URL(u).hostname}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </>
  );
}
