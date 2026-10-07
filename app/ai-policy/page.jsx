import Link from 'next/link';

export const metadata = {
  title: "AI Policy | Barber Builders",
  description: "How Barber Builders approaches artificial intelligence, and our commitment to people-first service and craftsmanship.",
};

export default function AiPolicyPage() {
  return (
    <>
      <meta property="og:title" content="AI Policy | Barber Builders" />
      <meta property="og:description" content="How Barber Builders approaches artificial intelligence, and our commitment to people-first service and craftsmanship." />
      <meta property="og:image" content="images/framing-walls.jpg" />
      <main id="main">
        <section className="page-hero page-hero--simple">
          <img src="/images/framing-walls.jpg" alt="" fetchPriority="high" />
          <div className="container">
            <h1>AI Policy</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="prose">
              <p className="prose-meta">Last updated: October 6, 2026</p>

              <h2>Our approach</h2>
              <p>Every home we build is designed and built by people. We may use AI tools to help with everyday office tasks, but the decisions, the planning, and the craftsmanship always come from our team.</p>

              <h2>How we may use AI</h2>
              <ul>
                <li>Helping draft and edit website content and general communications</li>
                <li>Organizing information and improving how our website is structured</li>
              </ul>
              <p>Anything prepared with the help of AI is reviewed by a member of our team before it is published or sent.</p>

              <h2>What we don't do</h2>
              <ul>
                <li>We don't use AI to make decisions about your project, pricing, bids, or contracts.</li>
                <li>We don't enter your personal information or project details into public AI tools.</li>
                <li>We don't use AI-generated images to represent our completed work. Photos in our gallery show real projects.</li>
              </ul>

              <h2>AI and this website</h2>
              <p>We want people and the AI assistants they use to find accurate information about Barber Builders. Our <Link href="/ai-readiness">AI Readiness Service Index</Link> provides a clear summary of our business details, services, and service area.</p>

              <h2>Questions</h2>
              <p>If you have questions about how we use technology, call us at <a href="tel:+17158287780">715-828-7780</a> or email <a href="mailto:barberbuilders@icloud.com">barberbuilders@icloud.com</a>.</p>
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
