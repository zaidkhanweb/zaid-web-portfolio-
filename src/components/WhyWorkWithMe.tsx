type Reason = {
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    title: "Mobile friendly",
    description: "Designed for the phone screen first, since that's where most of your customers will look.",
  },
  {
    title: "Clean & modern design",
    description: "A layout that looks current and puts your business front and center, without clutter.",
  },
  {
    title: "Easy customer contact",
    description: "WhatsApp, call, and enquiry options placed where visitors will actually see them.",
  },
  {
    title: "Fast & lightweight",
    description: "Pages that load quickly, so visitors don't leave before they've seen what you offer.",
  },
  {
    title: "Built around the business",
    description: "The structure and content are shaped around what your business needs to show, not a generic template.",
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
              className="flex flex-col gap-2 py-7 md:flex-row md:items-baseline md:gap-10"
            >
              <h3 className="font-display text-2xl shrink-0 md:w-72">
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
