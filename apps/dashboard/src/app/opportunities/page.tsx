import { PriorityBadge } from "@/components/Badges";
import { getOpportunities } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default function OpportunitiesPage() {
  const opps = getOpportunities();

  return (
    <>
      <h1>Market share opportunities</h1>
      <p className="subtitle">
        “Steal market share here” recommendations tied to gaps and public financial signals.
      </p>

      <div className="grid grid-2">
        {opps.map((o) => (
          <article key={o.id} className="card">
            <div className="gap-meta">
              <PriorityBadge priority={o.urgency} />
              <span className="tag">{o.status}</span>
              {o.marketCategory ? <span className="tag">{o.marketCategory}</span> : null}
            </div>
            <h3>{o.title}</h3>
            {o.description ? <p className="muted">{o.description}</p> : null}
            <div className="action">{o.recommendedMove}</div>
            {o.estimatedTamNotes ? (
              <p style={{ fontSize: "0.85rem", marginTop: "0.65rem" }}>
                <strong>TAM / signal notes:</strong> {o.estimatedTamNotes}
              </p>
            ) : null}
            <div style={{ marginTop: "0.5rem", fontSize: "0.8rem" }} className="muted">
              Gaps: {o.linkedGapIds.join(", ") || "—"} · Signals:{" "}
              {o.linkedFinancialSignalIds.join(", ") || "—"}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
