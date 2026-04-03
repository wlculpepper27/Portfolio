import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

/**
 * One project tile (matches mockup projects grid).
 * Pass a single object from projects.json. Optional fields use ?. so missing keys are safe.
 *
 * Expected shape (all optional except title + description + technologies for a minimal card):
 * - title, description, technologies[]
 * - thumbnail, badge, github, demo_link — optional
 */
export default function ProjectCard({ project }) {
  const title = project?.title ?? 'Untitled project'
  const description = project?.description ?? ''
  const tech = project?.technologies

  return (
    <article className="group flex flex-col">
      {/* Thumbnail + optional status badge */}
      <div className="relative mb-8 aspect-video overflow-hidden bg-gray-900">
        {project?.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={title}
            className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gray-800 font-label text-xs uppercase tracking-widest text-gray-500"
            aria-hidden
          >
            No image
          </div>
        )}
        {project?.badge ? (
          <div className="absolute top-4 right-4">
            <span className="bg-white px-3 py-1 font-label text-[10px] tracking-widest text-black">
              {project.badge}
            </span>
          </div>
        ) : null}
      </div>

      {/* Title + icon links (only if URLs exist) */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-3xl font-bold tracking-tighter uppercase">{title}</h3>
        <div className="flex shrink-0 gap-4">
          {project?.demo_link ? (
            <a
              href={project.demo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-gray-400"
              aria-label={`Live demo or video for ${title}`}
            >
              <FaExternalLinkAlt className="h-5 w-5" aria-hidden />
            </a>
          ) : null}
          {project?.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-gray-400"
              aria-label={`GitHub repository for ${title}`}
            >
              <FaGithub className="h-5 w-5" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>

      <p className="mb-8 max-w-md text-gray-400">{description}</p>

      {/* Tech tags */}
      {tech?.length ? (
        <div className="flex flex-wrap gap-2">
          {tech.map((tag) => (
            <span
              key={tag}
              className="border border-gray-800 px-3 py-1 font-label text-[10px] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  )
}
