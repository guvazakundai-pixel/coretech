'use client';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { EMAIL, PHONE, PHONE2, WHATSAPP, OWNER } from '@/lib/data';

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb"><Link href="/">Home</Link> / <span>Contact</span></div>
          <h1>Contact Us</h1>
          <p>Get in touch for product inquiries, quotes, and technical support</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <FadeIn>
              <div className="contact-info">
                <h3>We&apos;re here to help</h3>
                <p>Visit our showroom in Harare or reach out for product inquiries, quotes, and technical support.</p>
                <div className="contact-item"><div className="contact-item-icon">📍</div><div className="contact-item-text"><h4>Location</h4><p>Harare, Zimbabwe</p></div></div>
                <div className="contact-item"><div className="contact-item-icon">✉️</div><div className="contact-item-text"><h4>Email</h4><p>{EMAIL}</p></div></div>
                <div className="contact-item"><div className="contact-item-icon">📞</div><div className="contact-item-text"><h4>Phone</h4><p>{PHONE}<br />{PHONE2}</p></div></div>
                <div className="contact-item"><div className="contact-item-icon">🕐</div><div className="contact-item-text"><h4>Business Hours</h4><p>Mon — Fri: 8:00 AM — 5:00 PM</p></div></div>
                <div className="contact-item"><div className="contact-item-icon">💬</div><div className="contact-item-text"><h4>WhatsApp</h4><p>Quickest way to reach us</p></div></div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
                  <a href={`https://wa.me/${WHATSAPP}`} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
                  <a href={`tel:${PHONE}`} className="btn btn-secondary">📞 Call Us</a>
                </div>
                <div style={{ marginTop: '16px', padding: '14px', background: 'rgba(37,99,235,0.06)', borderRadius: '12px', border: '1px solid rgba(37,99,235,0.12)' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}><strong style={{ color: 'var(--text)' }}>{OWNER}</strong> — Owner</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <form className="contact-form" action={`https://formsubmit.co/${EMAIL}`} method="POST">
                <h3 style={{ marginBottom: '8px' }}>Send us a message</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>We typically respond within 2 hours</p>
                <div className="form-row"><input type="text" name="name" placeholder="Your Name" required /><input type="phone" name="phone" placeholder="Your Phone" required /></div>
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Tell us what you need — products, quantities, specifications..." required></textarea>
                <button type="submit" className="btn btn-primary">Send Message →</button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
