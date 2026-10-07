import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link className="logo" href="/" aria-label="Barber Builders home">{" "}
              <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="12" fill="#baab5d" /><path d="M12 34 32 16l20 18" fill="none" stroke="#111111" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 31v17h26V31" fill="none" stroke="#111111" strokeWidth="4" strokeLinejoin="round" /><path d="M28 48V38h8v10" fill="none" stroke="#111111" strokeWidth="4" strokeLinejoin="round" /></svg>{" "}
              <span className="logo-text"><span className="logo-name">Barber Builders</span><span className="logo-tag">Custom Homes</span></span>{" "}
            </Link>
            <p>Built with love in Eau Claire and the Chippewa Valley since 2014.</p>
            <div className="footer-social">
              <span>Follow us on</span>{" "}
              <a className="social-icon" href="https://www.facebook.com/profile.php?id=100063575473506" target="_blank" rel="noopener" aria-label="Barber Builders on Facebook">{" "}
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3Z" /></svg>{" "}
              </a>
            </div>
          </div>
          <div>
            <h2>Explore</h2>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/work">Our Work</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2>Services</h2>
            <ul className="footer-links">
              <li><Link href="/services#custom-homes">Custom Homes</Link></li>
              <li><Link href="/services#additions">Additions</Link></li>
              <li><Link href="/services#remodels">Remodels</Link></li>
              <li><Link href="/services#kitchens">Kitchens &amp; Baths</Link></li>
            </ul>
          </div>
          <div>
            <h2>Get in Touch</h2>
            <ul className="footer-contact">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>{" "}
                <a href="tel:+17158287780">715-828-7780</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>{" "}
                <a href="https://www.google.com/maps/search/?api=1&amp;query=4319+Jeffers+Road+Suite+103+Eau+Claire+WI+54703" target="_blank" rel="noopener">4319 Jeffers Road, Suite 103<br />Eau Claire, WI 54703</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>{" "}
                <a href="mailto:barberbuilders@icloud.com">barberbuilders@icloud.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-legal">
            <span>&copy; 2026 Barber Builders Inc. All rights reserved.</span>
            <ul className="footer-legal-links">
              <li><Link href="/sitemap">Site Map</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/ai-policy">AI Policy</Link></li>
              <li><Link href="/ai-readiness">AI Readiness Service Index</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
