import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export default function SelectedWork() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="work" className="bg-paper-dim py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/65">
            These are demo websites built to show the kind of design and
            structure I can build for a real business — from a first draft
            through to a site that&rsquo;s ready to launch.
          </p>
        </div>

        <div
          ref={ref}
          className="reveal mt-12 grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
