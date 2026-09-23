import { useState } from 'react'
import { FaCode, FaJava } from 'react-icons/fa'
import {
  SiAngular,
  SiArduino,
  SiCplusplus,
  SiSharp,
  SiDotnet,
  SiFigma,
  SiGit,
  SiGitea,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiNpm,
  SiPrettier,
  SiPrezi,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si'
import { MainLayoutContainer } from '../../MainLayout.jsx'

// =============================================================================
// Skills section — edit the title, subtitle, and skill list below.
// =============================================================================

const skillsSectionTitle = 'MY STACK'
const skillsSectionSubtitle = '02 / TECHNICAL DATA'

const skills = [
  { label: 'C#', Icon: SiSharp },
  { label: 'C++', Icon: SiCplusplus },
  { label: 'HTML5', Icon: SiHtml5 },
  { label: 'JAVA', Icon: FaJava },
  { label: 'JAVASCRIPT', Icon: SiJavascript },
  { label: 'POWERSHELL', Icon: FaCode },
  { label: 'PYTHON', Icon: SiPython },
  { label: 'TYPESCRIPT', Icon: SiTypescript },
  { label: 'WINDOWS TERMINAL', Icon: FaCode },
  { label: 'NETLIFY', Icon: SiNetlify },
  { label: 'VERCEL', Icon: SiVercel },
  { label: '.NET', Icon: SiDotnet },
  { label: 'ANGULAR', Icon: SiAngular },
  { label: 'JAVAFX', Icon: FaCode },
  { label: 'NPM', Icon: SiNpm },
  { label: 'NODEJS', Icon: SiNodedotjs },
  { label: 'REACT', Icon: SiReact },
  { label: 'REACT NATIVE', Icon: SiReact },
  { label: 'TAILWINDCSS', Icon: SiTailwindcss },
  { label: 'VITE', Icon: SiVite },
  { label: 'MYSQL', Icon: SiMysql },
  { label: 'FIGMA', Icon: SiFigma },
  { label: 'GIT', Icon: SiGit },
  { label: 'GITEA', Icon: SiGitea },
  { label: 'GITHUB', Icon: SiGithub },
  { label: 'ARDUINO', Icon: SiArduino },
  { label: 'PRETTIER', Icon: SiPrettier },
  { label: 'PREZI', Icon: SiPrezi },
]

// Skill cards — used by both mobile grid and desktop grid.
// group + group-hover + group-active make the icon & label react to the card's state.
const skillCardClass =
  'group flex h-32 w-32 flex-none flex-col items-center justify-center bg-gray-900 transition-colors duration-300 hover:bg-accent active:bg-accent md:h-40 md:w-40'

const skillIconClass =
  'mb-2 text-4xl text-white transition-colors group-hover:text-white group-active:text-white'

const skillLabelClass =
  'font-label text-[10px] tracking-widest text-white transition-colors group-hover:text-white group-active:text-white'

/**
 * Mobile-only: 2×2 grid with explicit prev/next arrow buttons.
 * No auto-play, no side-scrolling — page stays stationary.
 * Each "page" shows 4 skills, arranged 2 across and 2 down.
 */
function SkillsGridMobile({ items }) {
  const PER_PAGE = 4
  const totalPages = Math.ceil(items.length / PER_PAGE)
  const [page, setPage] = useState(0)

  const start = page * PER_PAGE
  const visible = items.slice(start, start + PER_PAGE)

  const goPrev = () => setPage((p) => Math.max(0, p - 1))
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1))

  const arrowClass =
    'border-2 border-accent px-5 py-3 text-lg font-bold text-accent transition-colors hover:bg-accent hover:text-white active:bg-accent active:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-accent'

  return (
    <div className="md:hidden">
      {/* 2×2 grid — centered, fixed width so it doesn't stretch weirdly */}
      <div className="mx-auto grid w-fit grid-cols-2 gap-4">
        {visible.map(({ label, Icon }) => (
          <div key={label} className={skillCardClass}>
            <Icon className={skillIconClass} aria-hidden />
            <span className={skillLabelClass}>{label}</span>
          </div>
        ))}
      </div>

      {/* Arrows + page indicator */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={goPrev}
          disabled={page === 0}
          aria-label="Previous skills"
          className={arrowClass}
        >
          ←
        </button>

        <span className="font-label text-xs uppercase tracking-widest text-accent">
          {page + 1} / {totalPages}
        </span>

        <button
          type="button"
          onClick={goNext}
          disabled={page === totalPages - 1}
          aria-label="Next skills"
          className={arrowClass}
        >
          →
        </button>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="mystack" className="py-32">
      <MainLayoutContainer>
        {/* Header — stacked on mobile, side-by-side on desktop */}
        <div className="mb-24 flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between md:gap-0">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-white">
            {skillsSectionTitle}
          </h2>
          <span className="font-label text-xs uppercase tracking-widest text-accent">
            {skillsSectionSubtitle}
          </span>
        </div>

        {/* Mobile: 2×2 grid with arrows */}
        <SkillsGridMobile items={skills} />

        {/* Desktop: full responsive grid */}
        <div
          className="hidden flex-wrap gap-4 md:flex"
          role="list"
          aria-label="Tech stack"
        >
          {skills.map(({ label, Icon }) => (
            <div key={label} className={skillCardClass} role="listitem">
              <Icon className={skillIconClass} aria-hidden />
              <span className={skillLabelClass}>{label}</span>
            </div>
          ))}
        </div>
      </MainLayoutContainer>
    </section>
  )
}