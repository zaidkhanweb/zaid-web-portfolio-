import type { ReactNode } from "react";
import HeroVisual from "./HeroVisual";
import { BoltIcon, PhoneIcon, StorefrontIcon } from "./HeroIcons";

const QUALITIES: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <BoltIcon />,
    title: "Fast & Modern",
    text: "Clean, lightweight pages that load quickly.",
  },
  {
    icon: <PhoneIcon />,
    title: "Mobile Friendly",
    text: "Easy to use on phones, tablets and desktops.",
  },
  {
    icon: <StorefrontIcon />,
    title: "Built for Local Businesses",
    text: "Clear info and an easy way to get in touch.",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-paper">
      {/* Background depth: soft highlight, faint moss glow, fading dot texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(44rem 24rem at 78% 55%, rgba(255, 253, 249, 0.9), rgba(255, 253, 249, 0) 70%), radial-gradient(30rem 24rem at 100% 100%, rgba(47, 107, 87, 0.08), rgba(47, 107, 87, 0) 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(20, 24, 31, 0.1) 1px, transparent 1.2px)",
            backgroundSize: "22px 22px",
            WebkitMaskImage:
              "radial-gradient(40rem 30rem at 78% 45%, #000 0%, transparent 75%)",
            maskImage:
              "radial-gradient(40rem 30rem at 78% 45%, #000 0%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 sm:py-14 lg:min-h-[38rem] lg:grid-cols-12 lg:gap-x-10 lg:py-16">
        <div className="lg:col-span-7">
          <div className="hero-rise flex items-center gap-2.5">
            <span className="h-px w-8 bg-moss-deep" />
            <p className="text-sm font-medium tracking-wide text-moss-deep">
              Web design for small &amp; local businesses
            </p>
          </div>
          <h1
            className="hero-rise mt-5 text-balance font-display text-[2.25rem] leading-[1.08] tracking-[-0.015em] text-ink min-[400px]:text-[2.5rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
            style={{ animationDelay: "80ms" }}
          >
            Modern websites built for local businesses
          </h1>
          <p
            className="hero-rise mt-6 max-w-prose text-lg leading-relaxed text-ink/70"
            style={{ animationDelay: "160ms" }}
          >
            I build fast, mobile-friendly websites that help businesses look
            professional online and make it easier for customers to get in
            touch.
          </p>
          <div
            className="hero-rise mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
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

          <ul
            className="hero-rise mt-10 grid gap-5 border-t border-ink-line/15 pt-6 sm:grid-cols-3 sm:gap-6"
            style={{ animationDelay: "320ms" }}
          >
            {QUALITIES.map((q) => (
              <li key={q.title} className="flex gap-3.5 sm:block">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-moss-light text-moss-deep">
                  {q.icon}
                </span>
                <div className="sm:mt-3">
                  <p className="text-sm font-medium text-ink">{q.title}</p>
                  <p className="mt-0.5 text-sm leading-snug text-ink/60">
                    {q.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
