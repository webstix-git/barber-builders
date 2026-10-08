import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | Barber Builders",
  description: "How Barber Builders collects, uses, and protects the information you share with us through our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <meta property="og:title" content="Privacy Policy | Barber Builders" />
      <meta property="og:description" content="How Barber Builders collects, uses, and protects the information you share with us through our website." />
      <meta property="og:image" content="images/porch-ceiling.jpg" />
      <main id="main">
        <section className="page-hero page-hero--simple">
          <img src="/images/porch-ceiling.jpg" alt="" fetchPriority="high" />
          <div className="container">
            <h1>Privacy Policy</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="prose">
              <p className="prose-meta">Last updated: October 6, 2026</p>

              <h2>Overview</h2>
              <p>Barber Builders Inc. ("Barber Builders," "we," "us") respects your privacy. This policy explains what information we collect when you visit our website or contact us, how we use it, and the choices you have.</p>

              <h2>Information we collect</h2>
              <p><strong>Information you give us.</strong> When you call, email, or use our contact form, you may share your name, email address, phone number, project location, and details about your project. Our contact form opens your own email program, so your message is sent to us by email.</p>
              <p><strong>Information collected automatically.</strong> Like most websites, our hosting provider may record basic technical information such as your IP address, browser type, and the pages you visit. This helps keep the site secure and working properly.</p>

              <h2>How we use your information</h2>
              <ul>
                <li>To respond to your questions and project inquiries</li>
                <li>To prepare estimates, plans, and proposals you request</li>
                <li>To communicate with you during a project</li>
                <li>To maintain and improve our website</li>
              </ul>

              <h2>How we share your information</h2>
              <p>We do not sell or rent your personal information. We only share it when needed to serve you, such as with trusted trade partners or suppliers working on your project, or when required by law.</p>

              <h2>Third-party services</h2>
              <p>Our website uses Google Fonts and an embedded Google Map, and links to our Facebook page. These services may collect information under their own privacy policies when you use them.</p>

              <h2>Cookies</h2>
              <p>Our website does not use its own tracking or advertising cookies. Embedded third-party content, such as the Google Map, may set cookies of its own.</p>

              <h2>Data retention and security</h2>
              <p>We keep your information only as long as needed to respond to you, complete your project, and meet our legal and business record-keeping obligations. We take reasonable steps to protect it.</p>

              <h2>Your choices</h2>
              <p>You can ask us to review, correct, or delete the personal information we hold about you at any time by contacting us using the details below.</p>

              <h2>Children's privacy</h2>
              <p>Our website is intended for adults planning building projects. We do not knowingly collect information from children under 13.</p>

              <h2>Changes to this policy</h2>
              <p>We may update this policy from time to time. The date at the top of this page shows when it was last revised.</p>

              <h2>Contact us</h2>
              <p>Barber Builders Inc.<br />4319 Jeffers Road<br />Suite 103<br />Eau Claire, WI 54703<br />Phone: <a href="tel:+17158287780">715-828-7780</a><br />Email: <a href="mailto:barberbuilders@icloud.com">barberbuilders@icloud.com</a></p>
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
