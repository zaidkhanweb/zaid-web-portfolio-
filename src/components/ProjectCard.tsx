import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-ink-line/15 bg-paper-card shadow-card">
      <div className="relative overflow-hidden border-b border-ink-line/10">
        <img
          src={project.image}
          alt={`Preview of the ${project.title} ${project.category.toLowerCase()} demo website`}
          className="aspect-[8/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-paper">
          {project.status}
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-ink/45">
          {project.category}
        </p>
        <h3 className="mt-1.5 font-display text-xl text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          {project.description}
        </p>

        <a
          href={project.url}
          target={project.url === "#" ? undefined : "_blank"}
          rel={project.url === "#" ? undefined : "noreferrer"}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-moss-deep transition-colors hover:text-moss"
        >
          View Live Site
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </article>
  );
}
