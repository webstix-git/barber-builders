import Link from 'next/link';

export const metadata = {
  title: "Testimonials | What Our Clients Say | Barber Builders",
  description: "Read reviews from Barber Builders clients across Eau Claire and the Chippewa Valley about our custom homes, decks, and craftsmanship.",
};

export default function TestimonialsPage() {
  return (
    <>
      <meta property="og:title" content="Testimonials | Barber Builders" />
      <meta property="og:description" content="What homeowners in the Chippewa Valley say about building with Barber Builders." />
      <meta property="og:image" content="images/exterior-patio-garden.jpg" />
      <main id="main">
        <section className="page-hero page-hero--inner">
          <img src="/images/exterior-patio-garden.jpg" alt="" fetchPriority="high" />
          <div className="container page-hero-body">
            <span className="eyebrow">Client Reviews</span>
            <h1>Testimonials</h1>
            <p>Much of our work comes from referrals. Here's what Chippewa Valley homeowners have to say about building with us.</p>
          </div>
        </section>

        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">Testimonials</li>
            </ol>
          </div>
        </nav>

        <section className="section section--light">
          <div className="container">
            <div className="section-head section-head--center">
              <span className="eyebrow">Kind Words</span>
              <h2>Pride in every project</h2>
            </div>
            <div className="review-grid review-grid--2">
              <figure className="review-card">
                <svg className="review-mark" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M13 8C7.5 9.6 4 14 4 19.5 4 23 6.2 25 9 25c2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L13 8Zm14 0c-5.5 1.6-9 6-9 11.5 0 3.5 2.2 5.5 5 5.5 2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L27 8Z" /></svg>
                <blockquote>&ldquo;Completely exceeded our expectations&hellip; Barber Builders helped us to achieve our vision of what we wanted in a home, but we never dreamed it would be so easy. They took a great deal of time to get the details correct and used excellent craftsmanship and materials to build our home. We really appreciated the personal touch throughout the whole process and the end product was an incredible new home. We couldn't be happier with our Barber Builder dream home and would recommend them to anyone looking to build or remodel; their service, work, expertise, and pricing was exceptional.&rdquo;</blockquote>
                <figcaption className="quote-author">
                  <strong>Harry &amp; Barb Deutsch</strong>
                </figcaption>
              </figure>
              <figure className="review-card">
                <svg className="review-mark" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M13 8C7.5 9.6 4 14 4 19.5 4 23 6.2 25 9 25c2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L13 8Zm14 0c-5.5 1.6-9 6-9 11.5 0 3.5 2.2 5.5 5 5.5 2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L27 8Z" /></svg>
                <blockquote>&ldquo;I would highly recommend Barber Builders to anyone! The weather was below zero many of the days when they were working and it never affected the pride they put into their work. All the guys were always friendly and seemed knowledgeable of the job they needed to do. If ever I had a question regarding the process or the plans Aaron would kindly educate me. The detail they put into them doesn't surprise me at all from the experience I had with just the framing process. Every one of those guys take personal pride in the job they do! Thank you again for the positive experience working with you all at Barber Builders!&rdquo;</blockquote>
                <figcaption className="quote-author">
                  <strong>Kristi Sullivan</strong>
                </figcaption>
              </figure>
              <figure className="review-card">
                <svg className="review-mark" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M13 8C7.5 9.6 4 14 4 19.5 4 23 6.2 25 9 25c2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L13 8Zm14 0c-5.5 1.6-9 6-9 11.5 0 3.5 2.2 5.5 5 5.5 2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L27 8Z" /></svg>
                <blockquote>&ldquo;Barber Builders was working at a Parade Home a few years ago. I saw the quality workmanship Aaron did so I asked for a bid to build a new deck on my house. I was very pleased with the price, workmanship, and the final product. Aaron and his crew did a fine job, were very nice and accommodating. I would highly recommend Barber Builders for your next construction project.&rdquo;</blockquote>
                <figcaption className="quote-author">
                  <strong>Bob Schmidt</strong>
                </figcaption>
              </figure>
              <figure className="review-card">
                <svg className="review-mark" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M13 8C7.5 9.6 4 14 4 19.5 4 23 6.2 25 9 25c2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L13 8Zm14 0c-5.5 1.6-9 6-9 11.5 0 3.5 2.2 5.5 5 5.5 2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.2-.4 0-.9.1-1.1.2.6-2.7 2.8-5.2 5.6-6.3L27 8Z" /></svg>
                <blockquote>&ldquo;Barber Builders installed a fantastic addition to our property and my wife couldn't be happier. Better than expected and with a high attention to detail. Even after several modifications, the entire process was smooth and delivered on time.&rdquo;</blockquote>
                <figcaption className="quote-author">
                  <strong>Robert Weinstein Esq.</strong>
                </figcaption>
              </figure>
            </div>
            <p className="review-note">Worked with us? We'd love to hear about it. <a href="https://www.facebook.com/profile.php?id=100063575473506" target="_blank" rel="noopener">Leave a review on Facebook</a></p>
          </div>
        </section>

        <section className="cta-band">
          <img src="/images/exterior-ranch-garage.jpg" alt="" loading="lazy" />
          <div className="container">
            <div>
              <h2>Ready to become our next success story?</h2>
              <p>Let's talk about your project and how we can bring it to life.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Start Your Project</Link>{" "}
              <a className="btn btn--light" href="tel:+17158287780">Call 715-828-7780</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
