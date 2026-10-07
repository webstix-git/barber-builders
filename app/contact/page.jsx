import Link from 'next/link';
import ContactFormBehavior from '../../components/ContactFormBehavior';

export const metadata = {
  title: "Contact Us | Start Your Project | Barber Builders",
  description: "Contact Barber Builders in Eau Claire, WI. Call 715-828-7780 or send us a message to start planning your custom home, addition, or remodel.",
};

export default function ContactPage() {
  return (
    <>
      <meta property="og:title" content="Contact Barber Builders" />
      <meta property="og:description" content="Start planning your custom home, addition, or remodel in the Chippewa Valley." />
      <meta property="og:image" content="images/exterior-ranch-garage.jpg" />
      <main id="main">
        <section className="page-hero page-hero--inner">
          <img src="/images/exterior-ranch-garage.jpg" alt="" fetchPriority="high" />
          <div className="container page-hero-body">
            <span className="eyebrow">Get in Touch</span>
            <h1>Contact Us</h1>
            <p>Have a project in mind, or just a few ideas? Tell us about it. We'd love to help you take the stress out of building.</p>
          </div>
        </section>

        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Contact Us</li>
            </ol>
          </div>
        </nav>

        <section className="section contact-section">
          <div className="container contact-grid">
            <div className="form-card">
              <h2>Tell us about your project</h2>
              <p>Fill out the form and we'll reach out to talk through your ideas, timeline, and next steps.</p>
              <p className="form-required">Fields marked with an asterisk (<span className="req">*</span>) are required.</p>

              <form className="contact-form" action="mailto:barberbuilders@icloud.com?subject=Project%20inquiry%20from%20website" method="post" encType="text/plain">
                <div className="form-alert" role="alert" hidden></div>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="name">Full name <span className="req">*</span></label>{" "}
                    <input id="name" name="Name" type="text" autoComplete="name" required data-error="Please enter your full name." />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email <span className="req">*</span></label>{" "}
                    <input id="email" name="Email" type="email" autoComplete="email" required data-error="Please enter your email address." />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone</label>{" "}
                    <input id="phone" name="Phone" type="tel" autoComplete="tel" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="project">Project type <span className="req">*</span></label>{" "}
                    <select id="project" name="Project type" required data-error="Please choose a project type.">
                      <option value="">Select a project type</option>
                      <option>Custom Home</option>
                      <option>Addition</option>
                      <option>Remodel</option>
                      <option>Kitchen</option>
                      <option>Bath</option>
                      <option>Screen Porch</option>
                      <option>Deck</option>
                      <option>Light Commercial</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-field form-field--full">
                    <label htmlFor="timeline">Ideal timeline</label>{" "}
                    <select id="timeline" name="Timeline">
                      <option value="">Select a timeline</option>
                      <option>As soon as possible</option>
                      <option>Within 3 months</option>
                      <option>3 to 6 months</option>
                      <option>6 to 12 months</option>
                      <option>Just exploring ideas</option>
                    </select>
                  </div>
                  <div className="form-field form-field--full">
                    <label htmlFor="message">About your project <span className="req">*</span></label>{" "}
                    <textarea id="message" name="Message" required data-error="Please tell us a little about your project."></textarea>
                  </div>
                </div>
                <div className="form-foot">
                  <button className="btn btn--primary" type="submit">Request a Consultation</button>
                </div>
              </form>
            </div>

            <aside className="contact-card" aria-label="Contact details">
              <h2>Contact information</h2>
              <ul className="contact-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <div>
                    <span className="contact-label">Phone</span>{" "}
                    <a href="tel:+17158287780">715-828-7780</a>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  <div>
                    <span className="contact-label">Office</span>{" "}
                    <a href="https://www.google.com/maps/search/?api=1&amp;query=4319+Jeffers+Road+Suite+103+Eau+Claire+WI+54703" target="_blank" rel="noopener">4319 Jeffers Road, Suite 103<br />Eau Claire, WI 54703<span className="visually-hidden"> (opens Google Maps in a new tab)</span></a>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                  <div>
                    <span className="contact-label">Email</span>{" "}
                    <a href="mailto:barberbuilders@icloud.com">barberbuilders@icloud.com</a>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z" /></svg>
                  <div>
                    <span className="contact-label">Service area</span>
                    <p>Eau Claire, the Chippewa Valley, and Western Wisconsin</p>
                  </div>
                </li>
              </ul>
              <div className="contact-social">
                <span className="contact-label">Follow us</span>{" "}
                <a className="social-icon" href="https://www.facebook.com/profile.php?id=100063575473506" target="_blank" rel="noopener" aria-label="Barber Builders on Facebook (opens in a new tab)">{" "}
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3Z" /></svg>{" "}
                </a>
              </div>
              <div className="contact-map">
                <iframe title="Map to Barber Builders, 4319 Jeffers Road, Eau Claire, WI" src="https://maps.google.com/maps?q=4319%20Jeffers%20Road%20Suite%20103%2C%20Eau%20Claire%2C%20WI%2054703&amp;z=14&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <ContactFormBehavior />
    </>
  );
}
