import { getSources } from "@/lib/data";

export default function SourcesPage() {
  const sources = getSources();

  return (
    <>
      <h1>Sources & collector health</h1>
      <p className="subtitle">
        Monitored URLs for the local collector (`npm run collect`). On this static GitHub Pages
        site, source health is not live — hashes are updated when you run the collector in a local
        clone and re-publish.
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
                <td className="timeline-date">
                  {s.lastCheckedAt ? String(s.lastCheckedAt).slice(0, 19) : "— (static site)"}
                </td>
                <td>{s.lastStatus ? String(s.lastStatus) : "—"}</td>
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
