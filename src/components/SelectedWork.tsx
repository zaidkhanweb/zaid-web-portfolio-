import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function SelectedWork() {
  return (
    <section id="work" className="bg-paper-dim py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/65">
            Demo websites built to show the kind of design and structure I
            can put together for a real business — from a first draft
            through to a site that&rsquo;s ready to launch.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {projects.map((project, i) => (
            <Reveal key={project.id} delayMs={i * 60}>
              <ProjectCard project={project} index={i + 1} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
