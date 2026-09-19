import { useEffect } from "react";
import { EMAIL_ADDRESS, EMAIL_LINK, WHATSAPP_LINK, WHATSAPP_NUMBER } from "../config/site";

export default function FinalCTA() {
  useEffect(() => {
    if (import.meta.env.DEV) {
      if (WHATSAPP_NUMBER === "ADD_WHATSAPP_NUMBER") {
        console.warn("[site.ts] WHATSAPP_NUMBER is still a placeholder.");
      }
      if (EMAIL_ADDRESS === "ADD_EMAIL_ADDRESS") {
        console.warn("[site.ts] EMAIL_ADDRESS is still a placeholder.");
      }
    }
  }, []);

  return (
    <section id="contact" className="bg-moss-light py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Need a website for your business?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
          Tell me about your business and what you need. We can discuss the
          right website for you.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target={WHATSAPP_LINK === "#" ? undefined : "_blank"}
            rel={WHATSAPP_LINK === "#" ? undefined : "noreferrer"}
            className="inline-flex items-center gap-2 rounded-md bg-moss-deep px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-moss"
          >
            Chat on WhatsApp
          </a>
          <a
            href={EMAIL_LINK}
            className="inline-flex items-center gap-2 rounded-md border border-ink/20 bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
