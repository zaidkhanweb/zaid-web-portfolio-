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
        <h2 className="max-w-xl font-display text-3xl text-ink sm:text-4xl">
          Websites built around your business
        </h2>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="border-t border-ink-line/20 pt-5">
              <h3 className="font-display text-lg text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
