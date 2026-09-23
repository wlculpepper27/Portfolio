import { useEffect, useState } from 'react'
import { MainLayoutContainer } from '../../MainLayout.jsx'
import ProjectCard from './ProjectCard.jsx'

const PROJECTS_JSON_URL = `${import.meta.env.BASE_URL}projects/projects.json`

const sectionTitle = 'PROJECTS'
const sectionSubtitle = '03 / IMPLEMENTATIONS'

export default function ProjectsSection() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const response = await fetch(PROJECTS_JSON_URL)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = await response.json()
        if (!cancelled) {
          const list = Array.isArray(data) ? data : data?.projects ?? []
          setProjects(Array.isArray(list) ? list : [])
          setError(null)
        }
      } catch (e) {
        if (!cancelled) setError(e?.message ?? 'Failed to load projects')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="projects" className="bg-black py-32 text-white">
      <MainLayoutContainer>
        <div className="mb-24 flex items-baseline justify-between">
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            {sectionTitle}
          </h2>
          <span className="font-label text-xs uppercase tracking-widest text-accent">
  {sectionSubtitle}
</span>
        </div>

        {loading ? (
          <p className="text-gray-400">Loading projects…</p>
        ) : error ? (
          <p className="text-red-400" role="alert">
            {error}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project?.id ?? project?.title} project={project} />
            ))}
          </div>
        )}

        <div className="mt-32 flex justify-center border-t border-gray-800 pt-16">
          <a
            href="https://github.com/wlculpepper27"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-accent px-12 py-4 font-bold uppercase tracking-widest text-accent transition-all hover:bg-accent hover:text-white"
          >
            VIEW ALL REPOSITORIES
          </a>
        </div>
      </MainLayoutContainer>
    </section>
  )
}