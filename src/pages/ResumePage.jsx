// Put your resume PDF at public/resume/Weston_Culpepper_Resume.pdf — anything
// dropped in /public is served as-is, so this path just needs to match the filename.
const RESUME_PDF_URL = `${import.meta.env.BASE_URL}resume/Weston_Culpepper_Resume.pdf`

export default function ResumePage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      {/* Slim header with title + download button */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-b border-gray-200 px-8 py-4 dark:border-gray-800">
        <h1 className="text-2xl font-black uppercase tracking-tighter text-black dark:text-white">
          Resume
        </h1>

        <a
          href={RESUME_PDF_URL}
          download
          className="border-2 border-black px-4 py-1 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Download PDF
        </a>
      </div>

      {/* Full-height PDF viewer — fills remaining space */}
      <iframe
        src={RESUME_PDF_URL}
        title="Resume"
        className="w-full flex-1 border-0"
      />
    </div>
  )
}