import Link from 'next/link';
import Image from 'next/image';
import { products, categories, WHATSAPP } from '@/lib/data';

export function generateStaticParams() {
  return products.map(p => ({ id: p.id.toString() }));
}

export default function ProductDetailPage({ params }) {
  const product = products.find(p => p.id.toString() === params.id);

  if (!product) {
    return (
      <div className="page-wrapper">
        <section className="page-hero"><div className="container"><h1>Product Not Found</h1><Link href="/products" className="btn btn-primary">Back to Products</Link></div></section>
      </div>
    );
  }

  const p = product;
  const catProducts = products.filter(pr => pr.categorySlug === p.categorySlug && pr.id !== p.id).slice(0, 4);
  const specs = [
    { label: 'Brand', value: p.brand },
    { label: 'Processor', value: p.processor },
    { label: 'RAM', value: p.ram },
    { label: 'Storage', value: p.storage },
    { label: 'Graphics', value: p.graphics },
    { label: 'Display', value: p.screen },
    { label: 'Availability', value: p.availability },
  ].filter(s => s.value !== 'N/A');

  return (
    <div className="page-wrapper">
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <Link href={`/products/${p.categorySlug}`}>{p.category}</Link> / <span>{p.name}</span>
          </div>
          <div className="product-detail-grid">
            <div className="product-detail-gallery">
              <div className="product-detail-main-image">
                <Image src={p.image} alt={p.name} fill priority sizes="(max-width:768px) 100vw, 50vw" />
              </div>
              <div className="product-detail-thumbs">
                {p.images.slice(0, 3).map((img, i) => (
                  <div key={i} className="product-detail-thumb">
                    <Image src={img} alt={`${p.name} ${i + 1}`} width={120} height={90} />
                  </div>
                ))}
              </div>
            </div>
            <div className="product-detail-info">
              <div className="product-brand">{p.brand}</div>
              <h1 className="product-detail-title">{p.name}</h1>
              <div className="product-rating" style={{ marginBottom: '16px' }}>
                {Array.from({ length: 5 }, (_, j) => <span key={j} className={j < p.rating ? 'star filled' : 'star'}>★</span>)}
                <span style={{ marginLeft: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>({p.reviews} reviews)</span>
              </div>
              <div className="product-detail-price-wrap">
                <span className="product-detail-price">${p.price.toLocaleString()}</span>
                {p.oldPrice && <span className="product-detail-old-price">${p.oldPrice.toLocaleString()}</span>}
                {p.oldPrice && (
                  <span className="product-detail-save">Save ${(p.oldPrice - p.price).toLocaleString()}</span>
                )}
              </div>
              <div className="product-detail-availability">
                <span className={`availability-dot ${p.availability === 'In Stock' ? 'in-stock' : 'pre-order'}`} />
                {p.availability}
                {p.availability === 'In Stock' && <span className="product-detail-ship">Ships within 24 hours</span>}
              </div>
              <p className="product-detail-desc">{p.description}</p>

              <div className="product-detail-specs">
                <h3>Key Specifications</h3>
                <table className="specs-table">
                  <tbody>
                    {specs.map(s => (
                      <tr key={s.label}>
                        <td className="specs-label">{s.label}</td>
                        <td className="specs-value">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="product-detail-actions">
                <a href={`https://wa.me/${WHATSAPP}?text=Hi, I'm interested in the ${p.name} ($${p.price})`} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 Request Quote</a>
                <a href={`https://wa.me/${WHATSAPP}?text=Hi, I have a question about the ${p.name}`} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp Inquiry</a>
                <a href={`tel:+${WHATSAPP}`} className="btn btn-secondary">📞 Call Now</a>
              </div>
            </div>
          </div>

          {catProducts.length > 0 && (
            <section style={{ marginTop: '80px' }}>
              <div className="section-header"><div className="section-label">Related Products</div><h2>More {p.category}</h2></div>
              <div className="products-grid">
                {catProducts.map(pr => (
                  <Link key={pr.id} href={`/product/${pr.id}`} className="product-card-link">
                    <div className="product-card">
                      <div className="product-badge">{pr.badge}</div>
                      <div className="product-image-wrap">
                        <Image src={pr.image} alt={pr.name} fill sizes="300px" />
                      </div>
                      <div className="product-body">
                        <div className="product-brand">{pr.brand}</div>
                        <h3 className="product-name">{pr.name}</h3>
                        <div className="product-pricing">
                          <span className="product-price">${pr.price.toLocaleString()}</span>
                          {pr.oldPrice && <span className="product-old-price">${pr.oldPrice.toLocaleString()}</span>}
                        </div>
                        <div className="product-availability">
                          <span className={`availability-dot ${pr.availability === 'In Stock' ? 'in-stock' : 'pre-order'}`} />{pr.availability}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}
