import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-px w-8 bg-moss-deep" />
            <p className="text-sm font-medium tracking-wide text-moss-deep">
              Web design for small &amp; local businesses
            </p>
          </div>
          <h1 className="mt-5 font-display text-[2.5rem] leading-[1.08] text-ink sm:text-5xl md:text-[3.25rem]">
            Modern websites built for local businesses
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/70">
            I build fast, mobile-friendly websites that help businesses look
            professional online and make it easier for customers to get in
            touch.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-sm font-medium text-paper shadow-card transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:bg-ink-soft hover:shadow-lift"
            >
              View My Work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="rounded-md border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:border-ink/40"
            >
              Let&rsquo;s Talk
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
