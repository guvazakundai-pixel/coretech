'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Counter from './Counter';

const slides = [
  {
    image: '/hero-gaming-laptop.webp',
    title: 'Gaming Laptops',
    desc: 'High-performance machines built for competitive gaming and demanding workloads.',
    cta: 'Shop Gaming Laptops',
    link: '/products/gaming',
    product: '/product-asus-rog.webp',
  },
  {
    image: '/hero-business-laptop.webp',
    title: 'Business Laptops',
    desc: 'Premium ultrabooks and workstations for professionals who demand the best.',
    cta: 'Shop Business Laptops',
    link: '/products/laptops',
    product: '/product-hp-elitebook.webp',
  },
  {
    image: '/hero-student-laptop.webp',
    title: 'Student Laptops',
    desc: 'Affordable, reliable laptops for study, research, and everyday productivity.',
    cta: 'Shop Student Deals',
    link: '/products/laptops',
    product: '/product-thinkpad.webp',
  },
  {
    image: '/hero-desktop.webp',
    title: 'Desktop Computers',
    desc: 'Powerful workstations and compact desktops for office and creative work.',
    cta: 'Shop Desktops',
    link: '/products/desktops',
    product: 'https://images.unsplash.com/photo-1587831991587-18e5fc3e9d8d?w=600&q=80',
  },
  {
    image: '/hero-gaming-pc.webp',
    title: 'Gaming PCs',
    desc: 'Custom-built rigs with RGB lighting and top-tier components for ultimate gameplay.',
    cta: 'Shop Gaming PCs',
    link: '/products/gaming',
    product: 'https://images.unsplash.com/photo-1593118247619-e2d6e0568fa2?w=600&q=80',
  },
  {
    image: '/hero-monitor.webp',
    title: 'Monitors',
    desc: '4K, ultrawide, and high-refresh-rate displays for work and play.',
    cta: 'Shop Monitors',
    link: '/products/monitors',
    product: '/product-dell-monitor.webp',
  },
  {
    image: '/hero-accessories.webp',
    title: 'Accessories',
    desc: 'Keyboards, mice, docks, and peripherals to complete your setup.',
    cta: 'Shop Accessories',
    link: '/products/accessories',
    product: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51c03?w=600&q=80',
  },
  {
    image: '/hero-deals.webp',
    title: 'Featured Deals',
    desc: 'Exclusive offers on top-brand laptops, desktops, and accessories.',
    cta: 'View All Deals',
    link: '/products',
    product: '/product-dell-xps.webp',
  },
];

export default function Hero() {
  const [slide, setSlide] = useState(0);

  const next = useCallback(() => setSlide(s => (s + 1) % slides.length), []);
  const prev = useCallback(() => setSlide(s => (s - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="hero-carousel">
      <div className="hero-carousel-track">
        {slides.map((s, i) => (
          <div key={i} className={`hero-carousel-slide ${i === slide ? 'active' : ''}`}>
            <div className="hero-carousel-bg">
              <Image src={s.image} alt={s.title} fill sizes="100vw" priority={i === 0} />
              <div className="hero-carousel-overlay" />
            </div>
            <div className="container">
              <div className="hero-carousel-content">
                <div className="hero-badge"><span className="hero-badge-dot" /> Zimbabwe&apos;s Trusted Technology Store</div>
                <h1>{s.title}</h1>
                <p className="hero-desc">{s.desc}</p>
                <div className="hero-carousel-actions">
                  <Link href={s.link} className="btn btn-primary">{s.cta} →</Link>
                  <Link href="/contact" className="btn btn-secondary">Request Quote</Link>
                </div>
              </div>
              <div className="hero-carousel-product">
                <div className="hero-product-card">
                  <Image src={s.product} alt={s.title} width={450} height={338} className="hero-product-img" />
                  <div className="hero-product-shine" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow hero-arrow-left" onClick={prev} aria-label="Previous slide">‹</button>
      <button className="hero-arrow hero-arrow-right" onClick={next} aria-label="Next slide">›</button>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button key={i} className={`hero-dot ${i === slide ? 'active' : ''}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      <div className="hero-stats-bar">
        <div className="container">
          <div className="hero-stats">
            <div className="hero-stat"><div className="hero-stat-number"><Counter target={5000} suffix="+" /></div><div className="hero-stat-label">Devices Sold</div></div>
            <div className="hero-stat"><div className="hero-stat-number"><Counter target={1000} suffix="+" /></div><div className="hero-stat-label">Happy Customers</div></div>
            <div className="hero-stat"><div className="hero-stat-number"><Counter target={50} suffix="+" /></div><div className="hero-stat-label">Brands Stocked</div></div>
            <div className="hero-stat"><div className="hero-stat-number"><Counter target={10} suffix="+" /></div><div className="hero-stat-label">Years Experience</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
