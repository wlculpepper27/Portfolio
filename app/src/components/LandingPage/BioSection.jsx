import { MainLayoutContainer } from '../../MainLayout.jsx'

// =============================================================================
// Bio content — edit the strings below to change what this section says.
// `sectionLabel` is the small text in the left column (e.g. "01 / LOGIC").
// `mainParagraph` is the large intro text.
// `asideParagraph` is the smaller quote-style block with the left border.
// =============================================================================

/** Small label above the bio (left column on desktop). */
const bioSectionLabel = '01 / LOGIC'

/** Main bio copy — the big paragraph visitors read first. */
const bioMainParagraph =
  'I specialize in constructing robust, scalable web architectures. My approach treats code as infrastructure—prioritizing mathematical precision, clean abstraction, and long-term maintainability over transient design trends.'

/** Secondary text in the bordered box below the main paragraph. */
const bioAsideParagraph =
  'Currently focused on distributed systems and high-performance frontend interfaces. Based in the intersection of engineering and design.'

// =============================================================================
// Component — matches mockup1/landing-page.html (bio section)
// id="bio" lets navbar links like /#bio scroll here.
// =============================================================================
export default function BioSection() {
  return (
    <section id="bio" className="bg-surface-container-low py-32">
      {/*
        MainLayoutContainer = max width + horizontal padding (same as hero).
        Inside: two columns on large screens — label left, text right.
      */}
      <MainLayoutContainer>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left column: section index / theme label */}
          <div className="lg:col-span-4">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-on-surface-variant">
              {bioSectionLabel}
            </span>
          </div>

          {/* Right column: main bio + optional aside */}
          <div className="lg:col-span-8">
            <p className="max-w-3xl text-3xl leading-relaxed font-medium text-black md:text-4xl">
              {bioMainParagraph}
            </p>

            {/* Bordered aside — extra detail or quote; uses left border instead of a box */}
            <div className="mt-16 max-w-xl border-l-2 border-black pl-8">
              <p className="leading-loose text-on-surface-variant">
                {bioAsideParagraph}
              </p>
            </div>
          </div>
        </div>
      </MainLayoutContainer>
    </section>
  )
}
