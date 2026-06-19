import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP } from '@/lib/data';

export default function ProductCard({ product, index = 0 }) {
  const p = product;
  const specs = [];
  if (p.processor !== 'N/A') specs.push(`⚡ ${p.processor}`);
  if (p.ram !== 'N/A') specs.push(`🧠 ${p.ram}`);
  if (p.storage !== 'N/A') specs.push(`💾 ${p.storage}`);

  return (
    <div className="product-card" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="product-badge">{p.badge}</div>
      <div className="product-image-wrap">
        <Image src={p.image} alt={p.name} fill sizes="(max-width:768px) 100vw, 33vw" />
      </div>
      <div className="product-body">
        <div className="product-brand">{p.brand}</div>
        <h3 className="product-name">{p.name}</h3>
        <div className="product-specs-mini">
          {specs.map((s, i) => <span key={i}>{s}</span>)}
        </div>
        {p.screen !== 'N/A' && <div className="product-specs-mini"><span>🖵 {p.screen}</span></div>}
        <div className="product-availability">
          <span className={`availability-dot ${p.availability === 'In Stock' ? 'in-stock' : 'pre-order'}`} />
          {p.availability}
        </div>
        <div className="product-pricing">
          <span className="product-price">${p.price.toLocaleString()}</span>
          {p.oldPrice && <span className="product-old-price">${p.oldPrice.toLocaleString()}</span>}
        </div>
        <div className="product-rating">
          {Array.from({ length: 5 }, (_, j) => <span key={j} className={j < p.rating ? 'star filled' : 'star'}>★</span>)}
          <span className="review-count">({p.reviews})</span>
        </div>
        <div className="product-actions">
          <Link href={`/product/${p.id}`} className="btn btn-primary btn-sm">View Details</Link>
          <a href={`https://wa.me/${WHATSAPP}?text=Hi, I'm interested in the ${p.name}`} className="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">💬 Quote</a>
        </div>
      </div>
    </div>
  );
}
