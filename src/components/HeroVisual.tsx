export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-md aspect-[4/5] select-none"
      aria-hidden="true"
    >
      {/* Back window — real-estate style listing card */}
      <div className="absolute right-0 top-4 w-[78%] rotate-[4deg] rounded-xl border border-ink-line/40 bg-paper-card shadow-card">
        <div className="flex items-center gap-1.5 border-b border-ink-line/20 px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
        </div>
        <div className="space-y-3 p-5">
          <div className="h-24 rounded-md bg-moss-light" />
          <div className="h-2.5 w-3/4 rounded-full bg-ink/10" />
          <div className="h-2.5 w-1/2 rounded-full bg-ink/10" />
        </div>
      </div>

      {/* Front window — restaurant/menu style card */}
      <div className="absolute left-0 bottom-6 w-[72%] -rotate-[3deg] rounded-xl border border-ink-line/40 bg-ink shadow-card">
        <div className="flex items-center gap-1.5 border-b border-paper/10 px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-paper/25" />
          <span className="h-2 w-2 rounded-full bg-paper/25" />
          <span className="h-2 w-2 rounded-full bg-paper/25" />
        </div>
        <div className="space-y-3 p-5">
          <div className="h-2.5 w-2/3 rounded-full bg-paper/40" />
          <div className="h-2.5 w-5/6 rounded-full bg-paper/20" />
          <div className="h-2.5 w-1/2 rounded-full bg-paper/20" />
          <div className="mt-4 h-9 w-28 rounded-md bg-moss" />
        </div>
      </div>

      {/* Floating accent chip */}
      <div className="absolute -left-3 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-moss shadow-card">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F6F2EA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16v12H7l-3 3V4z" />
        </svg>
      </div>
    </div>
  );
}
