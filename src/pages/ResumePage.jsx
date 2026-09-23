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
          className="border-2 border-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
        >
          Download PDF
        </a>
      </div>

      <iframe
        src={RESUME_PDF_URL}
        title="Resume"
        className="w-full flex-1 border-0"
      />
    </div>
  )
}