import { SeverityBadge } from "@/components/Badges";
import { getEvents, getModels } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default function TimelinePage() {
  const events = getEvents(100);
  const models = getModels().filter((m) => m.model.releaseDate);

  return (
    <>
      <h1>Release & competitive timeline</h1>
      <p className="subtitle">
        Chronological model releases and competitive events with capability deltas.
      </p>

      <div className="grid grid-2">
        <section>
          <h2>Events</h2>
          <div className="card" style={{ padding: "0.5rem 1rem" }}>
            {events.map(({ event, companyName }) => (
              <div key={event.id} className="timeline-item">
                <div className="timeline-date">{event.occurredAt}</div>
                <div>
                  <SeverityBadge severity={event.severity} />{" "}
                  <span className="tag">{event.eventType}</span>
                  <div style={{ marginTop: "0.25rem" }}>
                    <strong>{event.title}</strong>
                  </div>
                  <div className="muted" style={{ fontSize: "0.85rem" }}>
                    {companyName ?? "Industry"}
                    {event.summary ? ` — ${event.summary}` : ""}
                  </div>
                  {event.sourceUrl ? (
                    <a href={event.sourceUrl} target="_blank" rel="noreferrer" style={{ fontSize: "0.8rem" }}>
                      Source
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Model releases</h2>
          <div className="card" style={{ padding: "0.5rem 1rem" }}>
            {models.map(({ model, companyName, companyRegion }) => (
              <div key={model.id} className="timeline-item">
                <div className="timeline-date">{model.releaseDate}</div>
                <div>
                  <strong>{model.name}</strong>{" "}
                  <span className="muted">
                    {companyName} · {companyRegion}
                  </span>
                  {model.openWeights ? <span className="tag">open</span> : <span className="tag">closed</span>}
                  {model.moe ? <span className="tag">MoE</span> : null}
                  <div className="muted" style={{ fontSize: "0.85rem", marginTop: "0.2rem" }}>
                    {[
                      model.paramsTotal && `params ${model.paramsTotal}`,
                      model.paramsActive && `active ${model.paramsActive}`,
                      model.contextWindow && `ctx ${model.contextWindow}`,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                  {model.capabilityDelta ? (
                    <div style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>
                      Δ {model.capabilityDelta}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
