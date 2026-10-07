import Link from 'next/link';
import TabsBehavior from '../../components/TabsBehavior';

export const metadata = {
  title: "About Us | Barber Builders, Eau Claire Custom Home Builder",
  description: "Meet Barber Builders, a heart-centered custom home builder serving Eau Claire and the Chippewa Valley since 2014. Learn our story and building philosophy.",
};

export default function AboutPage() {
  return (
    <>
      <meta property="og:title" content="About Barber Builders" />
      <meta property="og:description" content="Heart-centered custom home building in the Chippewa Valley since 2014." />
      <meta property="og:image" content="images/framing-gable.jpg" />
      <main id="main">
        <section className="page-hero page-hero--inner">
          <img src="/images/framing-vaulted.jpg" alt="" fetchPriority="high" />
          <div className="container page-hero-body">
            <span className="eyebrow">Our Story</span>
            <h1>About Us</h1>
            <p>We're a local Eau Claire builder who believes the best homes are made with care, creativity, and a whole lot of heart.</p>
          </div>
        </section>

        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">About Us</li>
            </ol>
          </div>
        </nav>

        <section className="section">
          <div className="container split">
            <div>
              <span className="eyebrow">How It Started</span>
              <h2>A passion for creating something from scratch</h2>
              <p className="lead">Barber Builders started with a simple love: taking an empty lot and a few ideas and turning them into something real.</p>
              <p>There's nothing quite like standing back and admiring a completed project done well. That feeling has driven us since we opened our doors in 2014, and it's still the best part of the job today.</p>
              <p>Over the past 12 years we've grown into a trusted custom builder across Eau Claire and the Chippewa Valley, but our approach hasn't changed. We stay hands-on, take the time to get the details right, and work only with established, experienced professionals so every home delivers a lifetime of satisfaction.</p>
            </div>
            <div className="img-frame">
              <img src="/images/framing-gable.jpg" alt="Timber gable framing against a blue sky on a Barber Builders project" loading="lazy" />
              <div className="img-badge"><strong>12 years</strong>building homes in the Chippewa Valley</div>
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

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Why We Build</span>
              <h2>Why we love what we do</h2>
              <p>Building is like cooking and music: you can always try new ingredients or change up the tune. Every project brings something new, and that's what keeps us inspired after 12 years.</p>
            </div>
            <div className="service-grid service-grid--4">
              <article className="service-tile">
                <div className="service-tile-media"><img src="/images/framing-crane.jpg" alt="Crane lifting materials over new wall framing on a Barber Builders job site" loading="lazy" /></div>
                <div className="service-tile-body">
                  <h3>Creating something from scratch</h3>
                  <p>An empty lot, a few ideas, and the chance to turn them into something real.</p>
                </div>
              </article>
              <article className="service-tile">
                <div className="service-tile-media"><img src="/images/framing-house-wrap.jpg" alt="Crew working on a framed two-story home wrapped in house wrap" loading="lazy" /></div>
                <div className="service-tile-body">
                  <h3>Seeing a project come together</h3>
                  <p>Walls rise, the roofline takes shape, and plans on paper become a place.</p>
                </div>
              </article>
              <article className="service-tile">
                <div className="service-tile-media"><img src="/images/exterior-ranch-front.jpg" alt="Finished gray ranch home with a Barber Builders truck in the driveway" loading="lazy" /></div>
                <div className="service-tile-body">
                  <h3>A project done well</h3>
                  <p>The best part of the job: standing back to admire a finished home built right.</p>
                </div>
              </article>
              <article className="service-tile">
                <div className="service-tile-media"><img src="/images/coffered-ceiling.jpg" alt="Coffered ceiling detail in a custom home" loading="lazy" /></div>
                <div className="service-tile-body">
                  <h3>Every project is unique</h3>
                  <p>No templates. Each client, lot, and plan brings fresh ideas, and every home is shaped around the people who live in it.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--dark section--compact">
          <div className="container beliefs">
            <div className="beliefs-media">
              <img src="/images/crew-at-work.jpg" alt="Barber Builders carpenter cutting trim boards inside a home under construction" loading="lazy" />
            </div>
            <div>
              <span className="eyebrow">What We Believe</span>
              <h2>Building with heart</h2>
              <p className="beliefs-intro">Our values are simple, and they show up in every project we take on, big or small.</p>
              <ul className="value-grid">
                <li>
                  <img className="value-icon" src="/icons/heart.svg" alt="" width="44" height="44" />
                  <h3>Heart in everything</h3>
                  <p>We care about our clients, our crew, and the families who will live in the homes we build.</p>
                </li>
                <li>
                  <img className="value-icon" src="/icons/creative.svg" alt="" width="44" height="44" />
                  <h3>Room to be creative</h3>
                  <p>Like a great recipe or a new song, every build is a chance to try something fresh.</p>
                </li>
                <li>
                  <img className="value-icon" src="/icons/craftsmanship.svg" alt="" width="44" height="44" />
                  <h3>Craftsmanship that lasts</h3>
                  <p>Built tough, built for life, with quality materials and no corners cut on the details.</p>
                </li>
                <li>
                  <img className="value-icon" src="/icons/answer.svg" alt="" width="44" height="44" />
                  <h3>No stress, no surprises</h3>
                  <p>Honest answers and a clear process, so building feels exciting instead of overwhelming.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split split-media-first">
            <div className="about-media">
              <img src="/images/framing-walls.jpg" alt="Wall framing going up on a new Barber Builders home" loading="lazy" />
            </div>
            <div>
              <span className="eyebrow">Behind Every Build</span>
              <h2>From foundation to finishing touches</h2>
              <p>We provide specialty design and quality craftsmanship at every stage. From planning and development to framing, finishes, and the final walkthrough, you work with one team that knows your home inside and out.</p>
              <div className="tabs">
                <div className="tab-list" role="tablist" aria-label="Stages of every build">
                  <button type="button" role="tab" id="tab-planning" aria-controls="panel-planning" aria-selected="true">Planning</button>{" "}
                  <button type="button" role="tab" id="tab-framing" aria-controls="panel-framing" aria-selected="false" tabIndex="-1">Framing</button>{" "}
                  <button type="button" role="tab" id="tab-finishes" aria-controls="panel-finishes" aria-selected="false" tabIndex="-1">Finishes</button>{" "}
                  <button type="button" role="tab" id="tab-partners" aria-controls="panel-partners" aria-selected="false" tabIndex="-1">Partners</button>
                </div>
                <div className="tab-panel" role="tabpanel" id="panel-planning" aria-labelledby="tab-planning" tabIndex="0">
                  <h3>Planning, development, and specialty design</h3>
                  <p>Every build starts with a conversation. We help you shape the plan, choose materials, and set a clear budget and schedule, with specialty design for the details that make the home yours.</p>
                </div>
                <div className="tab-panel" role="tabpanel" id="panel-framing" aria-labelledby="tab-framing" tabIndex="0" hidden>
                  <h3>Solid foundations and quality framing</h3>
                  <p>What you can't see matters most. We pour solid foundations and frame every wall square and strong, so your home is ready for decades of Wisconsin winters.</p>
                </div>
                <div className="tab-panel" role="tabpanel" id="panel-finishes" aria-labelledby="tab-finishes" tabIndex="0" hidden>
                  <h3>Custom interior and exterior finishes</h3>
                  <p>Trim, cabinetry, tile, siding, and stone. The finishes are where your home's personality comes through, and we take the time to get every detail right.</p>
                </div>
                <div className="tab-panel" role="tabpanel" id="panel-partners" aria-labelledby="tab-partners" tabIndex="0" hidden>
                  <h3>Established, experienced trade partners</h3>
                  <p>We work with trusted local trades we know well. One team coordinates everyone, so you have a single point of contact from the first plan to the final walkthrough.</p>
                </div>
              </div>
              <div className="btn-row">
                <Link className="btn btn--outline" href="/services">Explore Our Services</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <img src="/images/exterior-rear-deck.jpg" alt="" loading="lazy" />
          <div className="container">
            <div>
              <h2>Let's create your home together.</h2>
              <p>We'd love to hear about your plans, whether they're big, small, or still taking shape.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Start Your Project</Link>{" "}
              <a className="btn btn--light" href="tel:+17158287780">Call 715-828-7780</a>
            </div>
          </div>
        </section>
      </main>
      <TabsBehavior />
    </>
  );
}
