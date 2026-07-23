import { getChineseModels, getCompanies, getGaps } from "@/lib/data";

export default function ChineseVelocityPage() {
  const models = getChineseModels();
  const companies = getCompanies().filter((c) => c.region === "chinese");
  const gap = getGaps().find((g) => g.id === "gap-chinese-velocity");

  return (
    <>
      <h1>Chinese model velocity</h1>
      <p className="subtitle">
        High-priority board for open-weight cadence, cost advantages, and multi-agent capability
        jumps from DeepSeek, Moonshot/Kimi, Qwen, GLM, MiniMax, ByteDance.
      </p>

      {gap ? (
        <div className="card" style={{ marginBottom: "1rem", borderColor: "var(--high)" }}>
          <h2 style={{ color: "var(--high)" }}>Strategic flag</h2>
          <p style={{ marginTop: 0 }}>{gap.description}</p>
          <div className="action">{gap.recommendedAction}</div>
        </div>
      ) : null}

      <h2>Labs</h2>
      <div className="grid grid-4" style={{ marginBottom: "1.25rem" }}>
        {companies.map((c) => (
          <div key={c.id} className="card">
            <strong>{c.name}</strong>
            <div className="muted" style={{ fontSize: "0.8rem", marginTop: "0.25rem" }}>
              {c.notes}
            </div>
            {c.website ? (
              <a href={c.website} target="_blank" rel="noreferrer" style={{ fontSize: "0.8rem" }}>
                Site
              </a>
            ) : null}
          </div>
        ))}
      </div>

      <h2>Model releases</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Release</th>
              <th>Model</th>
              <th>Lab</th>
              <th>Params</th>
              <th>Context</th>
              <th>Open</th>
              <th>License</th>
              <th>Capability delta</th>
            </tr>
          </thead>
          <tbody>
            {models.map(({ model, companyName }) => (
              <tr key={model.id}>
                <td className="timeline-date">{model.releaseDate ?? "—"}</td>
                <td>
                  <strong>{model.name}</strong>
                </td>
                <td>{companyName}</td>
                <td>
                  {model.paramsTotal ?? "—"}
                  {model.paramsActive ? (
                    <div className="muted" style={{ fontSize: "0.75rem" }}>
                      active {model.paramsActive}
                    </div>
                  ) : null}
                  {model.moe ? <span className="tag">MoE</span> : null}
                </td>
                <td>{model.contextWindow ?? "—"}</td>
                <td>{model.openWeights ? "yes" : "no"}</td>
                <td>{model.license ?? "—"}</td>
                <td style={{ maxWidth: 360 }}>{model.capabilityDelta ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
