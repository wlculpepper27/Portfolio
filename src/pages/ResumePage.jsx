const RESUME_PDF_URL = `${import.meta.env.BASE_URL}resume/Weston_Culpepper_Resume.pdf`

export default function ResumePage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-b border-gray-800 px-8 py-4">
        <h1 className="text-2xl font-black uppercase tracking-tighter text-white">
          Resume
        </h1>
        <a
          href={RESUME_PDF_URL}
          download
          className="border-2 border-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-white"
        >
          Download PDF
        </a>
      </div>

      {/* Mobile: friendly prompt instead of cramped iframe */}
      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 py-16 text-center md:hidden">
        <p className="max-w-xs text-sm text-gray-400">
          For the best experience on mobile, open or download the PDF.
        </p>
        <a
          href={RESUME_PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent px-8 py-3 font-bold uppercase tracking-widest text-white"
        >
          Open Resume
        </a>
        <a
          href={RESUME_PDF_URL}
          download
          className="border-2 border-accent px-8 py-3 font-bold uppercase tracking-widest text-accent"
        >
          Download PDF
        </a>
      </div>

      {/* Desktop: full-height iframe */}
      <iframe
        src={`${RESUME_PDF_URL}#view=FitH`}
        title="Resume"
        className="hidden w-full flex-1 border-0 md:block"
      />
    </div>
  )
}