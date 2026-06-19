import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import FadeIn from '@/components/FadeIn';
import { products, categories } from '@/lib/data';

export function generateStaticParams() {
  return categories.map(c => ({ category: c.slug }));
}

export default function CategoryPage({ params }) {
  const { category } = params;
  const cat = categories.find(c => c.slug === category);

  if (!cat) {
    return (
      <div className="page-wrapper">
        <section className="page-hero"><div className="container"><h1>Category Not Found</h1></div></section>
      </div>
    );
  }

  const catProducts = products.filter(p => p.categorySlug === category);

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span>{cat.name}</span>
          </div>
          <h1>{cat.icon} {cat.name}</h1>
          <p>{cat.desc} — {catProducts.length} products available</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {catProducts.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📦</div>
              <h3>No products in this category yet</h3>
              <p>Check back soon or browse other categories</p>
              <Link href="/products" className="btn btn-primary" style={{ marginTop: '16px' }}>Browse All Products →</Link>
            </div>
          ) : (
            <div className="products-grid">
              {catProducts.map((p, i) => (
                <FadeIn key={p.id} delay={i * 60}>
                  <ProductCard product={p} index={i} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
