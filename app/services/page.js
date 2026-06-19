import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { services, WHATSAPP } from '@/lib/data';

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb"><Link href="/">Home</Link> / <span>Services</span></div>
          <h1>Professional IT Services</h1>
          <p>Beyond products — we provide complete technology solutions for businesses in Zimbabwe</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="services-grid" style={{ marginBottom: '60px' }}>
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="cta-content" style={{ textAlign: 'center' }}>
            <h2>Need IT Support?</h2>
            <p>Contact us today for a free consultation and quote</p>
            <div className="cta-buttons" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-primary">Contact Us →</Link>
              <a href={`https://wa.me/${WHATSAPP}`} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
