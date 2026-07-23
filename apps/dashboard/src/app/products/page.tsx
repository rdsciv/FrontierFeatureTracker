import { getProducts } from "@/lib/data";

export default function ProductsPage() {
  const products = getProducts();

  return (
    <>
      <h1>Product surfaces & packaging</h1>
      <p className="subtitle">
        Desktop Work apps, hardware, partner networks, education, CLI/IDE, enterprise packaging.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Company</th>
              <th>Category</th>
              <th>Launch</th>
              <th>Platforms</th>
              <th>Description</th>
              <th>Sources</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({ product, companyName }) => (
              <tr key={product.id}>
                <td>
                  <strong>{product.name}</strong>
                  {product.pricingNotes ? (
                    <div className="muted" style={{ fontSize: "0.75rem" }}>
                      {product.pricingNotes}
                    </div>
                  ) : null}
                </td>
                <td>{companyName}</td>
                <td>
                  <span className="tag">{product.category}</span>
                </td>
                <td>{product.launchDate ?? "—"}</td>
                <td>{product.platforms.join(", ") || "—"}</td>
                <td style={{ maxWidth: 400 }}>
                  {product.description}
                  {product.notes ? (
                    <div className="muted" style={{ fontSize: "0.8rem", marginTop: "0.25rem" }}>
                      {product.notes}
                    </div>
                  ) : null}
                </td>
                <td>
                  {product.sourceUrls.slice(0, 2).map((u) => (
                    <div key={u}>
                      <a href={u} target="_blank" rel="noreferrer">
                        link
                      </a>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
