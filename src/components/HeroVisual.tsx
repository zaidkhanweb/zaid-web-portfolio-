import type { ReactNode } from "react";
import { BoltIcon, PhoneIcon, StorefrontIcon } from "./HeroIcons";

const steps = [
  { title: "Idea", text: "Understand the business", icon: <BulbIcon /> },
  { title: "Design", text: "Plan the website", icon: <PencilIcon /> },
  { title: "Build", text: "Build & optimize", icon: <CodeMark /> },
  { title: "Launch", text: "Ready to go live", icon: <RocketIcon /> },
];

export default function HeroVisual() {
  return (
    <div className="hero-rise relative mx-auto w-full max-w-[39rem] py-6 lg:py-0" style={{ animationDelay: "180ms" }}>
      <div className="mb-6 flex justify-center lg:justify-start lg:pl-16">
        <p className="hero-handwritten -rotate-3 text-center text-xl leading-tight text-[#0F2233] sm:text-2xl">A simple process.<br />Real results.</p>
        <svg className="ml-3 mt-5 hidden h-12 w-16 text-[#0F2233] sm:block" viewBox="0 0 70 48" fill="none"><path d="M3 7c25-4 46 8 55 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="m51 31 8 5 2-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>

      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-3">
        <svg className="pointer-events-none absolute left-[10%] top-[45%] hidden h-12 w-[80%] text-moss sm:block" viewBox="0 0 500 50" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M0 20 C45 2 75 42 120 22 S195 3 240 23 S315 42 360 22 S435 3 500 23" stroke="currentColor" strokeWidth="2" strokeDasharray="4 7" strokeLinecap="round"/></svg>
        {steps.map((step, i) => (
          <div key={step.title} className="relative z-10 flex min-h-[12.5rem] flex-col items-center rounded-2xl border border-ink-line/10 bg-paper-card/80 px-3 py-5 text-center shadow-card backdrop-blur-sm sm:min-h-[13rem]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-moss-light text-[#0F2233]">{step.icon}</div>
            <p className="mt-4 text-base font-semibold text-[#0F2233]">{i + 1}. {step.title}</p>
            <p className="mt-2 text-sm leading-snug text-ink/65">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-end gap-2 pr-2 text-[#0F2233]">
        <svg className="h-10 w-24 text-moss" viewBox="0 0 100 42" fill="none"><path d="M2 4c16 29 48 32 82 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="m78 22 8 6-8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span className="hero-handwritten -rotate-2 rounded-lg bg-moss-light px-3 py-1.5 text-lg">Website Live</span>
      </div>

      <div className="mt-7 grid gap-3 rounded-2xl border border-ink-line/10 bg-white/25 p-3 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-ink-line/10">
        <Feature icon={<PhoneIcon />} label="Mobile Friendly" />
        <Feature icon={<BoltIcon />} label="Fast Loading" />
        <Feature icon={<StorefrontIcon />} label="Business-focused" />
      </div>
    </div>
  );
}

function Feature({ icon, label }: { icon: ReactNode; label: string }) {
  return <div className="flex items-center justify-center gap-3 px-3 py-2"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-moss-light text-[#0F2233]">{icon}</span><span className="text-sm font-medium text-[#0F2233]">{label}</span></div>;
}

function BaseIcon({ children }: { children: ReactNode }) { return <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>; }
function BulbIcon() { return <BaseIcon><path d="M9 18h6M10 21h4"/><path d="M8.2 14.5C6.8 13.4 6 11.8 6 10a6 6 0 1 1 12 0c0 1.8-.8 3.4-2.2 4.5-.8.7-1.3 1.4-1.5 2.5H9.7c-.2-1.1-.7-1.8-1.5-2.5Z"/></BaseIcon>; }
function PencilIcon() { return <BaseIcon><path d="m4 20 4.2-1 10-10-3.2-3.2-10 10L4 20Z"/><path d="m13.8 7 3.2 3.2M14.8 4.8l1.4-1.4a1.5 1.5 0 0 1 2.1 0l2.3 2.3a1.5 1.5 0 0 1 0 2.1L19.2 9.2"/></BaseIcon>; }
function CodeMark() { return <BaseIcon><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></BaseIcon>; }
function RocketIcon() { return <BaseIcon><path d="M14 5c2.5-2.5 5.8-2 5.8-2s.5 3.3-2 5.8l-5.3 5.3-3.3-3.3L14 5Z"/><path d="M9.5 7.8 6 7l-3 3 5.2 1.3M16.2 14.5 17 18l-3 3-1.3-5.2M7.5 16.5 4 20l4.8-1.3"/><circle cx="16" cy="7" r="1.2"/></BaseIcon>; }
