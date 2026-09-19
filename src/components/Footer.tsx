import { EMAIL_ADDRESS, EMAIL_LINK, NAV_LINKS, SITE_BRAND, WHATSAPP_LINK, WHATSAPP_NUMBER } from "../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line/15 bg-paper py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-lg text-ink">{SITE_BRAND}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">
            Websites for local businesses, built to be clear, fast, and easy
            to reach.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/60 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm text-ink/60">
          <a
            href={WHATSAPP_LINK}
            target={WHATSAPP_LINK === "#" ? undefined : "_blank"}
            rel={WHATSAPP_LINK === "#" ? undefined : "noreferrer"}
            className="hover:text-ink"
          >
            {WHATSAPP_NUMBER === "ADD_WHATSAPP_NUMBER" ? "WhatsApp" : WHATSAPP_NUMBER}
          </a>
          <a href={EMAIL_LINK} className="hover:text-ink">
            {EMAIL_ADDRESS === "ADD_EMAIL_ADDRESS" ? "Email" : EMAIL_ADDRESS}
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl px-6 text-xs text-ink/40">
        © {year} {SITE_BRAND}. All rights reserved.
      </p>
    </footer>
  );
}
