import { MainLayoutContainer } from '../../MainLayout.jsx'

const heroEyebrow = 'Computer Science / Software Engineering / Cyber Security'
const heroHeadlineLines = ['BUILDING', 'DIGITAL', 'STRUCTURES.']

const heroPortrait = {
  src: '/headshot.jpg',
  alt: 'Professional portrait',
}

const heroSocialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/weston-culpepper/' },
  { label: 'GitHub', href: 'https://github.com/wlculpepper27' },
  { label: 'Instagram', href: 'https://www.instagram.com/wlculpepper27/' },
]

export default function HeroSection() {
  return (
    <MainLayoutContainer className="pt-24 pb-32">
      <section className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="font-label mb-6 text-sm uppercase tracking-[0.2em] text-gray-400">
            {heroEyebrow}
          </p>

          <h1 className="mb-8 text-6xl font-black text-white uppercase leading-[0.9] tracking-tighter md:text-8xl">
            {heroHeadlineLines.map((line, index) => (
              <span key={`headline-${index}`}>
                {index > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-12 flex gap-6">
            {heroSocialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-xs uppercase tracking-widest text-white hover:underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-2 lg:col-span-4">
          <img
            src={heroPortrait.src}
            alt={heroPortrait.alt}
            className="aspect-square w-full object-cover"
          />
        </div>
      </section>
    </MainLayoutContainer>
  )
}