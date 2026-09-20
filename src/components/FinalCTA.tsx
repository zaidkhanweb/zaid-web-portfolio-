import { useEffect } from "react";
import {
  EMAIL_LINK,
  EMAIL_READY,
  WHATSAPP_LINK,
  WHATSAPP_READY,
} from "../config/site";

export default function FinalCTA() {
  useEffect(() => {
    if (import.meta.env.DEV) {
      if (!WHATSAPP_READY) {
        console.warn("[site.ts] WHATSAPP_NUMBER is still a placeholder.");
      }
      if (!EMAIL_READY) {
        console.warn("[site.ts] EMAIL_ADDRESS is still a placeholder.");
      }
    }
  }, []);

  return (
    <section id="contact" className="bg-ink py-24 text-paper">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl sm:text-4xl">
          Need a website for your business?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-paper/65">
          Tell me about your business and what you need. We can discuss the
          right website for you.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          {WHATSAPP_READY ? (
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-moss px-6 py-3.5 text-sm font-medium text-paper transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:bg-moss-deep hover:shadow-lift"
            >
              Chat on WhatsApp
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-md bg-paper/10 px-6 py-3.5 text-sm font-medium text-paper/40"
            >
              Chat on WhatsApp
            </span>
          )}

          {EMAIL_READY ? (
            <a
              href={EMAIL_LINK}
              className="inline-flex items-center gap-2 rounded-md border border-paper/25 px-6 py-3.5 text-sm font-medium text-paper transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:border-paper/45"
            >
              Send an Email
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-paper/10 px-6 py-3.5 text-sm font-medium text-paper/40"
            >
              Send an Email
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
