'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const heroSlides = [
  { title: 'Business Laptops', subtitle: 'Premium business laptops from HP, Dell & Lenovo — built for productivity.', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1920&q=80', icon: '💻' },
  { title: 'Gaming PCs', subtitle: 'High-performance gaming rigs with RTX graphics, RGB lighting & liquid cooling.', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1920&q=80', icon: '🎮' },
  { title: 'Monitors & Displays', subtitle: 'Ultra-sharp 4K monitors for design, gaming, and business productivity.', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1920&q=80', icon: '🖥️' },
  { title: 'Printers & Scanners', subtitle: 'Multi-function printers and scanners for home, office, and enterprise.', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=1920&q=80', icon: '🖨️' },
  { title: 'Networking', subtitle: 'Enterprise switches, routers, access points, and structured cabling solutions.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc41?w=1920&q=80', icon: '🌐' },
  { title: 'Security Systems', subtitle: 'CCTV cameras, NVRs, and integrated surveillance for total protection.', image: 'https://images.unsplash.com/photo-1557597774-a910ad3a4b0c?w=1920&q=80', icon: '📹' },
];

const categories = [
  { name: 'Laptops', icon: '💻', count: '50+ Products', color: '#3b82f6', desc: 'Business, gaming & ultrabooks' },
  { name: 'Gaming PCs', icon: '🎮', count: '30+ Products', color: '#8b5cf6', desc: 'Custom & pre-built gaming rigs' },
  { name: 'Desktops', icon: '🖥️', count: '25+ Products', color: '#06b6d4', desc: 'Office & workstation desktops' },
  { name: 'Monitors', icon: '🖵', count: '20+ Products', color: '#10b981', desc: '4K, ultrawide & professional' },
  { name: 'Printers', icon: '🖨️', count: '15+ Products', color: '#f59e0b', desc: 'Laser, inkjet & multifunction' },
  { name: 'Networking', icon: '🌐', count: '40+ Products', color: '#ef4444', desc: 'Switches, routers & access points' },
  { name: 'Accessories', icon: '⌨️', count: '100+ Products', color: '#ec4899', desc: 'Keyboards, mice, bags & more' },
  { name: 'Storage', icon: '💾', count: '20+ Products', color: '#6366f1', desc: 'SSDs, HDDs & NAS solutions' },
];

const featuredProducts = [
  { id: 1, name: 'HP EliteBook 840 G10', brand: 'HP', category: 'Laptops', processor: 'Intel Core i7-1365U', ram: '16GB DDR5', storage: '512GB NVMe SSD', graphics: 'Intel Iris Xe', screen: '14" FHD IPS', price: '$1,250', oldPrice: '$1,450', rating: 5, reviews: 48, availability: 'In Stock', badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80' },
  { id: 2, name: 'Dell XPS 15 9530', brand: 'Dell', category: 'Laptops', processor: 'Intel Core i9-13900H', ram: '32GB DDR5', storage: '1TB NVMe SSD', graphics: 'NVIDIA RTX 4060', screen: '15.6" 3.5K OLED', price: '$2,199', oldPrice: '$2,499', rating: 5, reviews: 32, availability: 'In Stock', badge: 'Premium', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62ad6?w=600&q=80' },
  { id: 3, name: 'Lenovo ThinkPad X1 Carbon', brand: 'Lenovo', category: 'Laptops', processor: 'Intel Core i7-1365U', ram: '16GB LPDDR5', storage: '512GB SSD', graphics: 'Intel Iris Xe', screen: '14" 2.8K OLED', price: '$1,599', oldPrice: '$1,799', rating: 5, reviews: 41, availability: 'In Stock', badge: 'Popular', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80' },
  { id: 4, name: 'ASUS ROG Strix G16', brand: 'ASUS', category: 'Gaming PCs', processor: 'Intel Core i9-13980HX', ram: '32GB DDR5', storage: '1TB NVMe SSD', graphics: 'NVIDIA RTX 4070', screen: '16" QHD 240Hz', price: '$1,899', oldPrice: '$2,199', rating: 5, reviews: 67, availability: 'In Stock', badge: 'Gaming', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80' },
  { id: 5, name: 'HP LaserJet Pro M404dn', brand: 'HP', category: 'Printers', processor: 'N/A', ram: '256MB', storage: 'N/A', graphics: 'N/A', screen: 'N/A', price: '$420', oldPrice: '$499', rating: 4, reviews: 23, availability: 'In Stock', badge: 'Top Pick', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80' },
  { id: 6, name: 'Cisco Catalyst 9200L', brand: 'Cisco', category: 'Networking', processor: 'N/A', ram: 'N/A', storage: 'N/A', graphics: 'N/A', screen: 'N/A', price: '$2,800', oldPrice: '$3,200', rating: 5, reviews: 15, availability: 'In Stock', badge: 'Enterprise', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc41?w=600&q=80' },
  { id: 7, name: 'MSI Katana 15 B13VFK', brand: 'MSI', category: 'Gaming PCs', processor: 'Intel Core i7-13620H', ram: '16GB DDR5', storage: '512GB NVMe SSD', graphics: 'NVIDIA RTX 4060', screen: '15.6" FHD 144Hz', price: '$1,149', oldPrice: '$1,349', rating: 4, reviews: 55, availability: 'In Stock', badge: 'Hot Deal', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62ad6?w=600&q=80' },
  { id: 8, name: 'Dell UltraSharp U2723QE', brand: 'Dell', category: 'Monitors', processor: 'N/A', ram: 'N/A', storage: 'N/A', graphics: 'N/A', screen: '27" 4K USB-C Hub', price: '$619', oldPrice: '$719', rating: 5, reviews: 89, availability: 'In Stock', badge: 'Editor Choice', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80' },
  { id: 9, name: 'Canon imageCLASS MF445dw', brand: 'Canon', category: 'Printers', processor: 'N/A', ram: '1GB', storage: 'N/A', graphics: 'N/A', screen: 'N/A', price: '$549', oldPrice: '$649', rating: 4, reviews: 31, availability: 'In Stock', badge: 'All-in-One', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80' },
  { id: 10, name: 'Acer Predator Orion 7000', brand: 'Acer', category: 'Gaming PCs', processor: 'Intel Core i9-13900K', ram: '64GB DDR5', storage: '2TB NVMe SSD', graphics: 'NVIDIA RTX 4090', screen: 'N/A', price: '$3,499', oldPrice: '$3,999', rating: 5, reviews: 12, availability: 'Pre-Order', badge: 'Flagship', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80' },
  { id: 11, name: 'Logitech MX Master 3S', brand: 'Logitech', category: 'Accessories', processor: 'N/A', ram: 'N/A', storage: 'N/A', graphics: 'N/A', screen: 'N/A', price: '$99', oldPrice: '$129', rating: 5, reviews: 210, availability: 'In Stock', badge: 'Top Rated', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51c03?w=600&q=80' },
  { id: 12, name: 'Samsung 980 PRO 2TB', brand: 'Samsung', category: 'Storage', processor: 'N/A', ram: 'N/A', storage: '2TB NVMe', graphics: 'N/A', screen: 'N/A', price: '$179', oldPrice: '$219', rating: 5, reviews: 156, availability: 'In Stock', badge: 'Fast SSD', image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=600&q=80' },
];

const bestSellers = {
  laptops: [
    { name: 'HP EliteBook 840 G10', price: '$1,250', rating: 5, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80' },
    { name: 'Dell XPS 15 9530', price: '$2,199', rating: 5, image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62ad6?w=400&q=80' },
    { name: 'Lenovo ThinkPad X1', price: '$1,599', rating: 5, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80' },
    { name: 'ASUS ROG Strix G16', price: '$1,899', rating: 5, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80' },
  ],
  desktops: [
    { name: 'Dell OptiPlex 7010', price: '$899', rating: 4, image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc41?w=400&q=80' },
    { name: 'HP ProDesk 400 G9', price: '$749', rating: 4, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&q=80' },
    { name: 'Acer Predator Orion', price: '$3,499', rating: 5, image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=80' },
  ],
  printers: [
    { name: 'HP LaserJet Pro M404', price: '$420', rating: 4, image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80' },
    { name: 'Canon imageCLASS MF445', price: '$549', rating: 4, image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80' },
    { name: 'Epson EcoTank L3250', price: '$299', rating: 5, image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80' },
  ],
  accessories: [
    { name: 'Logitech MX Master 3S', price: '$99', rating: 5, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51c03?w=400&q=80' },
    { name: 'Samsung 980 PRO 2TB', price: '$179', rating: 5, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&q=80' },
    { name: 'Logitech MX Keys S', price: '$109', rating: 5, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51c03?w=400&q=80' },
  ],
};

const newArrivals = [
  { name: 'HP EliteBook 840 G11', brand: 'HP', category: 'Laptops', price: '$1,399', badge: 'New', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80' },
  { name: 'Dell UltraSharp 32 4K', brand: 'Dell', category: 'Monitors', price: '$799', badge: 'New', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80' },
  { name: 'MSI Katana 17 B13VFK', brand: 'MSI', category: 'Gaming PCs', price: '$1,299', badge: 'New', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80' },
  { name: 'Canon PIXMA G6070', brand: 'Canon', category: 'Printers', price: '$349', badge: 'New', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80' },
];

const brands = [
  { name: 'HP', logo: 'HP' },
  { name: 'Dell', logo: 'Dell' },
  { name: 'Lenovo', logo: 'Lenovo' },
  { name: 'ASUS', logo: 'ASUS' },
  { name: 'Acer', logo: 'Acer' },
  { name: 'MSI', logo: 'MSI' },
  { name: 'Apple', logo: 'Apple' },
  { name: 'Canon', logo: 'Canon' },
  { name: 'Epson', logo: 'Epson' },
  { name: 'Logitech', logo: 'Logitech' },
];

const whyChoose = [
  { icon: '✅', title: 'Genuine Products', desc: 'All products are 100% genuine with manufacturer warranty. No grey market imports.' },
  { icon: '🛡️', title: 'Manufacturer Warranty', desc: 'Full manufacturer warranty on every product. Extended warranty options available.' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Best prices in Zimbabwe with price match guarantee on identical products.' },
  { icon: '🔧', title: 'Expert Technical Support', desc: 'Our certified technicians provide professional setup, configuration, and support.' },
  { icon: '🚚', title: 'Fast Delivery', desc: 'Same-day delivery in Harare. Nationwide delivery within 2-3 business days.' },
  { icon: '🏢', title: 'Business Solutions', desc: 'Volume discounts, corporate accounts, and tailored procurement for businesses.' },
  { icon: '⚙️', title: 'Professional Installation', desc: 'On-site installation and configuration for networking, CCTV, and infrastructure.' },
  { icon: '🤝', title: 'After-Sales Support', desc: 'Ongoing technical support, maintenance contracts, and repair services.' },
];

const services = [
  { icon: '🔧', title: 'IT Support', desc: 'On-site and remote technical support for businesses and individuals. Hardware repairs, software troubleshooting, and maintenance contracts.' },
  { icon: '🌐', title: 'Network Installation', desc: 'Professional network design, cabling, switch and router configuration, WiFi deployment, and structured cabling for offices and buildings.' },
  { icon: '📹', title: 'CCTV & Security', desc: 'Complete surveillance solutions — CCTV cameras, NVRs, access control, alarm systems, and remote monitoring for homes and businesses.' },
  { icon: '💻', title: 'Software Solutions', desc: 'Custom software development, POS systems, accounting software, antivirus solutions, and Microsoft 365 deployment.' },
  { icon: '🖥️', title: 'Server Management', desc: 'Server setup, virtualization, backup solutions, and ongoing server maintenance and monitoring for business continuity.' },
  { icon: '☁️', title: 'Cloud Services', desc: 'Cloud migration, Microsoft Azure, Google Workspace, backup solutions, and cloud-based email and collaboration tools.' },
];

const testimonials = [
  { name: 'Tendai M.', role: 'CTO, Harvest Bank', text: 'CoreTech supplied our entire office with HP laptops and networking equipment. Outstanding quality and their support team is always available. Highly recommend!', rating: 5 },
  { name: 'Nyasha K.', role: 'Director, EduZim Academy', text: 'We purchased 50 Dell laptops and a complete network setup from CoreTech. The installation was seamless and the after-sales support has been exceptional.', rating: 5 },
  { name: 'Munashe R.', role: 'Founder, TechHub ZW', text: 'Best prices on gaming PCs in Zimbabwe! CoreTech built me a custom RTX 4070 rig that runs flawlessly. Their team really knows their stuff.', rating: 5 },
  { name: 'Rumbidzai C.', role: 'Manager, Hotel Paramount', text: 'CoreTech installed our entire CCTV system and POS setup. Professional service from start to finish. They even trained our staff on using the systems.', rating: 5 },
  { name: 'James T.', role: 'IT Lead, Paramount Group', text: 'We have been sourcing all our IT equipment from CoreTech for 3 years. Their warranty support is excellent and pricing is very competitive.', rating: 5 },
];

const faqs = [
  { q: 'Do you offer delivery across Zimbabwe?', a: 'Yes! We offer same-day delivery in Harare and nationwide delivery within 2-3 business days to all major cities and towns.' },
  { q: 'Are all products genuine with warranty?', a: 'Absolutely. Every product we sell is 100% genuine with full manufacturer warranty. We are authorized resellers for HP, Dell, Lenovo, and other major brands.' },
  { q: 'Can I get a custom-built gaming PC?', a: 'Yes! We offer custom PC building services. Choose your components and our technicians will assemble, test, and deliver a fully configured gaming rig.' },
  { q: 'Do you offer business/corporate pricing?', a: 'Yes, we offer volume discounts for businesses, schools, and organizations. Contact us for corporate pricing on bulk orders.' },
  { q: 'What payment methods do you accept?', a: 'We accept EcoCash, bank transfer, USD cash, and Visa/Mastercard. For corporate clients, we also offer credit terms.' },
  { q: 'Do you provide installation and setup?', a: 'Yes! We provide professional on-site installation for networks, CCTV systems, servers, and office IT setups across Zimbabwe.' },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, className = '', delay = 0 }) {
  const [ref, vis] = useInView();
  return <div ref={ref} className={`fade-in ${vis ? 'visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, vis] = useInView();
  useEffect(() => {
    if (!vis) return;
    let s = 0;
    const step = target / 125;
    const t = setInterval(() => { s += step; if (s >= target) { setCount(target); clearInterval(t); } else { setCount(Math.floor(s)); } }, 16);
    return () => clearInterval(t);
  }, [vis, target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('laptops');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterBrand, setFilterBrand] = useState('All');
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const filteredProducts = featuredProducts.filter(p => {
    if (filterCategory !== 'All' && p.category !== filterCategory) return false;
    if (filterBrand !== 'All' && p.brand !== filterBrand) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase()) && !p.brand.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const displayProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <a href="#" className="nav-logo">
            <Image src="/logo.jpg" alt="CoreTech" width={40} height={40} style={{ borderRadius: '8px', objectFit: 'cover' }} />
            <span>CoreTech</span>
          </a>
          <ul className="nav-links">
            <li><a href="#products">Products</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-actions">
            <a href="https://wa.me/263770000000" className="nav-cta nav-cta-outline" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            <a href="#products" className="nav-cta nav-cta-primary">Shop Now →</a>
          </div>
          <button className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="https://wa.me/263770000000" className="nav-cta nav-cta-outline" target="_blank" rel="noopener noreferrer" style={{ marginTop: '16px' }}>💬 WhatsApp</a>
        <a href="#products" className="nav-cta nav-cta-primary" onClick={() => setMenuOpen(false)}>Shop Now →</a>
      </div>

      <section className="hero">
        <div className="hero-bg">
          {heroSlides.map((s, i) => (
            <div key={i} className={`hero-slide ${i === slide ? 'active' : ''}`} style={{ backgroundImage: `url(${s.image})` }} />
          ))}
          <div className="hero-overlay" />
        </div>
        <div className="hero-particles">
          {[...Array(10)].map((_, i) => <div key={i} className="particle" />)}
        </div>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge"><span className="hero-badge-dot" /> Zimbabwe&apos;s Trusted Technology Store</div>
            <h1>Technology That<br />Powers <span className="highlight">Your Success</span></h1>
            <p>Discover premium laptops, desktops, gaming PCs, networking equipment, printers, accessories and business technology solutions from trusted global brands.</p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">Browse Products →</a>
              <a href="#contact" className="btn btn-secondary">Get a Quote</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><div className="hero-stat-number"><Counter target={5000} suffix="+" /></div><div className="hero-stat-label">Devices Sold</div></div>
              <div className="hero-stat"><div className="hero-stat-number"><Counter target={1000} suffix="+" /></div><div className="hero-stat-label">Happy Customers</div></div>
              <div className="hero-stat"><div className="hero-stat-number"><Counter target={50} suffix="+" /></div><div className="hero-stat-label">Business Clients</div></div>
              <div className="hero-stat"><div className="hero-stat-number"><Counter target={10} suffix="+" /></div><div className="hero-stat-label">Years Experience</div></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-carousel-card">
              <div className="hero-carousel-icon">{heroSlides[slide].icon}</div>
              <h3>{heroSlides[slide].title}</h3>
              <p>{heroSlides[slide].subtitle}</p>
              <div className="hero-carousel-dots">
                {heroSlides.map((_, i) => (
                  <button key={i} className={`hero-carousel-dot ${i === slide ? 'active' : ''}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="hero-scroll-line" /></div>
      </section>

      <section className="trust-bar">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">✅ Genuine Products</div>
            <div className="trust-item">🛡️ Manufacturer Warranty</div>
            <div className="trust-item">🚚 Nationwide Delivery</div>
            <div className="trust-item">🔧 Expert Support</div>
            <div className="trust-item">💰 Best Prices</div>
          </div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Shop By Category</div><h2>Find What You Need</h2><p>Browse our complete range of technology products by category</p></div></FadeIn>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <FadeIn key={i} delay={i * 80}>
                <a href="#products" className="category-card" onClick={() => { setFilterCategory(cat.name === 'Gaming PCs' ? 'Gaming PCs' : cat.name === 'Laptops' ? 'Laptops' : 'All'); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <div className="category-icon" style={{ background: `${cat.color}15`, color: cat.color }}>{cat.icon}</div>
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                  <span className="category-count">{cat.count}</span>
                  <span className="category-arrow">→</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="products">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Featured Products</div><h2>Explore Our Best Technology</h2><p>Premium products from the world&apos;s leading technology brands</p></div></FadeIn>
          <div className="product-filters">
            <div className="product-search">
              <input type="text" placeholder="Search products..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              <span className="search-icon">🔍</span>
            </div>
            <div className="filter-group">
              <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
                <option value="All">All Categories</option>
                <option value="Laptops">Laptops</option>
                <option value="Gaming PCs">Gaming PCs</option>
                <option value="Desktops">Desktops</option>
                <option value="Monitors">Monitors</option>
                <option value="Printers">Printers</option>
                <option value="Networking">Networking</option>
                <option value="Accessories">Accessories</option>
                <option value="Storage">Storage</option>
              </select>
              <select value={filterBrand} onChange={e => setFilterBrand(e.target.value)}>
                <option value="All">All Brands</option>
                <option value="HP">HP</option>
                <option value="Dell">Dell</option>
                <option value="Lenovo">Lenovo</option>
                <option value="ASUS">ASUS</option>
                <option value="Acer">Acer</option>
                <option value="MSI">MSI</option>
                <option value="Canon">Canon</option>
                <option value="Cisco">Cisco</option>
                <option value="Logitech">Logitech</option>
                <option value="Samsung">Samsung</option>
              </select>
            </div>
          </div>
          <div className="products-grid">
            {displayProducts.map((p, i) => (
              <FadeIn key={p.id} delay={i * 60}>
                <div className="product-card">
                  <div className="product-badge">{p.badge}</div>
                  <div className="product-image-wrap">
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} sizes="(max-width:768px) 100vw, 33vw" />
                  </div>
                  <div className="product-body">
                    <div className="product-brand">{p.brand}</div>
                    <h3 className="product-name">{p.name}</h3>
                    <div className="product-specs-mini">
                      {p.processor !== 'N/A' && <span>⚡ {p.processor}</span>}
                      {p.ram !== 'N/A' && <span>🧠 {p.ram}</span>}
                      {p.storage !== 'N/A' && <span>💾 {p.storage}</span>}
                    </div>
                    {p.graphics !== 'N/A' && <div className="product-specs-mini"><span>🎮 {p.graphics}</span></div>}
                    {p.screen !== 'N/A' && <div className="product-specs-mini"><span>🖵 {p.screen}</span></div>}
                    <div className="product-availability"><span className={`availability-dot ${p.availability === 'In Stock' ? 'in-stock' : 'pre-order'}`} />{p.availability}</div>
                    <div className="product-pricing">
                      <span className="product-price">{p.price}</span>
                      {p.oldPrice && <span className="product-old-price">{p.oldPrice}</span>}
                    </div>
                    <div className="product-rating">{Array.from({ length: 5 }, (_, j) => <span key={j} className={j < p.rating ? 'star filled' : 'star'}>★</span>)}<span className="review-count">({p.reviews})</span></div>
                    <div className="product-actions">
                      <a href="#contact" className="btn btn-primary btn-sm">View Details</a>
                      <a href={`https://wa.me/263770000000?text=Hi, I'm interested in the ${p.name}`} className="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">💬 Quote</a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          {filteredProducts.length > 8 && (
            <div className="show-more-wrap">
              <button className="btn btn-secondary" onClick={() => setShowAllProducts(!showAllProducts)}>
                {showAllProducts ? 'Show Less' : `Show All ${filteredProducts.length} Products →`}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section best-sellers-section">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Best Sellers</div><h2>Most Popular Products</h2><p>Our customers&apos; top picks across every category</p></div></FadeIn>
          <div className="best-seller-tabs">
            {Object.keys(bestSellers).map(key => (
              <button key={key} className={`best-seller-tab ${activeCategory === key ? 'active' : ''}`} onClick={() => setActiveCategory(key)}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
          <div className="best-sellers-grid">
            {bestSellers[activeCategory].map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="best-seller-card">
                  <div className="best-seller-image-wrap">
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} sizes="300px" />
                  </div>
                  <div className="best-seller-info">
                    <h4>{p.name}</h4>
                    <div className="product-rating">{Array.from({ length: 5 }, (_, j) => <span key={j} className={j < p.rating ? 'star filled' : 'star'}>★</span>)}</div>
                    <div className="best-seller-price">{p.price}</div>
                    <a href={`https://wa.me/263770000000?text=Hi, I'm interested in ${p.name}`} className="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">💬 Inquire</a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">New Arrivals</div><h2>Just Landed</h2><p>The latest technology products, fresh in stock</p></div></FadeIn>
          <div className="new-arrivals-grid">
            {newArrivals.map((p, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="new-arrival-card">
                  <div className="new-badge">{p.badge}</div>
                  <div className="new-arrival-image-wrap">
                    <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} sizes="300px" />
                  </div>
                  <div className="new-arrival-info">
                    <div className="new-arrival-brand">{p.brand}</div>
                    <h4>{p.name}</h4>
                    <span className="new-arrival-cat">{p.category}</span>
                    <div className="new-arrival-price">{p.price}</div>
                    <a href={`https://wa.me/263770000000?text=Hi, I'm interested in the new ${p.name}`} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Inquire Now →</a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section brands-section">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Brands We Stock</div><h2>Trusted Global Brands</h2><p>Authorized reseller for the world&apos;s leading technology brands</p></div></FadeIn>
          <div className="brands-grid">
            {brands.map((b, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="brand-card">{b.logo}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="about">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Why CoreTech</div><h2>The CoreTech <span className="highlight">Advantage</span></h2><p>Why thousands of customers trust us for their technology needs</p></div></FadeIn>
          <div className="why-grid">
            {whyChoose.map((w, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="why-card">
                  <div className="why-icon">{w.icon}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Our Services</div><h2>Professional <span className="highlight">IT Services</span></h2><p>Beyond products — we provide complete technology solutions</p></div></FadeIn>
          <div className="services-grid">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href="#contact" className="learn-more">Learn more →</a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Testimonials</div><h2>What Our Clients Say</h2><p>Trusted by businesses and individuals across Zimbabwe</p></div></FadeIn>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">{Array.from({ length: 5 }, (_, j) => <span key={j} className="star filled">★</span>)}</div>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.name[0]}</div>
                    <div className="testimonial-info"><h4>{t.name}</h4><p>{t.role}</p></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">FAQ</div><h2>Frequently Asked Questions</h2><p>Everything you need to know about shopping with CoreTech</p></div></FadeIn>
          <div className="faq-grid">
            {faqs.map((f, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="faq-question"><span>{f.q}</span><span className="faq-chevron">▾</span></div>
                  <div className="faq-answer"><p>{f.a}</p></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg" />
        <div className="container">
          <FadeIn>
            <div className="cta-content">
              <h2>Ready to Power Up?</h2>
              <p>Whether you need a single laptop or a complete office IT setup, CoreTech has you covered. Get in touch today for personalized recommendations and competitive pricing.</p>
              <div className="cta-buttons">
                <a href="#contact" className="btn btn-primary">Start a Project →</a>
                <a href="https://wa.me/263770000000" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section-alt contact" id="contact">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Contact Us</div><h2>Get In Touch</h2><p>Ready to transform your business with technology? Let&apos;s talk.</p></div></FadeIn>
          <div className="contact-grid">
            <FadeIn>
              <div className="contact-info">
                <h3>Let&apos;s build something great together</h3>
                <p>Visit our showroom in Harare or reach out for product inquiries, quotes, and technical support.</p>
                <div className="contact-item"><div className="contact-item-icon">📍</div><div className="contact-item-text"><h4>Location</h4><p>Harare, Zimbabwe</p></div></div>
                <div className="contact-item"><div className="contact-item-icon">✉️</div><div className="contact-item-text"><h4>Email</h4><p>info@coretech.co.zw</p></div></div>
                <div className="contact-item"><div className="contact-item-icon">📞</div><div className="contact-item-text"><h4>Phone</h4><p>+263 77 000 0000</p></div></div>
                <div className="contact-item"><div className="contact-item-icon">🕐</div><div className="contact-item-text"><h4>Business Hours</h4><p>Mon — Fri: 8:00 AM — 5:00 PM</p></div></div>
              </div>
            </FadeIn>
            <FadeIn>
              <form className="contact-form" action="https://formsubmit.co/info@coretech.co.zw" method="POST">
                <div className="form-row"><input type="text" name="name" placeholder="Your Name" required /><input type="phone" name="phone" placeholder="Your Phone" required /></div>
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Tell us what you need — products, quantities, specifications..." required></textarea>
                <button type="submit" className="btn btn-primary">Send Message →</button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="nav-logo"><Image src="/logo.jpg" alt="CoreTech" width={40} height={40} style={{ borderRadius: '8px', objectFit: 'cover' }} /><span>CoreTech</span></a>
              <p>Zimbabwe&apos;s trusted technology store. Premium laptops, desktops, gaming PCs, networking equipment, and IT solutions.</p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Twitter">TW</a>
                <a href="#" aria-label="LinkedIn">LI</a>
                <a href="#" aria-label="Instagram">IG</a>
              </div>
            </div>
            <div className="footer-col"><h4>Products</h4><ul><li><a href="#products">Laptops</a></li><li><a href="#products">Gaming PCs</a></li><li><a href="#products">Desktops</a></li><li><a href="#products">Monitors</a></li><li><a href="#products">Printers</a></li><li><a href="#products">Networking</a></li><li><a href="#products">Accessories</a></li></ul></div>
            <div className="footer-col"><h4>Services</h4><ul><li><a href="#services">IT Support</a></li><li><a href="#services">Network Installation</a></li><li><a href="#services">CCTV Systems</a></li><li><a href="#services">Software Solutions</a></li><li><a href="#services">Server Management</a></li><li><a href="#services">Cloud Services</a></li></ul></div>
            <div className="footer-col"><h4>Company</h4><ul><li><a href="#about">About Us</a></li><li><a href="#categories">Products</a></li><li><a href="#services">Services</a></li><li><a href="#contact">Contact</a></li><li><a href="#">Careers</a></li></ul></div>
            <div className="footer-col">
              <h4>Newsletter</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>Get deals, tips & new product alerts.</p>
              <form className="newsletter-form" onSubmit={e => { e.preventDefault(); e.target.querySelector('button').textContent = '✓ Subscribed!'; setTimeout(() => { e.target.querySelector('button').textContent = 'Subscribe'; }, 3000); }}>
                <input type="email" placeholder="Your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} CoreTech. All rights reserved.</p>
            <p><a href="https://coretech.co.zw">coretech.co.zw</a></p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/263770000000" className="whatsapp-float" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">💬</a>
    </>
  );
}