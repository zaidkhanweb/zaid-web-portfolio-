import { SITE_LOCATION } from "../config/site";

export default function About() {
  return (
    <section id="about" className="bg-paper-dim py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            About me
          </h2>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink-line/25 bg-paper-card px-3.5 py-1.5 text-xs font-medium text-ink/60">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            {SITE_LOCATION}
          </span>
        </div>

        <div className="space-y-5 border-l border-ink-line/20 pl-6 text-lg leading-relaxed text-ink/70 md:pl-8">
          <p>
            Hi, I&rsquo;m Zaid. I build modern websites for businesses that
            want a stronger online presence and an easier way for customers
            to reach them.
          </p>
          <p>
            I work with local and international business owners who want a
            site that&rsquo;s straightforward, fast, and easy to keep up to
            date.
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
