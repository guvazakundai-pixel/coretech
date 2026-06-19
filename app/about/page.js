import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { whyChoose, testimonials, brands, WHATSAPP } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb"><Link href="/">Home</Link> / <span>About</span></div>
          <h1>About CoreTech</h1>
          <p>Zimbabwe&apos;s trusted destination for premium technology products and IT solutions</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <FadeIn>
              <div className="about-content">
                <div className="section-label" style={{ marginBottom: '16px' }}>Our Story</div>
                <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-1px' }}>Zimbabwe&apos;s Leading <span className="highlight">Technology Retailer</span></h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px' }}>CoreTech has been serving Zimbabwe businesses and individuals with premium technology products and professional IT services for over a decade. We are authorized resellers for HP, Dell, Lenovo, ASUS, and other leading global brands.</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px' }}>From laptops and desktops to networking infrastructure and CCTV systems, we provide end-to-end technology solutions backed by expert technical support and after-sales service.</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>Our team of certified technicians and IT professionals are passionate about helping customers find the right technology solutions for their needs.</p>
                <div style={{ marginTop: '32px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <Link href="/products" className="btn btn-primary">Browse Products →</Link>
                  <a href={`https://wa.me/${WHATSAPP}`} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">💬 Chat With Us</a>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="about-stats-grid">
                <div className="about-stat-card"><div className="about-stat-number">10+</div><div className="about-stat-label">Years Experience</div></div>
                <div className="about-stat-card"><div className="about-stat-number">5000+</div><div className="about-stat-label">Devices Sold</div></div>
                <div className="about-stat-card"><div className="about-stat-number">1000+</div><div className="about-stat-label">Happy Clients</div></div>
                <div className="about-stat-card"><div className="about-stat-number">50+</div><div className="about-stat-label">Brands Stocked</div></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Why CoreTech</div><h2>The CoreTech <span className="highlight">Advantage</span></h2></div></FadeIn>
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
      <section className="section brands-section">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Brands We Stock</div><h2>Trusted Global Brands</h2></div></FadeIn>
          <div className="brands-grid">
            {brands.map((b, i) => (
              <FadeIn key={i} delay={i * 50}><div className="brand-card">{b.logo}</div></FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Testimonials</div><h2>What Our Clients Say</h2></div></FadeIn>
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
    </div>
  );
}
