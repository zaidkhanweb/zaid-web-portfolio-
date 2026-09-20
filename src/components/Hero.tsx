import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-moss-light/70 blur-2xl" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-moss-light/75 blur-3xl" />
        <div className="absolute -bottom-40 left-[-5%] h-80 w-[48%] rounded-[50%] bg-moss-light/65 blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,253,249,0.96),rgba(246,242,234,0.35)_52%,rgba(228,238,233,0.55)_100%)]" />
        <div className="hero-dot-field absolute left-0 top-20 h-52 w-24 opacity-35" />
        <div className="hero-dot-field absolute bottom-0 right-0 h-44 w-32 opacity-30" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 sm:py-14 lg:min-h-[38rem] lg:grid-cols-12 lg:gap-x-10 lg:py-16">
        <div className="lg:col-span-6">
          <div className="hero-rise flex items-center gap-2.5">
            <span className="h-px w-8 bg-moss-deep" />
            <p className="text-sm font-medium tracking-wide text-moss-deep">Web design for small &amp; local businesses</p>
          </div>
          <h1 className="hero-rise mt-5 text-balance font-display text-[2.25rem] leading-[1.08] tracking-[-0.015em] text-ink min-[400px]:text-[2.5rem] sm:text-5xl lg:text-[3.15rem] xl:text-[3.45rem]" style={{ animationDelay: "80ms" }}>
            Modern websites built for <span className="text-[#0F2233]">local businesses</span>
          </h1>
          <p className="hero-rise mt-6 max-w-prose text-lg leading-relaxed text-ink/70" style={{ animationDelay: "160ms" }}>
            I build fast, mobile-friendly websites that help businesses look professional online and make it easier for customers to get in touch.
          </p>
          <div className="hero-rise mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "240ms" }}>
            <a href="#work" className="group inline-flex items-center gap-2 rounded-md bg-[#0F2233] px-6 py-3.5 text-sm font-medium text-white shadow-card transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:bg-[#162f45] hover:shadow-lift">
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href="#contact" className="rounded-md border border-[#0F2233]/20 bg-white/30 px-6 py-3.5 text-sm font-medium text-[#0F2233] transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:border-[#0F2233]/40 hover:bg-white/50">Let&rsquo;s Talk</a>
          </div>
        </div>

        <div className="lg:col-span-6"><HeroVisual /></div>
      </div>
    </section>
  );
}
