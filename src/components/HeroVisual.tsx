import type { ReactNode } from "react";
import {
  BoltIcon,
  CodeIcon,
  CursorIcon,
  DevicesIcon,
  StorefrontIcon,
} from "./HeroIcons";

/**
 * A small, abstract "web design workspace": a wireframe browser window on a
 * dotted design canvas, with a mobile preview, a type/colour chip and a few
 * labels. Everything is plain HTML/CSS (no images), and it is deliberately
 * not a screenshot of any real project.
 */

const DOT_GRID = {
  backgroundImage:
    "radial-gradient(rgba(20, 24, 31, 0.14) 1px, transparent 1.3px)",
  backgroundSize: "18px 18px",
};

const RULER_TICKS = {
  backgroundImage:
    "repeating-linear-gradient(90deg, rgba(20, 24, 31, 0.2) 0 1px, transparent 1px 12px)",
};

export default function HeroVisual() {
  return (
    <div
      className="hero-rise mx-auto w-full max-w-[30rem] sm:max-w-[34rem] lg:max-w-none"
      style={{ animationDelay: "200ms" }}
      aria-hidden="true"
    >
      <div className="relative aspect-[10/11] sm:aspect-[6/5] lg:aspect-[9/10]">
        {/* Design canvas: dotted grid with a ruler strip along the top */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-ink-line/15 bg-paper-card/60"
          style={DOT_GRID}
        >
          <div
            className="absolute inset-x-0 top-0 h-2 border-b border-ink-line/10 bg-paper-card/70"
            style={RULER_TICKS}
          />
        </div>

        {/* Wireframe browser window */}
        <div className="absolute left-[5%] top-[16%] w-[84%] sm:top-[11%]">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-moss-light sm:translate-x-4 sm:translate-y-4" />
          <div className="relative overflow-hidden rounded-xl border border-ink-line/25 bg-paper-card shadow-frame">
            <div className="flex items-center gap-1.5 border-b border-ink-line/15 px-3.5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="ml-3 h-4 flex-1 rounded-full bg-paper-dim" />
            </div>

            <div className="space-y-4 px-3.5 pb-5 pt-3.5 sm:p-4">
              {/* Site nav */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded bg-moss" />
                  <span className="h-1.5 w-10 rounded-full bg-ink/70" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden h-1.5 w-7 rounded-full bg-ink/15 sm:block" />
                  <span className="hidden h-1.5 w-7 rounded-full bg-ink/15 sm:block" />
                  <span className="h-1.5 w-7 rounded-full bg-ink/15" />
                  <span className="ml-1 h-4 w-10 rounded bg-ink" />
                </div>
              </div>

              {/* Site hero: heading, copy, button + image placeholder */}
              <div className="grid grid-cols-5 items-center gap-4">
                <div className="relative col-span-3 space-y-2.5 py-1.5">
                  {/* Selection outline with corner handles */}
                  <div className="pointer-events-none absolute -inset-2 rounded-sm border border-moss">
                    <Handle className="-left-[3px] -top-[3px]" />
                    <Handle className="-right-[3px] -top-[3px]" />
                    <Handle className="-bottom-[3px] -left-[3px]" />
                    <Handle className="-bottom-[3px] -right-[3px]" />
                  </div>
                  <span className="block h-3 w-full rounded-sm bg-ink" />
                  <span className="block h-3 w-3/4 rounded-sm bg-ink" />
                  <span className="mt-3.5 block h-1.5 w-full rounded-full bg-ink/15" />
                  <span className="block h-1.5 w-5/6 rounded-full bg-ink/15" />
                  <div className="relative pt-1.5">
                    <span className="block h-5 w-16 rounded bg-moss" />
                    <div className="hero-cursor absolute left-11 top-4">
                      <CursorIcon />
                    </div>
                  </div>
                </div>

                <div className="relative col-span-2 aspect-square overflow-hidden rounded-md bg-moss-light">
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full text-moss/25"
                  >
                    <path
                      d="M0 0 100 100M100 0 0 100"
                      stroke="currentColor"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              </div>

              {/* Card row (hidden on small screens to keep the visual simple) */}
              <div className="hidden grid-cols-3 gap-2.5 sm:grid">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-md border border-ink-line/15 p-2"
                  >
                    <span className="block h-7 rounded bg-paper-dim" />
                    <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-ink/20" />
                    <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-ink/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile preview */}
        <div className="absolute bottom-[6%] right-[4%] hidden w-[23%] sm:block">
          <div className="hero-float" style={{ animationDelay: "-2s" }}>
            <div className="aspect-[9/18] rounded-[1.25rem] border-2 border-ink bg-paper-card p-2 shadow-lift">
              <div className="flex h-full flex-col gap-2">
                <span className="mx-auto h-1 w-6 rounded-full bg-ink/25" />
                <span className="h-3 rounded-sm bg-ink" />
                <span className="h-1.5 w-2/3 rounded-full bg-ink/15" />
                <span className="flex-1 rounded bg-moss-light" />
                <span className="h-4 rounded bg-moss" />
                <span className="h-1.5 rounded-full bg-ink/15" />
                <span className="h-1.5 w-3/4 rounded-full bg-ink/15" />
              </div>
            </div>
          </div>
        </div>

        {/* Type + colour chip */}
        <div className="absolute bottom-[19%] left-[1.5%] hidden -rotate-2 sm:block">
          <div className="flex items-center gap-3 rounded-xl border border-ink-line/15 bg-paper-card py-2 pl-3.5 pr-3 shadow-card">
            <span className="font-display text-2xl leading-none text-ink">
              Aa
            </span>
            <span className="flex items-center gap-1">
              <span className="h-3.5 w-3.5 rounded-full bg-ink" />
              <span className="h-3.5 w-3.5 rounded-full bg-moss" />
              <span className="h-3.5 w-3.5 rounded-full border border-ink-line/25 bg-paper" />
            </span>
          </div>
        </div>

        {/* Labels */}
        <Chip
          icon={<DevicesIcon size={15} />}
          label="Responsive"
          className="left-[3%] top-[4.5%]"
        />
        <Chip
          icon={<BoltIcon size={15} />}
          label="Fast"
          className="bottom-[4%] right-[4%] sm:bottom-auto sm:right-auto sm:left-[44%] sm:top-[3.5%]"
          float
        />
        <Chip
          icon={<StorefrontIcon size={15} />}
          label="Business-focused"
          className="bottom-[4%] left-[3%] sm:bottom-[6%] sm:left-[5%]"
        />

        {/* Code badge */}
        <div className="absolute right-[3.5%] top-[3%] flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-paper shadow-card">
          <CodeIcon size={16} />
        </div>
      </div>
    </div>
  );
}

function Chip({
  icon,
  label,
  className,
  float = false,
}: {
  icon: ReactNode;
  label: string;
  className: string;
  float?: boolean;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className={float ? "hero-float" : undefined}>
        <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-ink-line/15 bg-paper-card py-1.5 pl-2.5 pr-3.5 text-[13px] font-medium text-ink shadow-card">
          <span className="text-moss">{icon}</span>
          {label}
        </div>
      </div>
    </div>
  );
}

function Handle({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-1.5 w-1.5 border border-moss bg-paper-card ${className}`}
    />
  );
}
