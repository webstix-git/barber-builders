import Link from 'next/link';
import LightboxKeys from '../components/LightboxKeys';

export const metadata = {
  title: "Barber Builders | Custom Home Builder in Eau Claire, WI",
  description: "Barber Builders is a custom home builder in Eau Claire, WI. For 12 years we've built custom homes, additions, remodels, kitchens, baths, screen porches, and decks across the Chippewa Valley.",
};

export default function HomePage() {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Barber Builders | Custom Home Builder in Eau Claire, WI" />
      <meta property="og:description" content="Built around your vision. Custom homes, additions, and renovations crafted with care in the Chippewa Valley." />
      <meta property="og:image" content="images/great-room-fireplace.jpg" />
      <main id="main">
        <section className="hero">
          <img src="/images/great-room-fireplace.jpg" alt="Custom great room with a stacked-stone fireplace, timber ceiling beams, and hardwood floors" fetchPriority="high" />
          <div className="hero-main">
            <div className="container">
              <div className="hero-content">
                <h1>Custom Homes Built to Last</h1>
                <p>Custom homes, additions, and renovations crafted with care in the Chippewa Valley.</p>
                <div className="btn-row">
                  <Link className="btn btn--primary" href="/contact">Plan Your Build</Link>{" "}
                  <Link className="btn btn--light" href="/work">See Our Work</Link>
                </div>
                <p className="hero-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>{" "}
                  <span>Eau Claire &bull; Chippewa Valley</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">What We Build</span>
              <h2>Design. Build. Renovate.</h2>
              <p>Whether you're planning a brand-new custom home or reimagining the one you have, every project gets the same care and craftsmanship.</p>
            </div>
            <div className="service-grid service-grid--4">
              <article className="service-tile">
                <div className="service-tile-media"><img src="/images/exterior-ranch-garage.jpg" alt="Custom ranch home with attached garage" loading="lazy" /></div>
                <div className="service-tile-body">
                  <h3>Custom Homes</h3>
                  <p>Your vision, designed and built from scratch around the way you live.</p>
                  <Link className="text-link" href="/services#custom-homes">Explore Custom Homes<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
                </div>
              </article>
              <article className="service-tile">
                <div className="service-tile-media"><img src="/images/sunroom-addition.jpg" alt="Sunroom addition with large windows" loading="lazy" /></div>
                <div className="service-tile-body">
                  <h3>Additions</h3>
                  <p>More room to grow, matched seamlessly to your existing home.</p>
                  <Link className="text-link" href="/services#additions">Explore Additions<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
                </div>
              </article>
              <article className="service-tile">
                <div className="service-tile-media"><img src="/images/living-room.jpg" alt="Remodeled open living area with new flooring" loading="lazy" /></div>
                <div className="service-tile-body">
                  <h3>Remodeling</h3>
                  <p>Fresh layouts and finishes that bring new life to familiar spaces.</p>
                  <Link className="text-link" href="/services#remodels">Explore Remodeling<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
                </div>
              </article>
              <article className="service-tile">
                <div className="service-tile-media"><img src="/images/kitchen-island.jpg" alt="Custom kitchen with a large granite island and pendant lights" loading="lazy" /></div>
                <div className="service-tile-body">
                  <h3>Kitchens &amp; Bathrooms</h3>
                  <p>Hardworking kitchens and relaxing bathrooms with lasting finishes.</p>
                  <Link className="text-link" href="/services#kitchens">Explore Kitchens &amp; Baths<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
                </div>
              </article>
            </div>
            <div className="btn-row btn-row--center">
              <Link className="btn btn--outline" href="/services">View All Services</Link>
            </div>
          </div>
        </section>

        <section className="creds-strip" aria-label="Memberships">
          <div className="container creds-strip-inner">
            <div className="creds-strip-text">
              <span className="eyebrow">Proud Member &amp; Participant</span>
              <p>Members of the Chippewa Valley Home Builders Association and participating builders in the Chippewa Valley Parade of Homes.</p>
            </div>
            <div className="creds-strip-logos">
              <a href="https://cvhomebuilders.com/" target="_blank" rel="noopener" aria-label="Chippewa Valley Home Builders Association website (opens in a new tab)">{" "}
                <img src="/images/cvhba-logo.jpg" alt="Chippewa Valley Home Builders Association" loading="lazy" />{" "}
              </a>{" "}
              <a href="https://www.paradeofhomescv.com/" target="_blank" rel="noopener" aria-label="Chippewa Valley Parade of Homes website (opens in a new tab)">{" "}
                <img className="creds-wide" src="/images/parade-of-homes.png" alt="Chippewa Valley Parade of Homes" loading="lazy" />{" "}
              </a>
            </div>
          </div>
        </section>

        <section className="section section--dark section--compact">
          <div className="container">
            <div className="split process-intro">
              <div>
                <span className="eyebrow">How We Work</span>
                <h2>A building experience without the stress</h2>
                <p>Clear communication and a proven process mean you always know what's happening next, and why.</p>
              </div>
              <div className="process-media">
                <img src="/images/framing-vaulted.jpg" alt="Vaulted room framed with tall window openings during construction" loading="lazy" />
              </div>
            </div>
            <ol className="stage-grid">
              <li className="stage-card">
                <span className="stage-label">Step 1</span>
                <h3>Listen and plan</h3>
                <p>We start with a conversation about your goals, lifestyle, budget, and the feeling you want your home to have.</p>
              </li>
              <li className="stage-card">
                <span className="stage-label">Step 2</span>
                <h3>Design</h3>
                <p>Together we refine plans, choose materials, and settle the details before a single board is cut.</p>
              </li>
              <li className="stage-card">
                <span className="stage-label">Step 3</span>
                <h3>Build</h3>
                <p>Our experienced crew and trusted local trades build with care and keep you informed along the way.</p>
              </li>
              <li className="stage-card">
                <span className="stage-label">Step 4</span>
                <h3>Welcome home</h3>
                <p>We walk through the finished project with you and stand behind our work long after move-in day.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="why-split">
          <div className="why-split-media">
            <img src="/images/exterior-patio-garden.jpg" alt="Finished custom home with an elevated deck and landscaped garden" loading="lazy" />
          </div>
          <div className="why-split-body">
            <span className="eyebrow">Why Barber Builders</span>
            <h2>Creating a Home Out of a House</h2>
            <p>For 12 years, we've taken the stress and uncertainty out of custom building. We stay hands-on from the first conversation to the final walkthrough, focused on the details that make a house feel like home.</p>
            <ul className="why-features">
              <li>
                <img className="why-feature-icon why-feature-icon--wide" src="/icons/stars.svg" alt="" width="104" height="40" />
                <h3>Personalized Experience</h3>
                <p>Built around you and your vision.</p>
              </li>
              <li>
                <img className="why-feature-icon" src="/icons/work-build.svg" alt="" width="40" height="40" />
                <h3>Quality Workmanship</h3>
                <p>Built tough, built for life.</p>
              </li>
              <li>
                <img className="why-feature-icon" src="/icons/location.svg" alt="" width="40" height="40" />
                <h3>Local Knowledge</h3>
                <p>Rooted in the Chippewa Valley.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Featured Work</span>
              <h2>Craftsmanship you can see</h2>
              <p>A few favorite projects from across the Chippewa Valley.</p>
            </div>
            <div className="mosaic">
              <a className="mosaic-item mosaic-item--lg" id="feature-thumb-1" href="#feature-1" aria-label="Open photo: Custom home with an elevated composite deck and lantern posts">{" "}
                <img src="/images/exterior-rear-deck.jpg" alt="Custom home with an elevated composite deck and lantern posts" loading="lazy" />{" "}
              </a>{" "}
              <a className="mosaic-item" id="feature-thumb-2" href="#feature-2" aria-label="Open photo: Dark-stained timber beam ceiling detail">{" "}
                <img src="/images/coffered-ceiling.jpg" alt="Dark-stained timber beam ceiling detail" loading="lazy" />{" "}
              </a>{" "}
              <a className="mosaic-item" id="feature-thumb-3" href="#feature-3" aria-label="Open photo: Kitchen with dark cabinetry, island, and pendant lights">{" "}
                <img src="/images/kitchen-pendants.jpg" alt="Kitchen with dark cabinetry, island, and pendant lights" loading="lazy" />{" "}
              </a>{" "}
              <a className="mosaic-item" id="feature-thumb-4" href="#feature-4" aria-label="Open photo: Whitewashed wood plank porch ceiling">{" "}
                <img src="/images/porch-ceiling.jpg" alt="Whitewashed wood plank porch ceiling" loading="lazy" />{" "}
              </a>{" "}
              <a className="mosaic-item" id="feature-thumb-5" href="#feature-5" aria-label="Open photo: Screen porch surrounded by woods">{" "}
                <img src="/images/screen-porch.jpg" alt="Screen porch surrounded by woods" loading="lazy" />{" "}
              </a>
            </div>
            <div className="btn-row btn-row--center">
              <Link className="btn btn--outline" href="/work">View Full Gallery</Link>
            </div>
          </div>
        </section>

        <section className="section section--dark">
          <div className="container split split-media-first">
            <div className="about-media">
              <img src="/images/crew-at-work.jpg" alt="Barber Builders carpenter at work inside a home under construction" loading="lazy" />
            </div>
            <div>
              <span className="eyebrow">Built With Love</span>
              <h2>Built With Purpose. Built With You.</h2>
              <p className="lead">Building a home is one of the biggest decisions you'll ever make, and it shouldn't come with stress and uncertainty.</p>
              <p>Since 2014, we've guided families through every step, from the first sketch to the final walkthrough. You get honest communication and a crew that takes personal pride in every board and finish.</p>
              <p>We're local, we're hands-on, and we care about the details that turn a well-built house into a place you're proud&nbsp;to&nbsp;call&nbsp;home.</p>
              <div className="btn-row">
                <Link className="btn btn--light" href="/about">Read Our Story</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--light">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Client Reviews</span>
              <h2>What our clients say</h2>
              <p>Much of our work comes from referrals. Here's what Chippewa Valley homeowners have to say about building with us.</p>
            </div>
            <div className="review-grid">
              <figure className="review-card">
                <svg className="review-mark" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M13 8C7.5 9.6 4 14 4 19.5 4 23 6.2 25 9 25c2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L13 8Zm14 0c-5.5 1.6-9 6-9 11.5 0 3.5 2.2 5.5 5 5.5 2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L27 8Z" /></svg>
                <blockquote>&ldquo;Barber Builders helped us to achieve our vision of what we wanted in a home.&rdquo;</blockquote>
                <figcaption className="quote-author">
                  <strong>Harry &amp; Barb Deutsch</strong>
                </figcaption>
              </figure>
              <figure className="review-card">
                <svg className="review-mark" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M13 8C7.5 9.6 4 14 4 19.5 4 23 6.2 25 9 25c2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L13 8Zm14 0c-5.5 1.6-9 6-9 11.5 0 3.5 2.2 5.5 5 5.5 2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L27 8Z" /></svg>
                <blockquote>&ldquo;Thank you again for the positive experience working with you all at Barber Builders!&rdquo;</blockquote>
                <figcaption className="quote-author">
                  <strong>Kristi Sullivan</strong>
                </figcaption>
              </figure>
              <figure className="review-card">
                <svg className="review-mark" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M13 8C7.5 9.6 4 14 4 19.5 4 23 6.2 25 9 25c2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L13 8Zm14 0c-5.5 1.6-9 6-9 11.5 0 3.5 2.2 5.5 5 5.5 2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L27 8Z" /></svg>
                <blockquote>&ldquo;I was very pleased with the price, workmanship, and the final product. Aaron and his crew did a fine job&hellip;&rdquo;</blockquote>
                <figcaption className="quote-author">
                  <strong>Bob Schmidt</strong>
                </figcaption>
              </figure>
            </div>
            <div className="btn-row btn-row--center">
              <Link className="btn btn--outline" href="/testimonials">Read All Reviews</Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div>
              <span className="eyebrow">Where We Work</span>
              <h2>Proudly building across the Chippewa Valley</h2>
              <p>We build in Eau Claire and the surrounding Chippewa Valley / Western Wisconsin area.</p>
              <ul className="checklist">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" /></svg>Eau Claire</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" /></svg>Chippewa Valley</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" /></svg>Western Wisconsin</li>
              </ul>
              <div className="btn-row">
                <a className="btn btn--outline" href="https://www.google.com/maps/search/?api=1&amp;query=4319+Jeffers+Road+Suite+103+Eau+Claire+WI+54703" target="_blank" rel="noopener">Get Directions</a>
              </div>
            </div>
            <div className="map-wrap">
              <iframe title="Map to Barber Builders, 4319 Jeffers Road, Eau Claire, WI" src="https://maps.google.com/maps?q=4319%20Jeffers%20Road%20Suite%20103%2C%20Eau%20Claire%2C%20WI%2054703&amp;z=11&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <img src="/images/screen-porch-lounge.jpg" alt="" loading="lazy" />
          <div className="container">
            <div>
              <h2>Let's build something warm together.</h2>
              <p>Tell us about your project. We'd love to hear what you have in mind.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Start Your Project</Link>{" "}
              <a className="btn btn--light" href="tel:+17158287780">Call 715-828-7780</a>
            </div>
          </div>
        </section>
      </main>


      <div className="lightbox" id="feature-1" role="dialog" aria-label="Custom home with elevated deck">
        <a className="lightbox-backdrop" href="#feature-thumb-1" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/exterior-rear-deck.jpg" alt="Custom home with an elevated composite deck and lantern posts" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#feature-5" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#feature-2" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#feature-thumb-1" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="feature-2" role="dialog" aria-label="Timber beam ceiling">
        <a className="lightbox-backdrop" href="#feature-thumb-2" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/coffered-ceiling.jpg" alt="Dark-stained timber beam ceiling detail" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#feature-1" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#feature-3" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#feature-thumb-2" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="feature-3" role="dialog" aria-label="Kitchen with island seating">
        <a className="lightbox-backdrop" href="#feature-thumb-3" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/kitchen-pendants.jpg" alt="Kitchen with dark cabinetry, island, and pendant lights" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#feature-2" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#feature-4" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#feature-thumb-3" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="feature-4" role="dialog" aria-label="Wood plank porch ceiling">
        <a className="lightbox-backdrop" href="#feature-thumb-4" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/porch-ceiling.jpg" alt="Whitewashed wood plank porch ceiling" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#feature-3" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#feature-5" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#feature-thumb-4" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="feature-5" role="dialog" aria-label="Screen porch surrounded by woods">
        <a className="lightbox-backdrop" href="#feature-thumb-5" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/screen-porch.jpg" alt="Screen porch surrounded by woods" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#feature-4" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#feature-1" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#feature-thumb-5" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <LightboxKeys />
    </>
  );
}
