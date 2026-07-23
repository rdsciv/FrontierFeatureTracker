import { ReliabilityBadge } from "@/components/Badges";
import { getFinancialSignals } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default function FinancialPage() {
  const signals = getFinancialSignals();

  return (
    <>
      <h1>Financial & market share signals</h1>
      <p className="subtitle">
        Public ARR estimates, partner commitments, acquisitions, and IR placeholders. Estimates are
        labeled — prefer official filings for public cos at earnings.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Type</th>
              <th>Period</th>
              <th>Metric</th>
              <th>Value</th>
              <th>Reliability</th>
              <th>Implication for Grok</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {signals.map(({ signal, companyName }) => (
              <tr key={signal.id}>
                <td>{companyName ?? "Industry"}</td>
                <td>
                  <span className="tag">{signal.signalType}</span>
                  {signal.isEstimate ? <span className="tag">estimate</span> : null}
                </td>
                <td>{signal.period ?? "—"}</td>
                <td>{signal.metricName}</td>
                <td>
                  <strong>
                    {signal.metricValue ?? "—"}
                    {signal.unit ? ` ${signal.unit}` : ""}
                  </strong>
                </td>
                <td>
                  <ReliabilityBadge reliability={signal.sourceReliability} />
                </td>
                <td style={{ maxWidth: 320 }}>{signal.implicationForGrok ?? "—"}</td>
                <td>
                  {signal.sourceUrl ? (
                    <a href={signal.sourceUrl} target="_blank" rel="noreferrer">
                      link
                    </a>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="card" style={{ marginTop: "1.25rem" }}>
        <h2>High-revenue categories with Grok penetration risk</h2>
        <ul className="muted">
          <li>
            <strong style={{ color: "var(--text)" }}>Enterprise coding agents</strong> — Anthropic
            coding billings growth and OpenAI Codex/Work packaging; Cursor acquisition is the catch-up
            lever.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>SI / consultant channel</strong> — $150M OpenAI +
            $100M Anthropic programs will own deployment mindshare without a Grok Partner Network.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>Desktop Work subscriptions</strong> — super-apps
            consolidating Chat + agentic work + coding on Free-to-paid funnels.
          </li>
          <li>
            <strong style={{ color: "var(--text)" }}>Cost-sensitive API / open agents</strong> —
            Chinese open weights compress pricing and capture builder volume.
          </li>
        </ul>
      </section>
    </>
  );
}
