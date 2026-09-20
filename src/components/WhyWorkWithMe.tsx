import type { ReactNode } from "react";

type Reason = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const reasons: Reason[] = [
  {
    title: "Mobile friendly",
    description:
      "Designed for the phone screen first, since that's where most of your customers will look.",
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "Clean & modern design",
    description:
      "A layout that looks current and puts your business front and center, without clutter.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2l9 5-9 5-9-5 9-5z" />
        <path d="M3 12l9 5 9-5" />
        <path d="M3 17l9 5 9-5" />
      </svg>
    ),
  },
  {
    title: "Easy customer contact",
    description:
      "WhatsApp, call, and enquiry options placed where visitors will actually see them.",
    icon: (
      <svg {...iconProps}>
        <path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1L21 3l-1 3.6a8.5 8.5 0 0 1 1 4.9z" />
      </svg>
    ),
  },
  {
    title: "Fast & lightweight",
    description:
      "Pages that load quickly, so visitors don't leave before they've seen what you offer.",
    icon: (
      <svg {...iconProps}>
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    title: "Built around the business",
    description:
      "The structure and content are shaped around what your business needs to show, not a generic template.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="bg-ink py-24 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl sm:text-4xl">
          What you can expect
        </h2>

        <ul className="mt-12 divide-y divide-paper/10 border-y border-paper/10">
          {reasons.map((reason) => (
            <li
              key={reason.title}
              className="group flex flex-col gap-3 py-7 transition-colors md:flex-row md:items-center md:gap-8"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors group-hover:border-moss group-hover:text-moss">
                {reason.icon}
              </span>
              <h3 className="font-display text-2xl shrink-0 md:w-64">
                {reason.title}
              </h3>
              <p className="max-w-lg text-paper/60 leading-relaxed">
                {reason.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
