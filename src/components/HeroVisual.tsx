import { projects } from "../data/projects";

/**
 * A layered stack of browser-style frames showing real project previews
 * (pulled straight from src/data/projects.ts, so swapping a project's
 * `image` there updates this automatically). The front frame is crisp
 * and full-size; the two behind it are smaller, dimmed, and offset to
 * suggest depth without heavy 3D effects.
 */
export default function HeroVisual() {
  const [front, back, tuck] = projects;

  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="relative aspect-[4/5]">
        {/* Third frame, tucked furthest back */}
        {tuck && (
          <div className="absolute right-2 top-0 w-[62%] -rotate-[6deg] overflow-hidden rounded-lg border border-ink-line/25 bg-paper-card opacity-70 shadow-card">
            <BrowserChrome compact />
            <img
              src={tuck.image}
              alt=""
              className="aspect-[8/5] w-full object-cover"
            />
          </div>
        )}

        {/* Second frame */}
        {back && (
          <div className="absolute left-0 top-6 w-[70%] rotate-[5deg] overflow-hidden rounded-lg border border-ink-line/30 bg-paper-card opacity-90 shadow-card">
            <BrowserChrome compact />
            <img
              src={back.image}
              alt=""
              className="aspect-[8/5] w-full object-cover"
            />
          </div>
        )}

        {/* Front frame — the focal point */}
        {front && (
          <div className="absolute bottom-0 right-0 w-[82%] -rotate-[2deg] overflow-hidden rounded-xl border border-ink-line/40 bg-paper-card shadow-frame">
            <BrowserChrome />
            <img
              src={front.image}
              alt={`Preview of the ${front.title} demo website`}
              className="aspect-[8/5] w-full object-cover"
            />
          </div>
        )}

        {/* Small label chip anchoring the stack to "Selected Work" */}
        <div className="absolute -left-2 -top-2 flex items-center gap-2 rounded-full border border-ink-line/20 bg-ink px-3.5 py-2 shadow-card sm:-left-4 sm:-top-3">
          <span className="h-1.5 w-1.5 rounded-full bg-moss" />
          <span className="text-xs font-medium text-paper/85">
            Demo previews
          </span>
        </div>
      </div>
    </div>
  );
}

function BrowserChrome({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex items-center gap-1.5 border-b border-ink-line/15 ${
        compact ? "px-3 py-2" : "px-4 py-2.5"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-ink/15" />
      <span className="h-2 w-2 rounded-full bg-ink/15" />
      <span className="h-2 w-2 rounded-full bg-ink/15" />
    </div>
  );
}
