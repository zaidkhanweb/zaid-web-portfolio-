import { SITE_LOCATION } from "../config/site";

export default function About() {
  return (
    <section id="about" className="bg-paper py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          About me
        </h2>

        <div className="space-y-5 text-lg leading-relaxed text-ink/70">
          <p>
            Hi, I&rsquo;m Zaid. I build modern websites for businesses that
            want a stronger online presence and an easier way for customers
            to reach them.
          </p>
          <p>
            I&rsquo;m based in {SITE_LOCATION}, and I work with local and
            international business owners who want a site that&rsquo;s
            straightforward, fast, and easy to keep up to date.
          </p>
          <p>
            The demo projects above show the range of businesses I design
            for — from service businesses to restaurants and clinics. Each
            real project starts with a conversation about what your business
            actually needs.
          </p>
        </div>
      </div>
    </section>
  );
}
