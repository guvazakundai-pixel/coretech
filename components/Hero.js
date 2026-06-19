'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Counter from './Counter';

const slides = [
  { image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1920&q=80', title: 'Premium Business Laptops', subtitle: 'HP, Dell, Lenovo & Apple' },
  { image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1920&q=80', title: 'High-Performance Gaming', subtitle: 'ASUS ROG, MSI, Alienware & more' },
  { image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1920&q=80', title: 'Professional Monitors', subtitle: '4K, Ultrawide & High Refresh Rate' },
  { image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc41?w=1920&q=80', title: 'Enterprise Networking', subtitle: 'Cisco, Ubiquiti, MikroTik & TP-Link' },
];

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        {slides.map((s, i) => (
          <div key={i} className={`hero-slide ${i === slide ? 'active' : ''}`} style={{ backgroundImage: `url(${s.image})` }} />
        ))}
        <div className="hero-overlay" />
      </div>
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge"><span className="hero-badge-dot" /> Zimbabwe&apos;s Trusted Technology Store</div>
          <h1>Technology That Powers <span className="highlight">Your Success</span></h1>
          <p>High-performance laptops, desktops, networking equipment and IT solutions for businesses and individuals across Zimbabwe.</p>
          <div className="hero-buttons">
            <Link href="/products" className="btn btn-primary">Browse Products →</Link>
            <Link href="/contact" className="btn btn-secondary">Request Quote</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-number"><Counter target={5000} suffix="+" /></div><div className="hero-stat-label">Devices Sold</div></div>
            <div className="hero-stat"><div className="hero-stat-number"><Counter target={1000} suffix="+" /></div><div className="hero-stat-label">Happy Customers</div></div>
            <div className="hero-stat"><div className="hero-stat-number"><Counter target={50} suffix="+" /></div><div className="hero-stat-label">Brands Stocked</div></div>
            <div className="hero-stat"><div className="hero-stat-number"><Counter target={10} suffix="+" /></div><div className="hero-stat-label">Years Experience</div></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-carousel-card">
            <div className="hero-carousel-icon">💻</div>
            <h3>{slides[slide].title}</h3>
            <p>{slides[slide].subtitle}</p>
            <div className="hero-carousel-dots">
              {slides.map((_, i) => (
                <button key={i} className={`hero-carousel-dot ${i === slide ? 'active' : ''}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
