'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const heroSlides = [
  {
    title: 'Enterprise Laptops',
    subtitle: 'Premium business laptops and workstations built for productivity and performance.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1920&q=80',
  },
  {
    title: 'Gaming Systems',
    subtitle: 'High-performance gaming PCs and setups with cutting-edge graphics and RGB lighting.',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1920&q=80',
  },
  {
    title: 'Networking Solutions',
    subtitle: 'Enterprise-grade networking infrastructure, servers, and data center solutions.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc41?w=1920&q=80',
  },
  {
    title: 'Security Systems',
    subtitle: 'Advanced CCTV, surveillance, and smart security technology for total protection.',
    image: 'https://images.unsplash.com/photo-1557597774-a910ad3a4b0c?w=1920&q=80',
  },
  {
    title: 'Software Solutions',
    subtitle: 'Custom software development, digital dashboards, and business automation platforms.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
  },
];

const services = [
  {
    icon: '💻',
    title: 'IT Infrastructure',
    desc: 'Robust network design, server setup, cloud migration, and managed IT services for businesses of all sizes.',
  },
  {
    icon: '🖥️',
    title: 'Software Development',
    desc: 'Custom web applications, mobile apps, and enterprise software built with modern technologies.',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    desc: 'Comprehensive security audits, penetration testing, and compliance solutions to protect your digital assets.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    desc: 'Seamless cloud migration, multi-cloud strategy, and managed cloud services on AWS, Azure, and Google Cloud.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    desc: 'Transform your data into actionable insights with business intelligence and data engineering services.',
  },
  {
    icon: '🚀',
    title: 'Digital Transformation',
    desc: 'Modernize your operations with digital strategy consulting, process automation, and change management.',
  },
];

const products = [
  {
    icon: '💻',
    title: 'Business Laptops',
    desc: 'Premium laptops from Dell, HP, and Lenovo for enterprise productivity.',
    specs: ['Intel Core i7', '16GB RAM', '512GB SSD'],
  },
  {
    icon: '🖨️',
    title: 'Office Printers',
    desc: 'Multi-function printers and copiers for efficient document management.',
    specs: ['Wireless', 'Duplex', 'A3 Support'],
  },
  {
    icon: '🎮',
    title: 'Gaming PCs',
    desc: 'High-performance custom gaming rigs and pre-built systems.',
    specs: ['RTX Graphics', '32GB RAM', '1TB NVMe'],
  },
  {
    icon: '🌐',
    title: 'Networking Equipment',
    desc: 'Enterprise switches, routers, and access points from top brands.',
    specs: ['10G Uplink', 'PoE+', 'Managed'],
  },
  {
    icon: '📹',
    title: 'Security Systems',
    desc: 'CCTV cameras, NVRs, and integrated surveillance solutions.',
    specs: ['4K Resolution', 'Night Vision', 'AI Detect'],
  },
  {
    icon: '🖨️',
    title: 'POS Systems',
    desc: 'Complete point-of-sale solutions for retail and hospitality businesses.',
    specs: ['Touch Screen', 'Receipt', 'Inventory'],
  },
];

const industries = [
  { icon: '🏦', name: 'Banking & Finance' },
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🎓', name: 'Education' },
  { icon: '🏭', name: 'Manufacturing' },
  { icon: '🛒', name: 'Retail & E-Commerce' },
  { icon: '🏛️', name: 'Government' },
  { icon: '⛽', name: 'Energy & Mining' },
  { icon: '🚛', name: 'Logistics' },
];

const testimonials = [
  {
    name: 'Tendai M.',
    role: 'CTO, Harvest Bank',
    text: 'CoreTech transformed our entire IT infrastructure. Their team delivered on time and exceeded expectations. The support has been outstanding.',
    rating: 5,
  },
  {
    name: 'Nyasha K.',
    role: 'Director, EduZim',
    text: 'From network setup to ongoing maintenance, CoreTech has been an invaluable partner. Their cybersecurity solutions gave us complete peace of mind.',
    rating: 5,
  },
  {
    name: 'Munashe R.',
    role: 'Founder, TechHub ZW',
    text: 'The custom software solution CoreTech built for us increased our efficiency by 40%. Professional team, excellent communication throughout.',
    rating: 5,
  },
];

