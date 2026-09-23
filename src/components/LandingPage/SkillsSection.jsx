import { useEffect, useRef, useState } from 'react'
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

const SLIDE_STEP_REM = 9

const skillCardClass =
  'group flex h-32 w-32 flex-none flex-col items-center justify-center bg-gray-900 transition-colors duration-300 hover:bg-accent active:bg-accent md:h-40 md:w-40'

const skillIconClass =
  'mb-2 text-4xl text-white transition-colors group-hover:text-white group-active:text-white'

const skillLabelClass =
  'font-label text-[10px] tracking-widest text-white transition-colors group-hover:text-white group-active:text-white'

function SkillsCarouselMobile({ items }) {
  const [index, setIndex] = useState(0)
  const directionRef = useRef(1)

  useEffect(() => {
    if (items.length <= 1) return
    const timer = window.setInterval(() => {
      setIndex((prev) => {
        const next = prev + directionRef.current
        if (next >= items.length - 1) {
          directionRef.current = -1
          return items.length - 1
        }
        if (next <= 0) {
          directionRef.current = 1
          return 0
        }
        return next
      })
    }, 3000)
    return () => window.clearInterval(timer)
  }, [items.length])

  return (
    <div className="md:hidden">
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{
            transform: `translateX(calc(-${index} * ${SLIDE_STEP_REM}rem))`,
          }}
        >
          {items.map(({ label, Icon }) => (
            <div key={label} className={skillCardClass}>
              <Icon className={skillIconClass} aria-hidden />
              <span className={skillLabelClass}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-6 flex justify-center gap-2"
        role="tablist"
        aria-label="Skill slides"
      >
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show skill ${i + 1} of ${items.length}`}
            className={`h-2 w-2 border border-accent transition-colors ${
              i === index ? 'bg-accent' : 'bg-transparent'
            }`}
            onClick={() => {
              setIndex(i)
              if (i === items.length - 1) directionRef.current = -1
              else if (i === 0) directionRef.current = 1
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32">
      <MainLayoutContainer>
        <div className="mb-24 flex items-baseline justify-between">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-white">
            {skillsSectionTitle}
          </h2>
          <span className="font-label text-xs uppercase tracking-widest text-accent">
  {skillsSectionSubtitle}
</span>
        </div>

        <SkillsCarouselMobile items={skills} />

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