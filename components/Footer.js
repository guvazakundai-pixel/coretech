'use client';
import Link from 'next/link';
import Image from 'next/image';
import { EMAIL, PHONE, PHONE2, WHATSAPP, LOCATION, OWNER } from '@/lib/data';

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    e.target.querySelector('button').textContent = '✓ Subscribed!';
    setTimeout(() => { e.target.querySelector('button').textContent = 'Subscribe'; }, 3000);
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo"><Image src="/logo.jpg" alt="CoreTech" width={40} height={40} className="nav-logo-img" /><span>CoreTech</span></Link>
            <p>Zimbabwe&apos;s trusted technology store. Premium laptops, desktops, gaming PCs, networking equipment, and IT solutions.</p>
            <div className="footer-contact-details">
              <div className="footer-contact-item">📞 {PHONE}</div>
              <div className="footer-contact-item">📞 {PHONE2}</div>
              <div className="footer-contact-item">✉️ {EMAIL}</div>
              <div className="footer-contact-item">📍 {LOCATION}</div>
              <div className="footer-contact-item"><strong>{OWNER}</strong> — Owner</div>
            </div>
            <div className="footer-social">
              <a href={`https://wa.me/${WHATSAPP}`} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">WA</a>
              <a href={`mailto:${EMAIL}`} aria-label="Email">@</a>
            </div>
          </div>
          <div className="footer-col"><h4>Products</h4><ul>
            <li><Link href="/products/laptops">Laptops</Link></li>
            <li><Link href="/products/gaming">Gaming</Link></li>
            <li><Link href="/products/desktops">Desktops</Link></li>
            <li><Link href="/products/monitors">Monitors</Link></li>
            <li><Link href="/products/printers">Printers</Link></li>
            <li><Link href="/products/networking">Networking</Link></li>
            <li><Link href="/products/accessories">Accessories</Link></li>
          </ul></div>
          <div className="footer-col"><h4>Services</h4><ul>
            <li><Link href="/services">IT Support</Link></li>
            <li><Link href="/services">Network Installation</Link></li>
            <li><Link href="/services">CCTV Systems</Link></li>
            <li><Link href="/services">Software Solutions</Link></li>
            <li><Link href="/services">Server Management</Link></li>
            <li><Link href="/services">Cloud Services</Link></li>
          </ul></div>
          <div className="footer-col"><h4>Company</h4><ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul></div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '14px', lineHeight: '1.6' }}>Get deals, tips & new product alerts.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
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
  );
}
