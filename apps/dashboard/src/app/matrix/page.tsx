import { SupportCell } from "@/components/Badges";
import { getCompanies, getFeatures, getMatrix, getMeta } from "@/lib/queries";

export const dynamic = "force-dynamic";

const MATRIX_COMPANIES = [
  "xai",
  "openai",
  "anthropic",
  "google",
  "microsoft",
  "deepseek",
  "moonshot",
  "meta",
];

export default function MatrixPage() {
  const meta = getMeta();
  const features = getFeatures();
  const companies = getCompanies().filter((c) => MATRIX_COMPANIES.includes(c.id));
  // preserve MATRIX_COMPANIES order
  const ordered = MATRIX_COMPANIES.map((id) => companies.find((c) => c.id === id)).filter(
    Boolean,
  ) as typeof companies;
  const cells = getMatrix();

  const cellMap = new Map<string, (typeof cells)[0]>();
  for (const c of cells) {
    cellMap.set(`${c.companyId}::${c.featureId}`, c);
  }

  return (
    <>
      <h1>Feature comparison matrix</h1>
      <p className="subtitle">
        Primary Grok-gap view · support levels as of {meta.as_of ?? "—"}. Hover cells for notes.
      </p>

      <div className="legend">
        <span>
          <span className="cell cell-none">none</span> missing
        </span>
        <span>
          <span className="cell cell-partial">partial</span> incomplete
        </span>
        <span>
          <span className="cell cell-full">full</span> competitive
        </span>
        <span>
          <span className="cell cell-superior">superior</span> leader
        </span>
        <span>
          <span className="cell cell-unknown">unknown</span> unverified
        </span>
      </div>

      <div className="table-wrap">
        <table className="matrix-table">
          <thead>
            <tr>
              <th>Feature</th>
              {ordered.map((c) => (
                <th key={c.id}>{c.name.split(" ")[0]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f) => (
              <tr key={f.id}>
                <td>
                  <div>{f.name}</div>
                  <div className="muted" style={{ fontSize: "0.7rem" }}>
                    {f.category}
                  </div>
                </td>
                {ordered.map((c) => {
                  const cell = cellMap.get(`${c.id}::${f.id}`);
                  return (
                    <td key={c.id}>
                      {cell ? (
                        <SupportCell level={cell.supportLevel} notes={cell.notes} />
                      ) : (
                        <SupportCell level="unknown" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="card" style={{ marginTop: "1.25rem" }}>
        <h2>How to read Grok column</h2>
        <p className="muted" style={{ margin: 0 }}>
          <strong>none/partial</strong> cells vs OpenAI/Anthropic full/superior are the product and
          GTM attack surface. Enterprise SSO is full for Grok — the gap is packaging and public GTM,
          not raw identity features. Chinese open-weight and cost rows flag margin and velocity risk.
        </p>
      </section>
    </>
  );
}
