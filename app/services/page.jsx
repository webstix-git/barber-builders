import Link from 'next/link';
import SectionNav from '../../components/SectionNav';

export const metadata = {
  title: "Services | Custom Homes, Additions & Remodels | Barber Builders",
  description: "Barber Builders offers custom homes, additions, remodels, kitchens, baths, screen porches, and decks in Eau Claire and the Chippewa Valley, WI.",
};

export default function ServicesPage() {
  return (
    <>
      <meta property="og:title" content="Services | Barber Builders" />
      <meta property="og:description" content="Custom homes, additions, remodels, kitchens, baths, screen porches, and decks in the Chippewa Valley." />
      <meta property="og:image" content="images/kitchen-island.jpg" />
      <main id="main">
        <section className="page-hero page-hero--inner">
          <img src="/images/kitchen-island.jpg" alt="" fetchPriority="high" />
          <div className="container page-hero-body">
            <span className="eyebrow">What We Do</span>
            <h1>Services</h1>
            <p>From brand-new custom homes to the screen porch you've always wanted, every project gets the same care, craftsmanship, and attention to detail.</p>
          </div>
        </section>

        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Services</li>
            </ol>
          </div>
        </nav>

        <section className="section section--filtered services-section">
          <div className="container">
            <nav className="filter-bar section-nav" aria-label="Jump to a service">
              <a href="#custom-homes" aria-current="true">Custom Homes</a>{" "}
              <a href="#additions">Additions</a>{" "}
              <a href="#remodels">Remodels</a>{" "}
              <a href="#kitchens">Kitchens &amp; Baths</a>{" "}
              <a href="#screen-porches">Screen Porches</a>{" "}
              <a href="#decks">Decks</a>
            </nav>

            <div className="service-list">
              <article className="service-detail split" id="custom-homes">
                <div className="service-detail-media">
                  <img src="/images/exterior-ranch-garage.jpg" alt="Custom ranch home with stone accents and a three-stall garage" loading="lazy" />
                </div>
                <div>
                  <span className="eyebrow">Custom Homes</span>
                  <h2>Your home, built from scratch</h2>
                  <p>A custom home should fit your life like it was made for you, because it was. We guide you through every decision, from the floor plan and materials to the finishing details that make a house feel like home.</p>
                  <p>With design and construction under one roof, you get one team, one point of contact, and far less stress.</p>
                  <div className="service-features">
                    <p className="service-features-title">What's included</p>
                    <ul>
                      <li>Design-build planning</li>
                      <li>Specialty and custom plans</li>
                      <li>Material and finish selection</li>
                      <li>Clear budgets and schedules</li>
                    </ul>
                  </div>
                  <Link className="btn btn--outline" href="/contact?project=Custom%20Home">Start planning your custom home</Link>
                </div>
              </article>

              <article className="service-detail split" id="additions">
                <div className="service-detail-media">
                  <img src="/images/sunroom-addition.jpg" alt="Sunroom addition with walls of windows" loading="lazy" />
                </div>
                <div>
                  <span className="eyebrow">Additions</span>
                  <h2>Room to grow, without moving</h2>
                  <p>Love your neighborhood but need more space? A well-designed addition, such as a sunroom, primary suite, larger garage, or extra living area, can transform how your home works.</p>
                  <p>We match rooflines, siding, and interior finishes so your addition looks like it was always there.</p>
                  <div className="service-features">
                    <p className="service-features-title">What's included</p>
                    <ul>
                      <li>Sunrooms and four-season rooms</li>
                      <li>Bedroom and primary suites</li>
                      <li>Garage and living space additions</li>
                      <li>Seamless exterior matching</li>
                    </ul>
                  </div>
                  <Link className="btn btn--outline" href="/contact?project=Addition">Talk to us about your addition</Link>
                </div>
              </article>

              <article className="service-detail split" id="remodels">
                <div className="service-detail-media">
                  <img src="/images/living-room.jpg" alt="Remodeled living area with new flooring and fresh paint" loading="lazy" />
                </div>
                <div>
                  <span className="eyebrow">Remodels</span>
                  <h2>New life for the home you love</h2>
                  <p>From opening up walls to refreshing tired finishes, our remodels respect what you love about your home and improve the rest.</p>
                  <p>We plan carefully, protect your space, and keep you informed so living through a remodel is as easy as possible.</p>
                  <div className="service-features">
                    <p className="service-features-title">What's included</p>
                    <ul>
                      <li>Whole-home and room remodels</li>
                      <li>Open-concept layouts</li>
                      <li>Flooring, trim, and finish upgrades</li>
                      <li>Clean, respectful job sites</li>
                    </ul>
                  </div>
                  <Link className="btn btn--outline" href="/contact?project=Remodel">Plan your remodel with us</Link>
                </div>
              </article>

              <article className="service-detail split" id="kitchens">
                <div className="service-detail-media">
                  <img src="/images/kitchen-island.jpg" alt="Custom kitchen with a granite island, bar seating, and pendant lights" loading="lazy" />
                </div>
                <div>
                  <span className="eyebrow">Kitchens &amp; Baths</span>
                  <h2>The rooms you use most, done right</h2>
                  <p>We know a thing or two about cooking, and about kitchens that make it a joy. We design kitchens around how you actually use them, with smart layouts, quality cabinetry, durable countertops, and good lighting.</p>
                  <h3 className="service-anchor" id="baths">Bathrooms</h3>
                  <p>Whether it's a hardworking family bathroom or a relaxing primary suite, we build baths that are beautiful and made to last, with careful attention to waterproofing, ventilation, and the finishes you see every day.</p>
                  <div className="service-features">
                    <p className="service-features-title">What's included</p>
                    <ul>
                      <li>Custom kitchen layouts and islands</li>
                      <li>Cabinetry and countertops</li>
                      <li>Primary suites and family baths</li>
                      <li>Tile showers and vanities</li>
                    </ul>
                  </div>
                  <Link className="btn btn--outline" href="/contact?project=Kitchen">Start your kitchen or bath project</Link>
                </div>
              </article>

              <article className="service-detail split" id="screen-porches">
                <div className="service-detail-media">
                  <img src="/images/screen-porch.jpg" alt="Screened porch with a tongue-and-groove wood ceiling overlooking the woods" loading="lazy" />
                </div>
                <div>
                  <span className="eyebrow">Screen Porches</span>
                  <h2>Make the most of Wisconsin summers</h2>
                  <p>A screen porch gives you fresh air and views of the outdoors without the bugs. We build porches with warm wood ceilings, sturdy framing, and quality screening.</p>
                  <p>It's the kind of space where morning coffee and summer evenings just feel better.</p>
                  <div className="service-features">
                    <p className="service-features-title">What's included</p>
                    <ul>
                      <li>Screened and three-season porches</li>
                      <li>Tongue-and-groove ceilings</li>
                      <li>Ceiling fans and lighting</li>
                      <li>Designed to match your home</li>
                    </ul>
                  </div>
                  <Link className="btn btn--outline" href="/contact?project=Screen%20Porch">Build your screen porch</Link>
                </div>
              </article>

              <article className="service-detail split" id="decks">
                <div className="service-detail-media">
                  <img src="/images/deck-pergola.jpg" alt="Deck with a pergola and railings surrounded by trees" loading="lazy" />
                </div>
                <div>
                  <span className="eyebrow">Decks</span>
                  <h2>Built tough, built for life</h2>
                  <p>From simple backyard decks to multi-level outdoor living spaces, we build decks that are safe, solid, and good-looking.</p>
                  <p>Choose wood or low-maintenance composite, with railings, stairs, and pergolas designed to fit your home and your yard.</p>
                  <div className="service-features">
                    <p className="service-features-title">What's included</p>
                    <ul>
                      <li>Wood and composite decking</li>
                      <li>Custom railings and stairs</li>
                      <li>Pergolas and shade structures</li>
                      <li>Built to code, built to last</li>
                    </ul>
                  </div>
                  <Link className="btn btn--outline" href="/contact?project=Deck">Plan your new deck</Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <img src="/images/framing-trusses.jpg" alt="" loading="lazy" />
          <div className="container">
            <div>
              <h2>Not sure where to start?</h2>
              <p>Give us a call or send a message, and we'll help you figure out the right next step.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Start Your Project</Link>{" "}
              <a className="btn btn--light" href="tel:+17158287780">Call 715-828-7780</a>
            </div>
          </div>
        </section>
      </main>
      <SectionNav />
    </>
  );
}
