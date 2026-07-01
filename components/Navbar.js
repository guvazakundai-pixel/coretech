'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const categories = [
    { name: 'Laptops', slug: 'laptops' }, { name: 'Desktops', slug: 'desktops' },
    { name: 'Gaming', slug: 'gaming' }, { name: 'Monitors', slug: 'monitors' },
    { name: 'Printers', slug: 'printers' }, { name: 'Networking', slug: 'networking' },
    { name: 'Accessories', slug: 'accessories' }, { name: 'Storage', slug: 'storage' },
  ];

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container">
          <Link href="/" className="nav-logo">
            <Image src="/logo.png" alt="CoreTech" width={40} height={40} className="nav-logo-img" />
            <span>CoreTech</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li className="nav-dropdown">
              <button className="nav-dropdown-trigger" onClick={() => setProductsOpen(!productsOpen)} onMouseEnter={() => setProductsOpen(true)}>
                Products <span className="dropdown-arrow">▾</span>
              </button>
              <div className={`nav-dropdown-menu ${productsOpen ? 'active' : ''}`} onMouseLeave={() => setProductsOpen(false)}>
                {categories.map(c => (
                  <Link key={c.slug} href={`/products/${c.slug}`} className="nav-dropdown-item" onClick={() => setProductsOpen(false)}>
                    {c.name}
                  </Link>
                ))}
                <div className="nav-dropdown-divider" />
                <Link href="/products" className="nav-dropdown-item nav-dropdown-all" onClick={() => setProductsOpen(false)}>
                  All Products →
                </Link>
              </div>
            </li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className="nav-actions">
            <a href={`https://wa.me/${WHATSAPP}`} className="nav-cta nav-cta-outline" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            <Link href="/products" className="nav-cta nav-cta-primary">Shop Now →</Link>
          </div>
          <button className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <div className="mobile-menu-sub">
          <span className="mobile-menu-label">Products</span>
          {categories.map(c => (
            <Link key={c.slug} href={`/products/${c.slug}`} className="mobile-menu-sub-item" onClick={() => setMenuOpen(false)}>{c.name}</Link>
          ))}
          <Link href="/products" className="mobile-menu-sub-item mobile-menu-all" onClick={() => setMenuOpen(false)}>All Products →</Link>
        </div>
        <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a href={`https://wa.me/${WHATSAPP}`} className="nav-cta nav-cta-outline" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
        <Link href="/products" className="nav-cta nav-cta-primary" onClick={() => setMenuOpen(false)}>Shop Now →</Link>
      </div>
    </>
  );
}
