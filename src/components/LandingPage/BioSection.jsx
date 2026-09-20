import { MainLayoutContainer } from '../../MainLayout.jsx'

// =============================================================================
// Bio content — edit the strings below to change what this section says.
// `sectionLabel` is the small text in the left column (e.g. "01 / LOGIC").
// `mainParagraph` is the large intro text.
// `asideParagraph` is the smaller quote-style block with the left border.
// =============================================================================

/** Small label above the bio (left column on desktop). */
const bioSectionLabel = '01 / BIO'

/** Main bio copy — the big paragraph visitors read first. */
const bioMainParagraph =
  'My name is Weston Culpepper, a highly motivated and dedicated Computer Science student at North Carolina A&T State University with a strong academic record (3.9 GPA) and a passion for building robust, user-centric software solutions. With hands-on experience as a Software Engineering Intern at Aflac, I have a proven ability to streamline complex processes, develop full-stack applications, and collaborate effectively within Agile teams to deliver impactful results.'

/** Secondary text in the bordered box below the main paragraph. */
const bioAsideParagraph =
  'My success in competitive hackathons demonstrates my capacity to thrive under pressure, rapidly prototype AI-driven platforms, and work cross-functionally to transform intricate data into intuitive user experiences. Proficient in a diverse tech stack including Java, Python, C++, React, and Node.js, I am eager to apply my technical expertise, leadership skills, and problem-solving mindset to create innovative solutions that drive efficiency and make a tangible difference. Guided by the Eagle Scout values of leadership and service, I\'m a collaborative team player.'

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
          {/* Left column: shield image + section label */}
<div className="flex flex-col items-start gap-6 lg:col-span-4">
  <img
    src="/WC_Shield.jpg"
    alt="WC shield"
    className="h-48 w-48 object-contain"
  />
  <span className="font-label text-xs uppercase tracking-[0.3em] text-on-surface-variant">
    {bioSectionLabel}
  </span>
</div>

          {/* Right column: main bio + optional aside */}
          <div className="lg:col-span-8">
            <p className="max-w-3xl text-lg leading-relaxed font-medium text-black md:text-xl">
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
