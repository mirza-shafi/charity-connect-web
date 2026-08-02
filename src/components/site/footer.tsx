"use client";

import Image from "next/image";
import Link from "next/link";

import { useToast } from "@/components/site/toast-provider";

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
      <div className="pt-container">
        <div className="pt-footer-grid">
          <div className="pt-footer-col">
            <Link href="/" className="pt-logo" style={{ marginBottom: 20 }}>
              <Image src="/logo.jpg" alt="AICT Global Charity logo" width={38} height={38} className="pt-logo-img" />
              <span>AICT Global Charity</span>
            </Link>
            <p style={{ marginBottom: 20, fontSize: "0.9rem" }}>
              We are dedicated to building sustainable, self-sufficient communities. Your small
              contribution drives monumental local progress.
            </p>
            <div className="pt-social-links">
              <a href="https://www.facebook.com/aictglobal/" target="_blank" rel="noopener noreferrer" className="pt-social-btn" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="https://x.com/aictglobal" target="_blank" rel="noopener noreferrer" className="pt-social-btn" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter" />
              </a>
              <a href="https://www.instagram.com/aictglobal/" target="_blank" rel="noopener noreferrer" className="pt-social-btn" aria-label="Instagram">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="https://www.youtube.com/@aictglobal2885" target="_blank" rel="noopener noreferrer" className="pt-social-btn" aria-label="YouTube">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>

          <div className="pt-footer-col">
            <h4>Quick Links</h4>
            <ul className="pt-footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/campaigns">Fundraising Campaigns</Link></li>
              <li><Link href="/events">Community Events</Link></li>
              <li><Link href="/blog">Latest News &amp; Blogs</Link></li>
              <li><Link href="/volunteer">Volunteer Registry</Link></li>
            </ul>
          </div>

          <div className="pt-footer-col">
            <h4>Contact Info</h4>
            <ul className="pt-footer-links" style={{ pointerEvents: "none" }}>
              <li style={{ marginBottom: 12, display: "flex", alignItems: "flex-start", gap: 10 }}>
                <i className="fa-solid fa-location-dot" style={{ color: "var(--pt-accent)", marginTop: 4 }} />
                <span>120 Pine Street, Suite 400<br />San Francisco, CA 94111</span>
              </li>
              <li style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <i className="fa-solid fa-phone" style={{ color: "var(--pt-accent)" }} />
                <span>+880 1841-180037</span>
              </li>
              <li style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <i className="fa-solid fa-envelope" style={{ color: "var(--pt-accent)" }} />
                <span>connect@aictglobal.org</span>
              </li>
            </ul>
          </div>

          <div className="pt-footer-col">
            <h4>Stay Updated</h4>
            <p style={{ fontSize: "0.85rem", marginBottom: 16 }}>
              Subscribe to our monthly impact reports and emergency response announcements.
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
              <button type="submit" className="pt-btn pt-btn-primary pt-btn-sm" style={{ padding: "10px 14px" }}>
                <i className="fa-solid fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} AICT Global Charity. Created for social impact. All rights reserved.
            {" · "}
            Made by NexaForce Solutions
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#" style={{ color: "var(--pt-text-light)", fontSize: "0.8rem" }}>Privacy Policy</a>
            <a href="#" style={{ color: "var(--pt-text-light)", fontSize: "0.8rem" }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
