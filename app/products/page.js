'use client';
import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import FadeIn from '@/components/FadeIn';
import { products } from '@/lib/data';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterBrand, setFilterBrand] = useState('All');
  const [filterProcessor, setFilterProcessor] = useState('All');
  const [filterRam, setFilterRam] = useState('All');
  const [filterStorage, setFilterStorage] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (filterCategory !== 'All' && p.category !== filterCategory) return false;
      if (filterBrand !== 'All' && p.brand !== filterBrand) return false;
      if (filterProcessor !== 'All') {
        const proc = p.processor.toLowerCase();
        if (filterProcessor === 'Intel i5' && !proc.includes('i5')) return false;
        if (filterProcessor === 'Intel i7' && !proc.includes('i7')) return false;
        if (filterProcessor === 'Intel i9' && !proc.includes('i9')) return false;
        if (filterProcessor === 'Ryzen 5' && !proc.includes('ryzen 5')) return false;
        if (filterProcessor === 'Ryzen 7' && !proc.includes('ryzen 7')) return false;
      }
      if (filterRam !== 'All') {
        const ram = p.ram.match(/(\d+)GB/);
        if (!ram) return false;
        const ramGB = parseInt(ram[1]);
        if (filterRam === '8GB' && ramGB !== 8) return false;
        if (filterRam === '16GB' && ramGB !== 16) return false;
        if (filterRam === '32GB+' && ramGB < 32) return false;
      }
      if (filterStorage !== 'All') {
        const s = p.storage.toLowerCase();
        if (filterStorage === 'SSD' && !s.includes('ssd')) return false;
        if (filterStorage === 'HDD' && !s.includes('hdd')) return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const match = p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) ||
          p.processor.toLowerCase().includes(q) || p.ram.toLowerCase().includes(q) ||
          p.storage.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [searchQuery, filterCategory, filterBrand, filterProcessor, filterRam, filterStorage]);

  const displayProducts = showAll ? filtered : filtered.slice(0, 12);
  const categories = [...new Set(products.map(p => p.category))];
  const brands = [...new Set(products.map(p => p.brand))];

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <h1>All Products</h1>
          <p>Browse our complete catalog of premium technology products</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="product-filters">
            <div className="product-search">
              <input type="text" placeholder="Search by name, brand, processor, RAM..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              <span className="search-icon">🔍</span>
            </div>
            <div className="filter-group">
              <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
                <option value="All">All Categories</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select value={filterBrand} onChange={e => setFilterBrand(e.target.value)}>
                <option value="All">All Brands</option>
                {brands.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
              <select value={filterProcessor} onChange={e => setFilterProcessor(e.target.value)}>
                <option value="All">All Processors</option>
                <option value="Intel i5">Intel i5</option>
                <option value="Intel i7">Intel i7</option>
                <option value="Intel i9">Intel i9</option>
                <option value="Ryzen 5">Ryzen 5</option>
                <option value="Ryzen 7">Ryzen 7</option>
              </select>
              <select value={filterRam} onChange={e => setFilterRam(e.target.value)}>
                <option value="All">All RAM</option>
                <option value="8GB">8GB</option>
                <option value="16GB">16GB</option>
                <option value="32GB+">32GB+</option>
              </select>
              <select value={filterStorage} onChange={e => setFilterStorage(e.target.value)}>
                <option value="All">All Storage</option>
                <option value="SSD">SSD</option>
                <option value="HDD">HDD</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="products-grid">
                {displayProducts.map((p, i) => (
                  <FadeIn key={p.id} delay={i * 40}>
                    <ProductCard product={p} index={i} />
                  </FadeIn>
                ))}
              </div>
              {filtered.length > 12 && (
                <div className="show-more-wrap">
                  <button className="btn btn-secondary" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Show Less' : `Show All ${filtered.length} Products →`}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
