import { MainLayoutContainer } from '../MainLayout.jsx'

// Put your resume PDF at app/public/resume/Weston_Culpepper_Resume.pdf — anything
// dropped in /public is served as-is, so this path just needs to match the filename.
const RESUME_PDF_URL = `${import.meta.env.BASE_URL}resume/Weston_Culpepper_Resume.pdf`

export default function ResumePage() {
  return (
    <MainLayoutContainer className="py-24">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="font-headline text-3xl font-black uppercase tracking-tighter text-black dark:text-white">
          Resume
        </h1>

        
          href={RESUME_PDF_URL}
          download
          className="border-2 border-black px-6 py-2 font-bold uppercase tracking-widest text-black transition-all hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Download PDF
        </a>
      </div>

      {/* <object> is used (not <iframe>) because it supports real fallback content
          for browsers/devices that can't render the embed. */}
      <object
        data={RESUME_PDF_URL}
        type="application/pdf"
        className="h-[85vh] w-full border border-gray-200 dark:border-gray-800"
      >
        <p className="p-8 text-sm text-on-surface-variant">
          Your browser can&apos;t display the PDF inline.{' '}
          <a href={RESUME_PDF_URL} download className="underline">
            Download it here
          </a>{' '}
          instead.
        </p>
      </object>
    </MainLayoutContainer>
  )
}