import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  /** Puts the image on the right instead of the left at desktop width. */
  reverse?: boolean;
  /** Position in the list, shown as a small editorial index (e.g. 01). */
  index: number;
};

export default function ProjectCard({ project, reverse = false, index }: ProjectCardProps) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
      <div
        className={`group relative overflow-hidden rounded-xl border border-ink-line/15 bg-paper-card shadow-card transition-shadow duration-300 ease-out-soft hover:shadow-lift md:col-span-7 ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <img
          src={project.image}
          alt={`Preview of the ${project.title} ${project.category.toLowerCase()} demo website`}
          className="aspect-[8/5] w-full object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.02]"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-paper backdrop-blur-sm">
          {project.status}
        </span>
      </div>

      <div className={`md:col-span-5 ${reverse ? "md:order-1" : "md:order-2"}`}>
        <span className="font-display text-sm text-ink/30">
          {String(index).padStart(2, "0")}
        </span>
        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink/45">
          {project.category}
        </p>
        <h3 className="mt-1.5 font-display text-2xl text-ink sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink/65">
          {project.description}
        </p>

        <a
          href={project.url}
          target={project.url === "#" ? undefined : "_blank"}
          rel={project.url === "#" ? undefined : "noreferrer"}
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-moss-deep transition-colors hover:text-moss"
        >
          View Live Site
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </article>
  );
}
