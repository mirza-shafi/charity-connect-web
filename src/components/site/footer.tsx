"use client";

import Image from "next/image";
import Link from "next/link";

import { useToast } from "@/components/site/toast-provider";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  OFFICE_ADDRESS_LINES,
  OFFICE_MAP_URL,
  SOCIAL_LINKS,
} from "@/lib/site-contact";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/campaigns", label: "Appeals" },
  { href: "/events", label: "Community Events" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
];

const GET_INVOLVED_LINKS = [
  { href: "/volunteer", label: "Volunteer With Us" },
  { href: "/zakat", label: "Zakat Calculator" },
  { href: "/donate", label: "Donate Now" },
];

const PAYMENT_ICONS = ["fa-cc-visa", "fa-cc-mastercard", "fa-cc-amex", "fa-cc-paypal"];

export function SiteFooter() {
  const showToast = useToast();

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("email") as HTMLInputElement;
    const email = input.value.trim();
    if (!email) return;
    showToast(
      "Subscription Success",
      `Thank you! ${email} has been subscribed to our newsletter list.`,
      "success"
    );
    form.reset();
  };

  return (
    <footer className="pt-footer">
      <div className="pt-footer-main">
        <div className="pt-container pt-footer-grid">
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: 12 }}>
              <Image
                src="/logo-white.png"
                alt="AICT Global Bangladesh logo"
                width={112}
                height={112}
              />
            </Link>
            <p style={{ marginBottom: 10, fontSize: "0.85rem", lineHeight: 1.5 }}>
              AICT Global Bangladesh delivers emergency relief, sustainable development, and
              community empowerment across Bangladesh.
            </p>
            <div className="pt-social-links">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-social-btn"
                  aria-label={social.label}
                >
                  <i className={`fa-brands ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-footer-col">
            <h3>Quick Links</h3>
            <ul className="pt-footer-links-dot">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-footer-col">
            <h3>Get Involved</h3>
            <ul className="pt-footer-links-dot">
              {GET_INVOLVED_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-footer-col">
            <h3>Get In Touch</h3>
            <ul className="pt-footer-contact">
              <li>
                <i className="fa-solid fa-location-dot" />
                {/* Opens the office pin on Google Maps. */}
                <a href={OFFICE_MAP_URL} target="_blank" rel="noopener noreferrer">
                  {OFFICE_ADDRESS_LINES[0]}
                  <br />
                  {OFFICE_ADDRESS_LINES[1]}
                </a>
              </li>
              <li>
                <i className="fa-solid fa-phone" />
                <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE}</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope" />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>

          <div className="pt-footer-col">
            <h3>Stay Connected</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--pt-footer-text-muted)" }}>
              Get inspiring stories and impact updates delivered to your inbox.
            </p>
            <form className="pt-newsletter-form" onSubmit={handleNewsletter}>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="pt-newsletter-input"
                aria-label="Email address"
              />
              <button type="submit" className="pt-newsletter-submit">
                Subscribe <i className="fa-solid fa-arrow-right" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="pt-footer-subbar">
        <div className="pt-container">
          <p className="pt-footer-credit">Made by NexaForce Digital Solutions</p>
          <div className="pt-footer-payments">
            {PAYMENT_ICONS.map((icon) => (
              <i key={icon} className={`fa-brands ${icon}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-footer-bottom">
        <div className="pt-container">
          <p>&copy; {new Date().getFullYear()} AICT Global Bangladesh. All rights reserved.</p>
          <div className="pt-footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
