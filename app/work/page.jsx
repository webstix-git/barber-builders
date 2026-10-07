import Link from 'next/link';
import LightboxKeys from '../../components/LightboxKeys';
import FilterReveal from '../../components/FilterReveal';

export const metadata = {
  title: "See Our Work | Project Gallery | Barber Builders",
  description: "Browse custom homes, kitchens, screen porches, decks, and projects under construction by Barber Builders in Eau Claire and the Chippewa Valley.",
};

export default function WorkPage() {
  return (
    <>
      <meta property="og:title" content="See Our Work | Barber Builders" />
      <meta property="og:description" content="A gallery of custom homes, remodels, porches, and decks built across the Chippewa Valley." />
      <meta property="og:image" content="images/exterior-rear-deck.jpg" />
      <main id="main">
        <section className="page-hero page-hero--inner">
          <img src="/images/exterior-rear-deck.jpg" alt="" fetchPriority="high" />
          <div className="container page-hero-body">
            <span className="eyebrow">Project Gallery</span>
            <h1>See Our Work</h1>
            <p>From the first framing walls to the final finishes, here's a look at homes and spaces we've built across the Chippewa Valley.</p>
          </div>
        </section>

        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li><Link href="/">Home</Link></li>
              <li aria-current="page">See Our Work</li>
            </ol>
          </div>
        </nav>

        <section className="section section--light section--filtered">
          <div className="container">
            <input className="filter-input" type="radio" name="filter" id="f-all" defaultChecked />{" "}
            <input className="filter-input" type="radio" name="filter" id="f-exterior" />{" "}
            <input className="filter-input" type="radio" name="filter" id="f-interior" />{" "}
            <input className="filter-input" type="radio" name="filter" id="f-kitchen" />{" "}
            <input className="filter-input" type="radio" name="filter" id="f-outdoor" />{" "}
            <input className="filter-input" type="radio" name="filter" id="f-construction" />

            <div className="filter-bar" role="group" aria-label="Filter projects">
              <label htmlFor="f-all">All Projects</label>{" "}
              <label htmlFor="f-exterior">Exteriors</label>{" "}
              <label htmlFor="f-interior">Interiors</label>{" "}
              <label htmlFor="f-kitchen">Kitchens &amp; Baths</label>{" "}
              <label htmlFor="f-outdoor">Porches &amp; Decks</label>{" "}
              <label htmlFor="f-construction">Under Construction</label>
            </div>

            <div className="gallery">
              <a className="gallery-item cat-exterior cat-outdoor" id="thumb-1" href="#photo-1" aria-label="Open photo: Custom home with an elevated composite deck and lantern posts">{" "}
                <img src="/images/exterior-rear-deck.jpg" alt="Custom home with an elevated composite deck and lantern posts" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-2" href="#photo-2" aria-label="Open photo: Great room with a stacked-stone fireplace and timber beam ceiling">{" "}
                <img src="/images/great-room-fireplace.jpg" alt="Great room with a stacked-stone fireplace and timber beam ceiling" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-construction" id="thumb-3" href="#photo-3" aria-label="Open photo: Timber gable framing against a blue sky">{" "}
                <img src="/images/framing-gable.jpg" alt="Timber gable framing against a blue sky" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-4" href="#photo-4" aria-label="Open photo: Kitchen with a granite island and bar seating">{" "}
                <img src="/images/kitchen-island.jpg" alt="Kitchen with a granite island and bar seating" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-5" href="#photo-5" aria-label="Open photo: Kitchen with dark wood cabinets, speckled granite counters, and a stainless range">{" "}
                <img src="/images/kitchen-granite-dark.jpg" alt="Kitchen with dark wood cabinets, speckled granite counters, and a stainless range" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-outdoor" id="thumb-6" href="#photo-6" aria-label="Open photo: Screened porch with wood ceiling overlooking the trees">{" "}
                <img src="/images/screen-porch.jpg" alt="Screened porch with wood ceiling overlooking the trees" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-exterior" id="thumb-7" href="#photo-7" aria-label="Open photo: Ranch home with a three-stall garage and new driveway">{" "}
                <img src="/images/exterior-ranch-garage.jpg" alt="Ranch home with a three-stall garage and new driveway" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-8" href="#photo-8" aria-label="Open photo: Dark-stained timber beams crossing a tray ceiling">{" "}
                <img src="/images/coffered-ceiling.jpg" alt="Dark-stained timber beams crossing a tray ceiling" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-9" href="#photo-9" aria-label="Open photo: Walk-in tile shower with storage niches, a bench, and a mosaic accent band">{" "}
                <img src="/images/bath-tile-shower.jpg" alt="Walk-in tile shower with storage niches, a bench, and a mosaic accent band" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-construction" id="thumb-10" href="#photo-10" aria-label="Open photo: Vaulted room framed with large window openings">{" "}
                <img src="/images/framing-vaulted.jpg" alt="Vaulted room framed with large window openings" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-outdoor" id="thumb-11" href="#photo-11" aria-label="Open photo: Deck with a pergola surrounded by evergreens">{" "}
                <img src="/images/deck-pergola.jpg" alt="Deck with a pergola surrounded by evergreens" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-12" href="#photo-12" aria-label="Open photo: Kitchen with dark cabinets, island, and pendant lights">{" "}
                <img src="/images/kitchen-pendants.jpg" alt="Kitchen with dark cabinets, island, and pendant lights" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-13" href="#photo-13" aria-label="Open photo: Kitchen with navy cabinets, a stainless range hood, and a tile backsplash">{" "}
                <img src="/images/kitchen-navy-cabinets.jpg" alt="Kitchen with navy cabinets, a stainless range hood, and a tile backsplash" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-exterior" id="thumb-14" href="#photo-14" aria-label="Open photo: Sunroom addition with many windows">{" "}
                <img src="/images/sunroom-addition.jpg" alt="Sunroom addition with many windows" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-construction" id="thumb-15" href="#photo-15" aria-label="Open photo: Carpenter cutting trim at a job site workstation">{" "}
                <img src="/images/crew-at-work.jpg" alt="Carpenter cutting trim at a job site workstation" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-outdoor" id="thumb-16" href="#photo-16" aria-label="Open photo: Whitewashed wood plank porch ceiling with a ceiling fan">{" "}
                <img src="/images/porch-ceiling.jpg" alt="Whitewashed wood plank porch ceiling with a ceiling fan" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-17" href="#photo-17" aria-label="Open photo: Primary bathroom with a soaking tub and a lit vanity mirror">{" "}
                <img src="/images/bath-soaking-tub.jpg" alt="Primary bathroom with a soaking tub and a lit vanity mirror" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-exterior cat-outdoor" id="thumb-18" href="#photo-18" aria-label="Open photo: Rear of a custom home with a deck, patio, and garden">{" "}
                <img src="/images/exterior-patio-garden.jpg" alt="Rear of a custom home with a deck, patio, and garden" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-19" href="#photo-19" aria-label="Open photo: Open living area with dark accent wall and new flooring">{" "}
                <img src="/images/living-room.jpg" alt="Open living area with dark accent wall and new flooring" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-construction" id="thumb-20" href="#photo-20" aria-label="Open photo: Framed walls and roof trusses on a new build">{" "}
                <img src="/images/framing-trusses.jpg" alt="Framed walls and roof trusses on a new build" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-21" href="#photo-21" aria-label="Open photo: Remodeled kitchen with white counters, wood cabinets, and a peninsula">{" "}
                <img src="/images/kitchen-quartz-island.jpg" alt="Remodeled kitchen with white counters, wood cabinets, and a peninsula" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-outdoor" id="thumb-22" href="#photo-22" aria-label="Open photo: Deck railing with stained wood and black balusters">{" "}
                <img src="/images/deck-railing.jpg" alt="Deck railing with stained wood and black balusters" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-23" href="#photo-23" aria-label="Open photo: Stairwell with a window and wood handrail">{" "}
                <img src="/images/stairwell.jpg" alt="Stairwell with a window and wood handrail" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-exterior" id="thumb-24" href="#photo-24" aria-label="Open photo: New ranch home with gray siding">{" "}
                <img src="/images/exterior-ranch-front.jpg" alt="New ranch home with gray siding" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-25" href="#photo-25" aria-label="Open photo: Bathroom with a double vanity and dark wood cabinets">{" "}
                <img src="/images/bath-double-vanity.jpg" alt="Bathroom with a double vanity and dark wood cabinets" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-construction" id="thumb-26" href="#photo-26" aria-label="Open photo: Crane lifting roof trusses onto a framed home">{" "}
                <img src="/images/framing-crane.jpg" alt="Crane lifting roof trusses onto a framed home" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-outdoor" id="thumb-27" href="#photo-27" aria-label="Open photo: Screen porch with seating and ceiling fans">{" "}
                <img src="/images/screen-porch-lounge.jpg" alt="Screen porch with seating and ceiling fans" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-28" href="#photo-28" aria-label="Open photo: Kitchen with dark cabinets, a raised bar, and stainless appliances">{" "}
                <img src="/images/kitchen-bar-seating.jpg" alt="Kitchen with dark cabinets, a raised bar, and stainless appliances" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-29" href="#photo-29" aria-label="Open photo: Bedroom with two large windows and closet doors">{" "}
                <img src="/images/bedroom.jpg" alt="Bedroom with two large windows and closet doors" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-exterior" id="thumb-30" href="#photo-30" aria-label="Open photo: Custom home with green-gray siding and stone accents">{" "}
                <img src="/images/exterior-gray-siding.jpg" alt="Custom home with green-gray siding and stone accents" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-31" href="#photo-31" aria-label="Open photo: Soaking tub with a stone tile surround and deep teal walls">{" "}
                <img src="/images/bath-tub-surround.jpg" alt="Soaking tub with a stone tile surround and deep teal walls" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-construction" id="thumb-32" href="#photo-32" aria-label="Open photo: Interior wall of tall windows during construction">{" "}
                <img src="/images/window-wall.jpg" alt="Interior wall of tall windows during construction" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-construction cat-outdoor" id="thumb-33" href="#photo-33" aria-label="Open photo: Deck stairs and framing under construction">{" "}
                <img src="/images/deck-stairs.jpg" alt="Deck stairs and framing under construction" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-34" href="#photo-34" aria-label="Open photo: Live-edge wood bar top with open shelving">{" "}
                <img src="/images/kitchen-live-edge-bar.jpg" alt="Live-edge wood bar top with open shelving" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-construction" id="thumb-35" href="#photo-35" aria-label="Open photo: Wall framing on a new home subfloor">{" "}
                <img src="/images/framing-walls.jpg" alt="Wall framing on a new home subfloor" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-construction" id="thumb-36" href="#photo-36" aria-label="Open photo: Insulated foundation wall during construction">{" "}
                <img src="/images/foundation.jpg" alt="Insulated foundation wall during construction" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-37" href="#photo-37" aria-label="Open photo: Kitchen with a granite island, dark cabinets, and a stone mosaic backsplash">{" "}
                <img src="/images/kitchen-island-backsplash.jpg" alt="Kitchen with a granite island, dark cabinets, and a stone mosaic backsplash" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-construction" id="thumb-38" href="#photo-38" aria-label="Open photo: Two-story home framed and wrapped">{" "}
                <img src="/images/framing-house-wrap.jpg" alt="Two-story home framed and wrapped" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-exterior" id="thumb-39" href="#photo-39" aria-label="Open photo: Covered front entry with stone pillars and landscaped flower beds">{" "}
                <img src="/images/parade-covered-entry.jpg" alt="Covered front entry with stone pillars and landscaped flower beds" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-exterior" id="thumb-40" href="#photo-40" aria-label="Open photo: Front of the 2020 Parade Home with a gabled stone entry and landscaped yard">{" "}
                <img src="/images/parade-home-front.jpg" alt="Front of the 2020 Parade Home with a gabled stone entry and landscaped yard" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-exterior" id="thumb-41" href="#photo-41" aria-label="Open photo: Front entry with stone block steps and lavender plantings">{" "}
                <img src="/images/parade-entry-steps.jpg" alt="Front entry with stone block steps and lavender plantings" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-exterior cat-outdoor" id="thumb-42" href="#photo-42" aria-label="Open photo: Rear of a two-story home with a glass-railed deck and flagstone path">{" "}
                <img src="/images/parade-rear-exterior.jpg" alt="Rear of a two-story home with a glass-railed deck and flagstone path" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-outdoor" id="thumb-43" href="#photo-43" aria-label="Open photo: Covered patio under the deck with a stained wood stairway">{" "}
                <img src="/images/parade-under-deck-patio.jpg" alt="Covered patio under the deck with a stained wood stairway" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-outdoor" id="thumb-44" href="#photo-44" aria-label="Open photo: Stained wood deck stairs with black metal railings">{" "}
                <img src="/images/parade-deck-stairs.jpg" alt="Stained wood deck stairs with black metal railings" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-outdoor" id="thumb-45" href="#photo-45" aria-label="Open photo: Deck with a fire table and glass railing overlooking the woods">{" "}
                <img src="/images/parade-deck-fire-table.jpg" alt="Deck with a fire table and glass railing overlooking the woods" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-outdoor" id="thumb-46" href="#photo-46" aria-label="Open photo: Stone fire pit with Adirondack chairs and torches at dusk">{" "}
                <img src="/images/parade-fire-pit.jpg" alt="Stone fire pit with Adirondack chairs and torches at dusk" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-outdoor" id="thumb-47" href="#photo-47" aria-label="Open photo: Hot tub room with barnwood walls and a glass garage door">{" "}
                <img src="/images/parade-hot-tub-room.jpg" alt="Hot tub room with barnwood walls and a glass garage door" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-outdoor" id="thumb-48" href="#photo-48" aria-label="Open photo: Hot tub room opening onto the covered patio and deck stairs">{" "}
                <img src="/images/parade-hot-tub-view.jpg" alt="Hot tub room opening onto the covered patio and deck stairs" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-49" href="#photo-49" aria-label="Open photo: Folding glass doors open from the patio into the great room">{" "}
                <img src="/images/parade-folding-doors.jpg" alt="Folding glass doors open from the patio into the great room" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-50" href="#photo-50" aria-label="Open photo: Great room with a stone fireplace, beam ceiling, and open kitchen">{" "}
                <img src="/images/parade-great-room.jpg" alt="Great room with a stone fireplace, beam ceiling, and open kitchen" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-51" href="#photo-51" aria-label="Open photo: Stacked-stone fireplace with floating shelves and acacia hardwood floors">{" "}
                <img src="/images/parade-fireplace-shelves.jpg" alt="Stacked-stone fireplace with floating shelves and acacia hardwood floors" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-52" href="#photo-52" aria-label="Open photo: Stacked-stone fireplace above acacia hardwood floors">{" "}
                <img src="/images/parade-stone-fireplace.jpg" alt="Stacked-stone fireplace above acacia hardwood floors" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-53" href="#photo-53" aria-label="Open photo: Coffered beam ceiling over tall windows and patio doors">{" "}
                <img src="/images/parade-beam-ceiling.jpg" alt="Coffered beam ceiling over tall windows and patio doors" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-kitchen cat-interior" id="thumb-54" href="#photo-54" aria-label="Open photo: Kitchen with a long granite island, pendant lights, and tall wood cabinets">{" "}
                <img src="/images/parade-kitchen-island.jpg" alt="Kitchen with a long granite island, pendant lights, and tall wood cabinets" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-55" href="#photo-55" aria-label="Open photo: Dining room with a tile fireplace and a wine display opening to the kitchen">{" "}
                <img src="/images/parade-dining-kitchen-view.jpg" alt="Dining room with a tile fireplace and a wine display opening to the kitchen" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-56" href="#photo-56" aria-label="Open photo: Recessed wine display above a dark wood dining table">{" "}
                <img src="/images/parade-wine-display.jpg" alt="Recessed wine display above a dark wood dining table" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-57" href="#photo-57" aria-label="Open photo: Dining room with a crystal chandelier and tray ceiling">{" "}
                <img src="/images/parade-dining-chandelier.jpg" alt="Dining room with a crystal chandelier and tray ceiling" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-58" href="#photo-58" aria-label="Open photo: Dining room with a tile fireplace, crystal chandelier, and French doors">{" "}
                <img src="/images/parade-dining-fireplace.jpg" alt="Dining room with a tile fireplace, crystal chandelier, and French doors" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-59" href="#photo-59" aria-label="Open photo: Tile fireplace with a dark wood mantel behind the dining table">{" "}
                <img src="/images/parade-dining-table-fireplace.jpg" alt="Tile fireplace with a dark wood mantel behind the dining table" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-60" href="#photo-60" aria-label="Open photo: Four-season room with wicker seating and windows on three sides">{" "}
                <img src="/images/parade-four-season-room.jpg" alt="Four-season room with wicker seating and windows on three sides" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-61" href="#photo-61" aria-label="Open photo: Mudroom with tall wood cabinets, open shelving, and a built-in bench">{" "}
                <img src="/images/parade-mudroom.jpg" alt="Mudroom with tall wood cabinets, open shelving, and a built-in bench" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-62" href="#photo-62" aria-label="Open photo: Primary bedroom with a tray ceiling and sliding patio door">{" "}
                <img src="/images/parade-primary-bedroom.jpg" alt="Primary bedroom with a tray ceiling and sliding patio door" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-63" href="#photo-63" aria-label="Open photo: Bedroom with transom windows and a tray ceiling">{" "}
                <img src="/images/parade-bedroom-transoms.jpg" alt="Bedroom with transom windows and a tray ceiling" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-64" href="#photo-64" aria-label="Open photo: Acacia stair treads with a dark wood railing and iron balusters">{" "}
                <img src="/images/parade-acacia-stairs.jpg" alt="Acacia stair treads with a dark wood railing and iron balusters" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-65" href="#photo-65" aria-label="Open photo: Wood and iron stair railing around the lower-level stairway">{" "}
                <img src="/images/parade-stair-railing.jpg" alt="Wood and iron stair railing around the lower-level stairway" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-66" href="#photo-66" aria-label="Open photo: Lower-level game room with a poker table and a double-sided electric fireplace">{" "}
                <img src="/images/parade-game-room.jpg" alt="Lower-level game room with a poker table and a double-sided electric fireplace" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-interior" id="thumb-67" href="#photo-67" aria-label="Open photo: Lower-level theater area with a projector screen, leather seating, and a foosball table">{" "}
                <img src="/images/parade-theater-room.jpg" alt="Lower-level theater area with a projector screen, leather seating, and a foosball table" loading="lazy" />{" "}
              </a>{" "}
              <a className="gallery-item cat-construction" id="thumb-68" href="#photo-68" aria-label="Open photo: Live-edge walnut slab being finished for a bar top">{" "}
                <img src="/images/parade-walnut-slab.jpg" alt="Live-edge walnut slab being finished for a bar top" loading="lazy" />{" "}
              </a>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <img src="/images/great-room-fireplace.jpg" alt="" loading="lazy" />
          <div className="container">
            <div>
              <h2>Picture your project here.</h2>
              <p>Reach out to start planning, or follow along on Facebook for our latest builds.</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Start Your Project</Link>{" "}
              <a className="btn btn--light" href="https://www.facebook.com/profile.php?id=100063575473506" target="_blank" rel="noopener">Follow on Facebook</a>
            </div>
          </div>
        </section>
      </main>


      <div className="lightbox" id="photo-1" role="dialog" aria-label="Custom home with elevated composite deck">
        <a className="lightbox-backdrop" href="#thumb-1" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/exterior-rear-deck.jpg" alt="Custom home with an elevated composite deck and lantern posts" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-68" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-2" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-1" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-2" role="dialog" aria-label="Great room with stone fireplace and timber beams">
        <a className="lightbox-backdrop" href="#thumb-2" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/great-room-fireplace.jpg" alt="Great room with a stacked-stone fireplace and timber beam ceiling" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-1" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-3" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-2" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-3" role="dialog" aria-label="Gable framing">
        <a className="lightbox-backdrop" href="#thumb-3" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/framing-gable.jpg" alt="Timber gable framing against a blue sky" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-2" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-4" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-3" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-4" role="dialog" aria-label="Open-concept kitchen with granite island">
        <a className="lightbox-backdrop" href="#thumb-4" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/kitchen-island.jpg" alt="Kitchen with a granite island and bar seating" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-3" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-5" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-4" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-5" role="dialog" aria-label="Kitchen with granite counters">
        <a className="lightbox-backdrop" href="#thumb-5" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/kitchen-granite-dark.jpg" alt="Kitchen with dark wood cabinets, speckled granite counters, and a stainless range" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-4" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-6" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-5" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-6" role="dialog" aria-label="Wooded screen porch">
        <a className="lightbox-backdrop" href="#thumb-6" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/screen-porch.jpg" alt="Screened porch with wood ceiling overlooking the trees" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-5" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-7" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-6" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-7" role="dialog" aria-label="Ranch home with three-stall garage">
        <a className="lightbox-backdrop" href="#thumb-7" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/exterior-ranch-garage.jpg" alt="Ranch home with a three-stall garage and new driveway" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-6" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-8" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-7" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-8" role="dialog" aria-label="Timber beam ceiling detail">
        <a className="lightbox-backdrop" href="#thumb-8" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/coffered-ceiling.jpg" alt="Dark-stained timber beams crossing a tray ceiling" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-7" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-9" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-8" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-9" role="dialog" aria-label="Custom tile shower">
        <a className="lightbox-backdrop" href="#thumb-9" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/bath-tile-shower.jpg" alt="Walk-in tile shower with storage niches, a bench, and a mosaic accent band" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-8" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-10" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-9" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-10" role="dialog" aria-label="Vaulted framing with walls of windows">
        <a className="lightbox-backdrop" href="#thumb-10" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/framing-vaulted.jpg" alt="Vaulted room framed with large window openings" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-9" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-11" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-10" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-11" role="dialog" aria-label="Deck with pergola">
        <a className="lightbox-backdrop" href="#thumb-11" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/deck-pergola.jpg" alt="Deck with a pergola surrounded by evergreens" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-10" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-12" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-11" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-12" role="dialog" aria-label="Kitchen with dark cabinetry and pendant lights">
        <a className="lightbox-backdrop" href="#thumb-12" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/kitchen-pendants.jpg" alt="Kitchen with dark cabinets, island, and pendant lights" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-11" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-13" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-12" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-13" role="dialog" aria-label="Navy kitchen with tile backsplash">
        <a className="lightbox-backdrop" href="#thumb-13" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/kitchen-navy-cabinets.jpg" alt="Kitchen with navy cabinets, a stainless range hood, and a tile backsplash" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-12" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-14" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-13" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-14" role="dialog" aria-label="Sunroom addition">
        <a className="lightbox-backdrop" href="#thumb-14" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/sunroom-addition.jpg" alt="Sunroom addition with many windows" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-13" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-15" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-14" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-15" role="dialog" aria-label="Our crew at work">
        <a className="lightbox-backdrop" href="#thumb-15" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/crew-at-work.jpg" alt="Carpenter cutting trim at a job site workstation" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-14" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-16" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-15" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-16" role="dialog" aria-label="Screen porch with wood plank ceiling">
        <a className="lightbox-backdrop" href="#thumb-16" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/porch-ceiling.jpg" alt="Whitewashed wood plank porch ceiling with a ceiling fan" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-15" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-17" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-16" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-17" role="dialog" aria-label="Primary bathroom with soaking tub">
        <a className="lightbox-backdrop" href="#thumb-17" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/bath-soaking-tub.jpg" alt="Primary bathroom with a soaking tub and a lit vanity mirror" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-16" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-18" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-17" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-18" role="dialog" aria-label="Custom home with patio and deck">
        <a className="lightbox-backdrop" href="#thumb-18" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/exterior-patio-garden.jpg" alt="Rear of a custom home with a deck, patio, and garden" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-17" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-19" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-18" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-19" role="dialog" aria-label="Open living area">
        <a className="lightbox-backdrop" href="#thumb-19" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/living-room.jpg" alt="Open living area with dark accent wall and new flooring" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-18" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-20" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-19" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-20" role="dialog" aria-label="Framing and trusses">
        <a className="lightbox-backdrop" href="#thumb-20" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/framing-trusses.jpg" alt="Framed walls and roof trusses on a new build" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-19" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-21" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-20" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-21" role="dialog" aria-label="Remodeled kitchen with white counters">
        <a className="lightbox-backdrop" href="#thumb-21" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/kitchen-quartz-island.jpg" alt="Remodeled kitchen with white counters, wood cabinets, and a peninsula" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-20" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-22" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-21" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-22" role="dialog" aria-label="Custom deck railing">
        <a className="lightbox-backdrop" href="#thumb-22" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/deck-railing.jpg" alt="Deck railing with stained wood and black balusters" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-21" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-23" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-22" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-23" role="dialog" aria-label="Bright stairwell">
        <a className="lightbox-backdrop" href="#thumb-23" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/stairwell.jpg" alt="Stairwell with a window and wood handrail" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-22" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-24" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-23" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-24" role="dialog" aria-label="New ranch home">
        <a className="lightbox-backdrop" href="#thumb-24" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/exterior-ranch-front.jpg" alt="New ranch home with gray siding" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-23" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-25" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-24" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-25" role="dialog" aria-label="Double vanity bathroom">
        <a className="lightbox-backdrop" href="#thumb-25" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/bath-double-vanity.jpg" alt="Bathroom with a double vanity and dark wood cabinets" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-24" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-26" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-25" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-26" role="dialog" aria-label="Setting trusses with a crane">
        <a className="lightbox-backdrop" href="#thumb-26" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/framing-crane.jpg" alt="Crane lifting roof trusses onto a framed home" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-25" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-27" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-26" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-27" role="dialog" aria-label="Screen porch living space">
        <a className="lightbox-backdrop" href="#thumb-27" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/screen-porch-lounge.jpg" alt="Screen porch with seating and ceiling fans" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-26" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-28" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-27" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-28" role="dialog" aria-label="Kitchen with raised bar seating">
        <a className="lightbox-backdrop" href="#thumb-28" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/kitchen-bar-seating.jpg" alt="Kitchen with dark cabinets, a raised bar, and stainless appliances" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-27" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-29" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-28" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-29" role="dialog" aria-label="Bedroom with large windows">
        <a className="lightbox-backdrop" href="#thumb-29" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/bedroom.jpg" alt="Bedroom with two large windows and closet doors" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-28" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-30" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-29" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-30" role="dialog" aria-label="Custom home with stone accents">
        <a className="lightbox-backdrop" href="#thumb-30" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/exterior-gray-siding.jpg" alt="Custom home with green-gray siding and stone accents" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-29" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-31" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-30" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-31" role="dialog" aria-label="Tile tub surround">
        <a className="lightbox-backdrop" href="#thumb-31" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/bath-tub-surround.jpg" alt="Soaking tub with a stone tile surround and deep teal walls" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-30" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-32" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-31" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-32" role="dialog" aria-label="Window wall taking shape">
        <a className="lightbox-backdrop" href="#thumb-32" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/window-wall.jpg" alt="Interior wall of tall windows during construction" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-31" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-33" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-32" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-33" role="dialog" aria-label="Deck stairs under construction">
        <a className="lightbox-backdrop" href="#thumb-33" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/deck-stairs.jpg" alt="Deck stairs and framing under construction" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-32" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-34" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-33" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-34" role="dialog" aria-label="Live-edge wood bar">
        <a className="lightbox-backdrop" href="#thumb-34" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/kitchen-live-edge-bar.jpg" alt="Live-edge wood bar top with open shelving" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-33" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-35" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-34" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-35" role="dialog" aria-label="Wall framing">
        <a className="lightbox-backdrop" href="#thumb-35" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/framing-walls.jpg" alt="Wall framing on a new home subfloor" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-34" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-36" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-35" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-36" role="dialog" aria-label="Insulated foundation">
        <a className="lightbox-backdrop" href="#thumb-36" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/foundation.jpg" alt="Insulated foundation wall during construction" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-35" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-37" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-36" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-37" role="dialog" aria-label="Kitchen island and mosaic backsplash">
        <a className="lightbox-backdrop" href="#thumb-37" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/kitchen-island-backsplash.jpg" alt="Kitchen with a granite island, dark cabinets, and a stone mosaic backsplash" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-36" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-38" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-37" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-38" role="dialog" aria-label="House wrap and framing">
        <a className="lightbox-backdrop" href="#thumb-38" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/framing-house-wrap.jpg" alt="Two-story home framed and wrapped" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-37" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-39" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-38" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-39" role="dialog" aria-label="Stone-pillar covered entry">
        <a className="lightbox-backdrop" href="#thumb-39" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-covered-entry.jpg" alt="Covered front entry with stone pillars and landscaped flower beds" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-38" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-40" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-39" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-40" role="dialog" aria-label="2020 Parade Home front">
        <a className="lightbox-backdrop" href="#thumb-40" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-home-front.jpg" alt="Front of the 2020 Parade Home with a gabled stone entry and landscaped yard" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-39" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-41" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-40" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-41" role="dialog" aria-label="Front entry and stone steps">
        <a className="lightbox-backdrop" href="#thumb-41" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-entry-steps.jpg" alt="Front entry with stone block steps and lavender plantings" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-40" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-42" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-41" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-42" role="dialog" aria-label="Rear deck and flagstone path">
        <a className="lightbox-backdrop" href="#thumb-42" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-rear-exterior.jpg" alt="Rear of a two-story home with a glass-railed deck and flagstone path" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-41" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-43" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-42" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-43" role="dialog" aria-label="Covered patio under the deck">
        <a className="lightbox-backdrop" href="#thumb-43" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-under-deck-patio.jpg" alt="Covered patio under the deck with a stained wood stairway" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-42" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-44" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-43" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-44" role="dialog" aria-label="Stained deck stairs">
        <a className="lightbox-backdrop" href="#thumb-44" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-deck-stairs.jpg" alt="Stained wood deck stairs with black metal railings" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-43" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-45" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-44" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-45" role="dialog" aria-label="Deck with fire table">
        <a className="lightbox-backdrop" href="#thumb-45" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-deck-fire-table.jpg" alt="Deck with a fire table and glass railing overlooking the woods" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-44" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-46" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-45" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-46" role="dialog" aria-label="Backyard fire pit">
        <a className="lightbox-backdrop" href="#thumb-46" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-fire-pit.jpg" alt="Stone fire pit with Adirondack chairs and torches at dusk" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-45" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-47" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-46" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-47" role="dialog" aria-label="Hot tub room">
        <a className="lightbox-backdrop" href="#thumb-47" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-hot-tub-room.jpg" alt="Hot tub room with barnwood walls and a glass garage door" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-46" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-48" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-47" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-48" role="dialog" aria-label="Hot tub room and patio view">
        <a className="lightbox-backdrop" href="#thumb-48" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-hot-tub-view.jpg" alt="Hot tub room opening onto the covered patio and deck stairs" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-47" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-49" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-48" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-49" role="dialog" aria-label="Folding glass patio doors">
        <a className="lightbox-backdrop" href="#thumb-49" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-folding-doors.jpg" alt="Folding glass doors open from the patio into the great room" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-48" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-50" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-49" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-50" role="dialog" aria-label="Great room and open kitchen">
        <a className="lightbox-backdrop" href="#thumb-50" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-great-room.jpg" alt="Great room with a stone fireplace, beam ceiling, and open kitchen" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-49" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-51" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-50" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-51" role="dialog" aria-label="Stone fireplace and shelves">
        <a className="lightbox-backdrop" href="#thumb-51" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-fireplace-shelves.jpg" alt="Stacked-stone fireplace with floating shelves and acacia hardwood floors" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-50" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-52" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-51" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-52" role="dialog" aria-label="Stacked-stone fireplace">
        <a className="lightbox-backdrop" href="#thumb-52" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-stone-fireplace.jpg" alt="Stacked-stone fireplace above acacia hardwood floors" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-51" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-53" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-52" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-53" role="dialog" aria-label="Beam ceiling and tall windows">
        <a className="lightbox-backdrop" href="#thumb-53" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-beam-ceiling.jpg" alt="Coffered beam ceiling over tall windows and patio doors" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-52" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-54" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-53" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-54" role="dialog" aria-label="Kitchen with long granite island">
        <a className="lightbox-backdrop" href="#thumb-54" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-kitchen-island.jpg" alt="Kitchen with a long granite island, pendant lights, and tall wood cabinets" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-53" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-55" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-54" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-55" role="dialog" aria-label="Dining room and kitchen view">
        <a className="lightbox-backdrop" href="#thumb-55" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-dining-kitchen-view.jpg" alt="Dining room with a tile fireplace and a wine display opening to the kitchen" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-54" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-56" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-55" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-56" role="dialog" aria-label="Recessed wine display">
        <a className="lightbox-backdrop" href="#thumb-56" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-wine-display.jpg" alt="Recessed wine display above a dark wood dining table" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-55" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-57" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-56" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-57" role="dialog" aria-label="Dining room chandelier">
        <a className="lightbox-backdrop" href="#thumb-57" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-dining-chandelier.jpg" alt="Dining room with a crystal chandelier and tray ceiling" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-56" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-58" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-57" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-58" role="dialog" aria-label="Dining room fireplace">
        <a className="lightbox-backdrop" href="#thumb-58" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-dining-fireplace.jpg" alt="Dining room with a tile fireplace, crystal chandelier, and French doors" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-57" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-59" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-58" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-59" role="dialog" aria-label="Fireplace behind the dining table">
        <a className="lightbox-backdrop" href="#thumb-59" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-dining-table-fireplace.jpg" alt="Tile fireplace with a dark wood mantel behind the dining table" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-58" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-60" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-59" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-60" role="dialog" aria-label="Four-season room">
        <a className="lightbox-backdrop" href="#thumb-60" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-four-season-room.jpg" alt="Four-season room with wicker seating and windows on three sides" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-59" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-61" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-60" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-61" role="dialog" aria-label="Mudroom built-ins">
        <a className="lightbox-backdrop" href="#thumb-61" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-mudroom.jpg" alt="Mudroom with tall wood cabinets, open shelving, and a built-in bench" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-60" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-62" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-61" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-62" role="dialog" aria-label="Primary bedroom">
        <a className="lightbox-backdrop" href="#thumb-62" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-primary-bedroom.jpg" alt="Primary bedroom with a tray ceiling and sliding patio door" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-61" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-63" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-62" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-63" role="dialog" aria-label="Bedroom with transom windows">
        <a className="lightbox-backdrop" href="#thumb-63" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-bedroom-transoms.jpg" alt="Bedroom with transom windows and a tray ceiling" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-62" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-64" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-63" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-64" role="dialog" aria-label="Acacia stair treads">
        <a className="lightbox-backdrop" href="#thumb-64" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-acacia-stairs.jpg" alt="Acacia stair treads with a dark wood railing and iron balusters" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-63" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-65" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-64" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-65" role="dialog" aria-label="Stairway railing">
        <a className="lightbox-backdrop" href="#thumb-65" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-stair-railing.jpg" alt="Wood and iron stair railing around the lower-level stairway" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-64" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-66" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-65" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-66" role="dialog" aria-label="Lower-level game room">
        <a className="lightbox-backdrop" href="#thumb-66" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-game-room.jpg" alt="Lower-level game room with a poker table and a double-sided electric fireplace" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-65" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-67" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-66" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-67" role="dialog" aria-label="Lower-level theater area">
        <a className="lightbox-backdrop" href="#thumb-67" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-theater-room.jpg" alt="Lower-level theater area with a projector screen, leather seating, and a foosball table" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-66" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-68" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-67" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <div className="lightbox" id="photo-68" role="dialog" aria-label="Live-edge walnut slab">
        <a className="lightbox-backdrop" href="#thumb-68" tabIndex="-1" aria-hidden="true"></a>
        <figure>
          <img src="/images/parade-walnut-slab.jpg" alt="Live-edge walnut slab being finished for a bar top" loading="lazy" />
        </figure>
        <a className="lightbox-btn lightbox-prev" href="#photo-67" aria-label="Previous photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-next" href="#photo-1" aria-label="Next photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></a>{" "}
        <a className="lightbox-btn lightbox-close" href="#thumb-68" aria-label="Close photo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg></a>
      </div>
      <LightboxKeys />
      <FilterReveal />
    </>
  );
}
