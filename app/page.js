import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import FadeIn from '@/components/FadeIn';
import { products, categories, brands, whyChoose, testimonials, services, faqs, WHATSAPP, EMAIL, PHONE } from '@/lib/data';

export default function Home() {
  const featured = products.filter(p => p.badge === 'Best Seller' || p.badge === 'Popular' || p.badge === 'Premium').slice(0, 8);

  return (
    <>
      <Hero />

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
          <FadeIn><div className="section-header"><div className="section-label">Shop By Category</div><h2>Browse Our Products</h2><p>Explore our complete range of technology products by category</p></div></FadeIn>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <FadeIn key={cat.slug} delay={i * 80}>
                <Link href={`/products/${cat.slug}`} className="category-card">
                  <div className="category-card-image-wrap">
                    <Image src={cat.image} alt={cat.name} fill sizes="300px" />
                    <div className="category-card-overlay" style={{ background: `linear-gradient(180deg, transparent 0%, ${cat.color}dd 100%)` }} />
                  </div>
                  <div className="category-card-content">
                    <div className="category-icon" style={{ background: `${cat.color}20`, color: cat.color }}>{cat.icon}</div>
                    <h3>{cat.name}</h3>
                    <p>{cat.desc}</p>
                    <span className="category-count">{cat.count}</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="products">
        <div className="container">
          <FadeIn><div className="section-header"><div className="section-label">Featured Products</div><h2>Featured Products</h2><p>Our best-selling and most popular technology products</p></div></FadeIn>
          <div className="products-grid">
            {featured.map((p, i) => (
              <FadeIn key={p.id} delay={i * 60}>
                <ProductCard product={p} index={i} />
              </FadeIn>
            ))}
          </div>
          <div className="show-more-wrap">
            <Link href="/products" className="btn btn-secondary">View All Products →</Link>
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

      <section className="section">
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

      <section className="cta-section">
        <div className="cta-bg" />
        <div className="container">
          <FadeIn>
            <div className="cta-content">
              <h2>Ready to Power Up?</h2>
              <p>Whether you need a single laptop or a complete office IT setup, CoreTech has you covered. Get in touch today for personalized recommendations and competitive pricing.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary">Request Quote →</Link>
                <a href={`https://wa.me/${WHATSAPP}`} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
              </div>
            </div>
          </FadeIn>
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
                  <Link href="/contact" className="learn-more">Learn more →</Link>
                </div>
              </FadeIn>
            ))}
          </div>
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
                <div className="contact-item"><div className="contact-item-icon">✉️</div><div className="contact-item-text"><h4>Email</h4><p>{EMAIL}</p></div></div>
                <div className="contact-item"><div className="contact-item-icon">📞</div><div className="contact-item-text"><h4>Phone</h4><p>{PHONE}</p></div></div>
                <div className="contact-item"><div className="contact-item-icon">🕐</div><div className="contact-item-text"><h4>Business Hours</h4><p>Mon — Fri: 8:00 AM — 5:00 PM</p></div></div>
              </div>
            </FadeIn>
            <FadeIn>
              <form className="contact-form" action={`https://formsubmit.co/${EMAIL}`} method="POST">
                <div className="form-row"><input type="text" name="name" placeholder="Your Name" required /><input type="phone" name="phone" placeholder="Your Phone" required /></div>
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Tell us what you need — products, quantities, specifications..." required></textarea>
                <button type="submit" className="btn btn-primary">Send Message →</button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
