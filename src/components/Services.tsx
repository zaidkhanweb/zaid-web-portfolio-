type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Business websites",
    description:
      "A clear, well-organized site that explains what your business does and makes it easy to take the next step.",
  },
  {
    title: "Responsive design",
    description:
      "Built to look right on a phone, tablet, or desktop — since most visitors will find you on their phone first.",
  },
  {
    title: "WhatsApp & call integration",
    description:
      "Tap-to-chat and tap-to-call buttons, so customers can reach you the way they already prefer.",
  },
  {
    title: "Contact & enquiry forms",
    description:
      "A simple form for enquiries or bookings, so leads land in your inbox instead of getting lost.",
  },
  {
    title: "Basic on-page SEO",
    description:
      "Page titles, descriptions, and structure set up so your site can be found by the right searches.",
  },
  {
    title: "Website deployment",
    description:
      "Your site set up, connected to a domain, and published — ready for customers to visit.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Websites built around your business
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-ink/65">
              Everything below is explained the way I&rsquo;d explain it to
              you directly — no jargon, just what it does for your business.
            </p>
          </div>

          <div className="md:col-span-8">
            <ul className="border-t border-ink-line/20">
              {services.map((service, i) => (
                <li
                  key={service.title}
                  className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 border-b border-ink-line/20 py-6 transition-colors sm:grid-cols-[3rem_14rem_1fr] sm:gap-x-8"
                >
                  <span className="font-display text-sm text-ink/30 transition-colors group-hover:text-moss-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg text-ink">
                    {service.title}
                  </h3>
                  <p className="col-span-2 mt-1.5 text-sm leading-relaxed text-ink/65 sm:col-span-1 sm:mt-0">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
