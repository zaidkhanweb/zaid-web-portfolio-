// -----------------------------------------------------------------------
// SITE CONFIGURATION
// Edit the values below before deploying. Nothing else in the codebase
// needs to change for contact details, domain, or navigation links.
// -----------------------------------------------------------------------

/**
 * Temporary deploy URL. Replace with your custom domain once you have one
 * (also update index.html canonical/OG tags and public/sitemap.xml + robots.txt).
 */
export const SITE_URL = "https://YOUR-PROJECT.vercel.app";

/**
 * WhatsApp number in international format, no spaces or symbols
 * (e.g. "923001234567" for a Pakistani number starting 0300...).
 * Leave the placeholder until you add your real number.
 */
export const WHATSAPP_NUMBER = "ADD_WHATSAPP_NUMBER";

/** Contact email shown across the site. */
export const EMAIL_ADDRESS = "ADD_EMAIL_ADDRESS";

/** True once a real WhatsApp number has been added above. */
export const WHATSAPP_READY = WHATSAPP_NUMBER !== "ADD_WHATSAPP_NUMBER";

/** True once a real email address has been added above. */
export const EMAIL_READY = EMAIL_ADDRESS !== "ADD_EMAIL_ADDRESS";

export const WHATSAPP_LINK = WHATSAPP_READY
  ? `https://wa.me/${WHATSAPP_NUMBER}`
  : "#";

export const EMAIL_LINK = EMAIL_READY
  ? `mailto:${EMAIL_ADDRESS}?subject=Website%20enquiry`
  : "#";

export const SITE_NAME = "Zaid";
export const SITE_BRAND = "ZAID WEB";
export const SITE_LOCATION = "Karachi, Pakistan";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
