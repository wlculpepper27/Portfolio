<footer className="mt-32 flex w-full shrink-0 flex-col items-center justify-between gap-8 bg-gray-950 px-8 py-12 md:flex-row md:gap-0">
  <div className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-gray-400">
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
            : 'font-normal text-gray-400'
        }`}
      >
        <Icon className="size-3.5 shrink-0" aria-hidden />
        <span>{name}</span>
      </a>
    ))}
  </nav>
</footer>