import { MainLayoutContainer } from '../../MainLayout.jsx'

// =============================================================================
// Hero content — change the text, image URL, and links here (no need to hunt
// through JSX below). Each social entry is one row in the list under the headline.
// =============================================================================
const heroEyebrow = 'Computer Science / Software ENGINEERING'

/** Each string becomes one line of the big title (a line break is added between them). */
const heroHeadlineLines = ['BUILDING', 'DIGITAL', 'STRUCTURES.']

/** Photo on the right. `alt` is read by screen readers; keep it descriptive. */
const heroPortrait = {
  src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAM_4dePLdeToQWEIXBHjW5Zea6UMJIcYk66Wh2B6wY_Cl81adt9C2ptE0HL70UFWxJ0Qd3WtaBJfpEABFfSGPf3IMkwTkmMf83-vzxUb734HPPtZ4FA0jzngUsmtNyGstKT5wGyYLZZyquly-Njzt80hO-HHcK8_ixJtOE3Qyz5uH9kyC9DoyD1mvVQnZtYqPPZSaI3VmLewThiapacuWh3cxmkg-Sq6r7i97IDsXc4aSffwioj3YRkkk5DYP8RxXfkRPPuZ-Oetu',
  alt: 'Professional portrait',
}

/** Small text links under the headline (add/remove objects to change the row). */
const heroSocialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'GitHub', href: 'https://github.com' },
]

// =============================================================================
// Component — layout matches mockup1/landing-page.html (hero section)
// =============================================================================
export default function HeroSection() {
  return (
    <MainLayoutContainer className="pt-24 pb-32">
      {/*
        Two columns on large screens (text left, image right), one column on small screens.
        items-end lines up the bottom of the text block with the image like the mockup.
      */}
      <section className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
        {/* Left column: kicker, headline, social links */}
        <div className="lg:col-span-8">
          {/* Eyebrow = small label above the main title */}
          <p className="font-label mb-6 text-sm uppercase tracking-[0.2em] text-on-surface-variant">
            {heroEyebrow}
          </p>

          {/* Main headline — one <br /> between each line from heroHeadlineLines */}
          <h1 className="mb-8 text-6xl font-black text-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
            {heroHeadlineLines.map((line, index) => (
              <span key={`headline-${index}`}>
                {index > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h1>

          {/* Row of external links */}
          <div className="mt-12 flex gap-6">
            {heroSocialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-xs uppercase tracking-widest hover:underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right column: portrait image in a light gray frame */}
        <div className="bg-surface-container-low p-2 lg:col-span-4">
          <img
            src={heroPortrait.src}
            alt={heroPortrait.alt}
            className="aspect-square w-full object-cover grayscale contrast-125"
          />
        </div>
      </section>
    </MainLayoutContainer>
  )
}
