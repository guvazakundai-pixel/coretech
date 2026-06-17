import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav>
        <div className="container">
          <a href="#" className="nav-logo">
            <Image src="/logo.jpg" alt="CoreTech Logo" width={44} height={44} />
            <span>CoreTech</span>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Innovative<br />
              <span className="highlight">Technology</span> Solutions
            </h1>
            <p>
              We deliver cutting-edge IT infrastructure, software development, and digital
              transformation services tailored for businesses across Zimbabwe and beyond.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get Started</a>
              <a href="#services" className="btn btn-outline">Our Services</a>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/logo.jpg" alt="CoreTech" width={500} height={333} priority />
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive technology solutions to power your business forward</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">&#9881;</div>
              <h3>IT Infrastructure</h3>
              <p>Robust network design, server setup, cloud migration, and managed IT services for businesses of all sizes.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">&#128187;</div>
              <h3>Software Development</h3>
              <p>Custom web applications, mobile apps, and enterprise software built with modern technologies and best practices.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">&#128274;</div>
              <h3>Cybersecurity</h3>
              <p>Protect your digital assets with our comprehensive security audits, penetration testing, and compliance solutions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">&#9729;</div>
              <h3>Cloud Solutions</h3>
              <p>Seamless cloud migration, multi-cloud strategy, and managed cloud services on AWS, Azure, and Google Cloud.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">&#128202;</div>
              <h3>Data Analytics</h3>
              <p>Transform your data into actionable insights with our business intelligence and data engineering services.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">&#127760;</div>
              <h3>Digital Transformation</h3>
              <p>Modernize your operations with digital strategy consulting, process automation, and change management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <h2>Why CoreTech?</h2>
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
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-number">150+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Active Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime Guarantee</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <Image src="/logo.jpg" alt="CoreTech" width={500} height={333} />
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Ready to transform your business with technology? Let&apos;s talk.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-item-icon">&#128205;</div>
                <div className="contact-item-text">
                  <h4>Location</h4>
                  <p>Harare, Zimbabwe</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">&#128231;</div>
                <div className="contact-item-text">
                  <h4>Email</h4>
                  <p>info@coretech.co.zw</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">&#128222;</div>
                <div className="contact-item-text">
                  <h4>Phone</h4>
                  <p>+263 77 000 0000</p>
                </div>
              </div>
            </div>
            <form className="contact-form" action="https://formsubmit.co/info@coretech.co.zw" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CoreTech. All rights reserved. &#8212; <a href="https://coretech.co.zw">coretech.co.zw</a></p>
        </div>
      </footer>
    </>
  );
}