const partners = ['Microsoft', 'Cisco', 'Dell', 'HP', 'Lenovo', 'Intel'];

function useScrollAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedSection({ children, className = '' }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div ref={ref} className={`animate-on-scroll ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useScrollAnimation();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={navScrolled ? 'scrolled' : ''}>
        <div className="container">
          <a href="#" className="nav-logo">
            <Image src="/logo.jpg" alt="CoreTech Logo" width={44} height={44} style={{ borderRadius: '10px', objectFit: 'cover' }} />
            <span>CoreTech</span>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-actions">
            <a href="tel:+263770000000" className="nav-cta nav-cta-outline">📞 Call Us</a>
            <a href="#contact" className="nav-cta nav-cta-primary">Get Quote →</a>
          </div>
          <button className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
        <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        <a href="tel:+263770000000" className="nav-cta nav-cta-outline" style={{ marginTop: '16px' }}>📞 Call Us</a>
        <a href="#contact" className="nav-cta nav-cta-primary" onClick={() => setMobileMenuOpen(false)}>Get Quote →</a>
      </div>

      <section className="hero">
        <div className="hero-bg">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`hero-slide ${i === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          <div className="hero-overlay" />
        </div>
        <div className="particles">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Trusted Technology Partner
            </div>
            <h1>
              Innovative<br />
              <span className="highlight">Technology</span> Solutions
            </h1>
            <p>
              We deliver cutting-edge IT infrastructure, software development, and digital
              transformation services tailored for businesses across Zimbabwe and beyond.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get Started →</a>
              <a href="#services" className="btn btn-secondary">Explore Services</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-carousel-info">
              <h3>{heroSlides[currentSlide].title}</h3>
              <p>{heroSlides[currentSlide].subtitle}</p>
              <div className="hero-carousel-dots">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    className={`hero-carousel-dot ${i === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">150+</div>
                  <div className="hero-stat-label">Projects</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">50+</div>
                  <div className="hero-stat-label">Clients</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">99.9%</div>
                  <div className="hero-stat-label">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="services">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="section-label">What We Do</div>
              <h2>Our Services</h2>
              <p>Comprehensive technology solutions to power your business forward</p>
            </div>
          </AnimatedSection>
          <div className="services-grid">
            {services.map((service, i) => (
              <AnimatedSection key={i} className={`stagger-${i + 1}`}>
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a href="#contact" className="learn-more">Learn more →</a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container">
          <div className="about-content">
            <AnimatedSection>
              <div className="section-label">Why CoreTech</div>
              <h2>Built for businesses that demand excellence</h2>
              <p>
                Based in Zimbabwe, CoreTech is committed to empowering businesses through innovative
                technology. We combine deep local expertise with global best practices to deliver
                solutions that drive real results.
              </p>
              <p>
                From startups to enterprises, our team of skilled engineers and consultants work
                alongside you to understand your unique challenges and craft tailored solutions
                that scale with your growth.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">⚡</div>
                  <span>Rapid Deployment</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">🛡️</div>
                  <span>Enterprise Security</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">📈</div>
                  <span>Scalable Solutions</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">🤝</div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="about-visual">
            <AnimatedSection>
              <div className="about-image-card">
                <Image src="/logo.jpg" alt="CoreTech" width={500} height={333} style={{ borderRadius: '16px', objectFit: 'cover', width: '100%', height: 'auto' }} />
              </div>
              <div className="about-floating-card">
                <div className="number">10+</div>
                <div className="label">Years of Excellence</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <AnimatedSection>
              <div className="stat-item">
                <div className="stat-number"><Counter target={150} suffix="+" /></div>
                <div className="stat-label">Projects Delivered</div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="stat-item">
                <div className="stat-number"><Counter target={50} suffix="+" /></div>
                <div className="stat-label">Active Clients</div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="stat-item">
                <div className="stat-number"><Counter target={99} suffix=".9%" /></div>
                <div className="stat-label">Uptime Guarantee</div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="stat-item">
                <div className="stat-number"><Counter target={24} suffix="/7" /></div>
                <div className="stat-label">Support Available</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="section-label">Our Products</div>
              <h2>Featured Products</h2>
              <p>Premium technology products curated for the Zimbabwean market</p>
            </div>
          </AnimatedSection>
          <div className="products-grid">
            {products.map((product, i) => (
              <AnimatedSection key={i} className={`stagger-${(i % 3) + 1}`}>
                <div className="product-card">
                  <div className="product-image">{product.icon}</div>
                  <div className="product-content">
                    <h3>{product.title}</h3>
                    <p>{product.desc}</p>
                    <div className="product-specs">
                      {product.specs.map((spec, j) => (
                        <span key={j} className="product-spec">{spec}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section industries-section" id="industries">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="section-label">Industries</div>
              <h2>Industries We Serve</h2>
              <p>Delivering tailored solutions across diverse sectors</p>
            </div>
          </AnimatedSection>
          <div className="industries-grid">
            {industries.map((industry, i) => (
              <AnimatedSection key={i} className={`stagger-${(i % 4) + 1}`}>
                <div className="industry-card">
                  <div className="industry-icon">{industry.icon}</div>
                  <h3>{industry.name}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="section-label">Testimonials</div>
              <h2>What Our Clients Say</h2>
              <p>Trusted by businesses across Zimbabwe and beyond</p>
            </div>
          </AnimatedSection>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} className={`stagger-${i + 1}`}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {'★'.repeat(t.rating)}
                  </div>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.name[0]}</div>
                    <div className="testimonial-info">
                      <h4>{t.name}</h4>
                      <p>{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <AnimatedSection>
            <div className="partners-label">Trusted Technology Partners</div>
            <div className="partners-grid">
              {partners.map((partner, i) => (
                <span key={i} className="partner-logo">{partner}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg" />
        <div className="container">
          <AnimatedSection>
            <div className="cta-content">
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Let&apos;s discuss how CoreTech can help you leverage technology to drive growth,
                improve efficiency, and secure your digital future.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="btn btn-primary">Start a Project →</a>
                <a href="tel:+263770000000" className="btn btn-secondary">📞 Schedule a Call</a>
              </div>
              <div className="cta-features">
                <div className="cta-feature">
                  <span className="cta-feature-icon">✓</span> Free Consultation
                </div>
                <div className="cta-feature">
                  <span className="cta-feature-icon">✓</span> Custom Solutions
                </div>
                <div className="cta-feature">
                  <span className="cta-feature-icon">✓</span> 24/7 Support
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container">
          <AnimatedSection>
            <div className="section-header">
              <div className="section-label">Contact Us</div>
              <h2>Get In Touch</h2>
              <p>Ready to transform your business with technology? Let&apos;s talk.</p>
            </div>
          </AnimatedSection>
          <div className="contact-grid">
            <AnimatedSection>
              <div className="contact-info">
                <h3>Let&apos;s build something great together</h3>
                <p>Whether you need IT infrastructure, custom software, or a complete digital transformation, our team is here to help.</p>
                <div className="contact-item">
                  <div className="contact-item-icon">📍</div>
                  <div className="contact-item-text">
                    <h4>Location</h4>
                    <p>Harare, Zimbabwe</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">✉️</div>
                  <div className="contact-item-text">
                    <h4>Email</h4>
                    <p>info@coretech.co.zw</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">📞</div>
                  <div className="contact-item-text">
                    <h4>Phone</h4>
                    <p>+263 77 000 0000</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <form className="contact-form" action="https://formsubmit.co/info@coretech.co.zw" method="POST">
                <div className="form-row">
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <input type="text" name="subject" placeholder="Subject" />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn btn-primary">Send Message →</button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="nav-logo">
                <Image src="/logo.jpg" alt="CoreTech" width={44} height={44} style={{ borderRadius: '10px', objectFit: 'cover' }} />
                <span>CoreTech</span>
              </a>
              <p>Delivering cutting-edge technology solutions for businesses across Zimbabwe and beyond.</p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Twitter">TW</a>
                <a href="#" aria-label="LinkedIn">LI</a>
                <a href="#" aria-label="Instagram">IG</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">IT Infrastructure</a></li>
                <li><a href="#services">Software Development</a></li>
                <li><a href="#services">Cybersecurity</a></li>
                <li><a href="#services">Cloud Solutions</a></li>
                <li><a href="#services">Data Analytics</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#contact">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Status Page</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} CoreTech. All rights reserved.</p>
            <p><a href="https://coretech.co.zw">coretech.co.zw</a></p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/263770000000" className="whatsapp-float" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        💬
      </a>
    </>
  );
}