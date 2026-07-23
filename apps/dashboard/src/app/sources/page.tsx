import { getSources } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default function SourcesPage() {
  const sources = getSources();

  return (
    <>
      <h1>Sources & collector health</h1>
      <p className="subtitle">
        Monitored URLs for daily/weekly/quarterly scrapes. Run{" "}
        <code style={{ color: "var(--accent)" }}>npm run collect</code> to refresh hashes and alerts.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Cadence</th>
              <th>Enabled</th>
              <th>Last check</th>
              <th>Status</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((s) => (
              <tr key={s.id}>
                <td>
                  <strong>{s.name}</strong>
                </td>
                <td>
                  <span className="tag">{s.sourceType}</span>
                </td>
                <td>{s.cadence}</td>
                <td>{s.enabled ? "yes" : "no"}</td>
                <td className="timeline-date">{s.lastCheckedAt?.slice(0, 19) ?? "never"}</td>
                <td>{s.lastStatus ?? "—"}</td>
                <td>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    open
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
