import Link from 'next/link';

const structuredData = `  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Barber Builders Inc.",
    "description": "Custom home builder in Eau Claire, WI building custom homes, additions, remodels, kitchens, bathrooms, screen porches, and decks across the Chippewa Valley.",
    "foundingDate": "2014",
    "telephone": "+1-715-828-7780",
    "email": "barberbuilders@icloud.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4319 Jeffers Road, Suite 103",
      "addressLocality": "Eau Claire",
      "addressRegion": "WI",
      "postalCode": "54703",
      "addressCountry": "US"
    },
    "areaServed": ["Eau Claire, WI", "Chippewa Valley, WI", "Western Wisconsin"],
    "sameAs": ["https://www.facebook.com/profile.php?id=100063575473506"],
    "memberOf": {
      "@type": "Organization",
      "name": "Chippewa Valley Home Builders Association"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Building services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Homes" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Additions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remodels" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchens" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathrooms" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Screen Porches" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Decks" } }
      ]
    }
  }`;

export const metadata = {
  title: "AI Readiness Service Index | Barber Builders",
  description: "A structured summary of Barber Builders: business details, services, service area, and how to start a project in Eau Claire and the Chippewa Valley.",
};

export default function AiReadinessPage() {
  return (
    <>
      <meta property="og:title" content="AI Readiness Service Index | Barber Builders" />
      <meta property="og:description" content="A structured summary of Barber Builders: business details, services, service area, and how to start a project in Eau Claire and the Chippewa Valley." />
      <meta property="og:image" content="images/window-wall.jpg" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      <main id="main">
        <section className="page-hero page-hero--simple">
          <img src="/images/window-wall.jpg" alt="" fetchPriority="high" />
          <div className="container">
            <h1>AI Readiness Service Index</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="prose">
              <h2>Business details</h2>
              <dl className="index-list">
                <dt>Business name</dt><dd>Barber Builders Inc.</dd>
                <dt>Business type</dt><dd>Custom home builder and remodeling contractor</dd>
                <dt>Building since</dt><dd>2014</dd>
                <dt>Address</dt><dd>4319 Jeffers Road<br />Suite 103<br />Eau Claire, WI 54703</dd>
                <dt>Phone</dt><dd><a href="tel:+17158287780">715-828-7780</a></dd>
                <dt>Email</dt><dd><a href="mailto:barberbuilders@icloud.com">barberbuilders@icloud.com</a></dd>
                <dt>Service area</dt><dd>Eau Claire and the surrounding Chippewa Valley / Western Wisconsin area</dd>
                <dt>Memberships</dt><dd>Chippewa Valley Home Builders Association member; Chippewa Valley Parade of Homes participating builder</dd>
                <dt>Social</dt><dd><a href="https://www.facebook.com/profile.php?id=100063575473506" target="_blank" rel="noopener">Facebook</a></dd>
              </dl>

              <h2>Services</h2>
              <ul>
                <li><Link href="/services#custom-homes">Custom Homes</Link>: new homes designed and built from scratch around the way you live.</li>
                <li><Link href="/services#additions">Additions</Link>: more living space, matched seamlessly to your existing home.</li>
                <li><Link href="/services#remodels">Remodels</Link>: new layouts and finishes that bring new life to familiar spaces.</li>
                <li><Link href="/services#kitchens">Kitchens</Link>: hardworking kitchens with lasting finishes.</li>
                <li><Link href="/services#baths">Bathrooms</Link>: relaxing, durable bathrooms.</li>
                <li><Link href="/services#screen-porches">Screen Porches</Link>: bug-free outdoor living for Wisconsin summers.</li>
                <li><Link href="/services#decks">Decks</Link>: solid, good-looking decks built to last.</li>
              </ul>

              <h2>How we work</h2>
              <ul>
                <li><strong>Step 1, Listen and plan:</strong> we talk through your goals, lifestyle, and budget.</li>
                <li><strong>Step 2, Design:</strong> we refine plans, choose materials, and settle the details.</li>
                <li><strong>Step 3, Build:</strong> our crew and trusted local trades build with care and keep you informed.</li>
                <li><strong>Step 4, Welcome home:</strong> we walk through the finished project and stand behind our work.</li>
              </ul>

              <h2>How to start a project</h2>
              <p>Call <a href="tel:+17158287780">715-828-7780</a>, email <a href="mailto:barberbuilders@icloud.com">barberbuilders@icloud.com</a>, or send us a message through our <Link href="/contact">contact page</Link>.</p>
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
