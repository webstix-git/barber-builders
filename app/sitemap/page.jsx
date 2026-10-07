import Link from 'next/link';

export const metadata = {
  title: "Site Map | Barber Builders",
  description: "A complete list of pages on the Barber Builders website, including services, project gallery, and policies.",
};

export default function SitemapPage() {
  return (
    <>
      <meta property="og:title" content="Site Map | Barber Builders" />
      <meta property="og:description" content="A complete list of pages on the Barber Builders website, including services, project gallery, and policies." />
      <meta property="og:image" content="images/exterior-ranch-front.jpg" />
      <main id="main">
        <section className="page-hero page-hero--simple">
          <img src="/images/exterior-ranch-front.jpg" alt="" fetchPriority="high" />
          <div className="container">
            <h1>Site Map</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="prose">
              <h2>Main pages</h2>
              <ul className="link-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/work">Our Work</Link></li>
                <li><Link href="/testimonials">Testimonials</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>

              <h2>Services</h2>
              <ul className="link-list">
                <li><Link href="/services#custom-homes">Custom Homes</Link></li>
                <li><Link href="/services#additions">Additions</Link></li>
                <li><Link href="/services#remodels">Remodels</Link></li>
                <li><Link href="/services#kitchens">Kitchens</Link></li>
                <li><Link href="/services#baths">Bathrooms</Link></li>
                <li><Link href="/services#screen-porches">Screen Porches</Link></li>
                <li><Link href="/services#decks">Decks</Link></li>
              </ul>

              <h2>Policies and resources</h2>
              <ul className="link-list">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/ai-policy">AI Policy</Link></li>
                <li><Link href="/ai-readiness">AI Readiness Service Index</Link></li>
              </ul>
            </div>
            <div className="btn-row">
              <Link className="btn btn--outline" href="/">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
