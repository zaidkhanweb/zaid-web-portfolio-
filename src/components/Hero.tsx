import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="text-sm font-medium text-moss-deep">
            Web design for small &amp; local businesses
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
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
              className="rounded-md bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
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
