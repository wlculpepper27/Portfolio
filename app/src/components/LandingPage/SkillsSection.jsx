import { useEffect, useRef, useState } from 'react'
import { FaAws } from 'react-icons/fa'
import {
  SiDocker,
  SiGraphql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { MainLayoutContainer } from '../../MainLayout.jsx'

// =============================================================================
// Skills section — edit the title, subtitle, and skill list below.
// Each skill is one card: `label` is the text under the icon, `Icon` is from react-icons.
// =============================================================================

const skillsSectionTitle = 'MY STACK'
const skillsSectionSubtitle = '02 / TECHNICAL DATA'

const skills = [
  { label: 'TYPESCRIPT', Icon: SiTypescript },
  { label: 'REACT', Icon: SiReact },
  { label: 'POSTGRES', Icon: SiPostgresql },
  { label: 'AWS INFRA', Icon: FaAws },
  { label: 'NODE.JS', Icon: SiNodedotjs },
  { label: 'DOCKER', Icon: SiDocker },
  { label: 'GRAPHQL', Icon: SiGraphql },
]

/** One “step” = card width (w-32) + gap (gap-4) — must match Tailwind classes on the card row */
const SLIDE_STEP_REM = 9

const skillCardClass =
  'group flex h-32 w-32 flex-none flex-col items-center justify-center bg-surface-container-low transition-colors duration-300 hover:bg-black md:h-40 md:w-40'

const skillIconClass =
  'mb-2 text-4xl text-black transition-colors group-hover:text-white dark:text-white'

const skillLabelClass =
  'font-label text-[10px] tracking-widest text-black transition-colors group-hover:text-white dark:text-white'

/** Mobile-only: auto-playing carousel with smooth slide + dot controls */
function SkillsCarouselMobile({ items }) {
  const [index, setIndex] = useState(0)
  // 1 = move right (show next card), -1 = move left — ping-pong avoids a weird long rewind from last → first
  const directionRef = useRef(1)

  // Auto-advance every 3s (only while this component is mounted = mobile layout)
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
      {/* Hides overflow so only the viewport shows; the row slides underneath */}
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

      {/* Dots: which slide is active + tap to jump */}
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
            className={`h-2 w-2 border border-black transition-colors dark:border-white ${
              i === index ? 'bg-black dark:bg-white' : 'bg-transparent'
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

// =============================================================================
export default function SkillsSection() {
  return (
    <section id="skills" className="py-32">
      <MainLayoutContainer>
        <div className="mb-24 flex items-baseline justify-between">
          <h2 className="text-5xl font-black uppercase tracking-tighter text-black dark:text-white">
            {skillsSectionTitle}
          </h2>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            {skillsSectionSubtitle}
          </span>
        </div>

        <SkillsCarouselMobile items={skills} />

        {/* Desktop: static grid — same cards, no carousel */}
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
