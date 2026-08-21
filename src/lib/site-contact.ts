// Organisation contact details and social profiles, shared by the header strip,
// the footer and the contact page.
//
// Deliberately a plain module with no "use client" directive. These used to live
// in footer.tsx, which *is* a client component — importing them from a server
// component turned each export into a client-reference proxy, so
// `OFFICE_ADDRESS_LINES.join(...)` crashed at runtime with "join is not a
// function". Type-checking can't catch that, since the types look correct either
// way; only rendering the page does.

export const CONTACT_EMAIL = "bangladesh@aictglobal.org";
export const CONTACT_PHONE = "+880 1841-180037";
/** Digits-only form for `tel:` links. */
export const CONTACT_PHONE_TEL = CONTACT_PHONE.replace(/[^+\d]/g, "");

export const OFFICE_ADDRESS_LINES = ["11/7 Road, Pallabi Mirpur", "Dhaka 1216, Dhaka, Bangladesh"];
export const OFFICE_ADDRESS = OFFICE_ADDRESS_LINES.join(", ");
/** Google Maps pin for the office — opened from the address in the footer/contact page. */
export const OFFICE_MAP_URL = "https://maps.app.goo.gl/VF4xbbkKYG6G3aaM9?g_st=ic";

/**
 * Embeddable form of the same pin, for the map on /contact.
 *
 * `maps.google.com/maps?...&output=embed` is the keyless embed endpoint — the
 * Maps Embed API proper would need a billed API key. The query is the place
 * name Google itself resolves OFFICE_MAP_URL to, so the marker lands on the
 * organisation's own listing rather than a geocoded guess at the street.
 */
export const OFFICE_MAP_EMBED_URL =
  "https://maps.google.com/maps?q=AICT+Global,+22+Road+No.+29A,+Dhaka+1216&z=16&output=embed";

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://www.facebook.com/share/1DCMRFN6zn/?mibextid=wwXIfr", label: "Facebook", icon: "fa-facebook-f" },
  { href: "https://www.instagram.com/aictglobal/", label: "Instagram", icon: "fa-instagram" },
  { href: "https://youtube.com/@aictglobalbd?si=z7Un1ELNAaaWXecH", label: "YouTube", icon: "fa-youtube" },
  { href: "https://x.com/aictglobal", label: "X", icon: "fa-x-twitter" },
];
