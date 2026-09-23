import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

/** Add correct URL to your socials */
const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/weston-culpepper/',
    icon: FaLinkedin,
    emphasized: true,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/wlculpepper27/',
    icon: FaInstagram,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/wlculpepper27',
    icon: FaGithub,
  },
]

const linkBaseClass =
  'font-["Space_Grotesk"] inline-flex items-center gap-2 text-xs tracking-widest uppercase hover:underline decoration-1 underline-offset-4 transition-opacity opacity-100 hover:opacity-80'

export default function Footer() {
  return (
    <footer className="mt-32 flex w-full shrink-0 flex-col items-center justify-between gap-8 bg-gray-950 px-8 py-12 md:flex-row md:gap-0">
      <div className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-white">
  © Weston Culpepper
</div>

      <nav aria-label="Social links" className="flex gap-12">
        {socialLinks.map(({ name, href, icon: Icon, emphasized }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBaseClass} ${
  emphasized
    ? 'font-bold text-white'
    : 'font-normal text-white'
}`}
          >
            <Icon className="size-3.5 shrink-0" aria-hidden />
            <span>{name}</span>
          </a>
        ))}
      </nav>
    </footer>
  )
}