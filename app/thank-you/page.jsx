import Link from 'next/link';

export const metadata = {
  title: "Thank You | Contact | Barber Builders",
  description: "Thanks for contacting Barber Builders. We've received your request and will get in touch with you shortly.",
  robots: "noindex",
};

export default function ThankYouPage() {
  return (
    <>
      <main id="main">
        <section className="page-hero page-hero--inner">
          <img src="/images/exterior-ranch-garage.jpg" alt="" fetchPriority="high" />
          <div className="container page-hero-body">
            <h1>Contact - Thank You</h1>
          </div>
        </section>

        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li aria-current="page">Thank You</li>
            </ol>
          </div>
        </nav>

        <section className="section section--slim">
          <div className="container thank-you">
            <span className="eyebrow">Request Received</span>
            <h2>Thanks for contacting us!</h2>
            <p>We will get in touch with you shortly.</p>
          </div>
        </section>
      </main>
    </>
  );
}
