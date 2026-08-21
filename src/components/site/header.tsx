"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useBasket } from "@/components/site/basket-context";
import { CurrencyPicker } from "@/components/site/currency-picker";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site-contact";
import { LiveClock } from "@/components/site/live-clock";
import { NavMegaMenu } from "@/components/site/nav-mega-menu";
import type { Campaign } from "@/lib/types";

const ABOUT_MENU_ITEMS = [
  { href: "/about", title: "About Us", subtitle: "Who we are & our story" },
  { href: "/about/mission", title: "Our Mission", subtitle: "What drives everything we do" },
  { href: "/about/values", title: "Our Values", subtitle: "The principles behind our work" },
  { href: "/about/vision", title: "Our Vision", subtitle: "The world we're working toward" },
];

const NavPlainLink = ({
  href,
  label,
  pathname,
  onClick,
}: {
  href: string;
  label: string;
  pathname: string;
  onClick: () => void;
}) => (
  <li>
    <Link href={href} onClick={onClick} className={`pt-nav-link${pathname === href ? " active" : ""}`}>
      {label}
    </Link>
  </li>
);

export function SiteHeader({ campaigns }: { campaigns: Campaign[] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { items, openBasket } = useBasket();
  const basketCount = items.reduce((sum, i) => sum + i.quantity, 0);

  // Only the homepage has a full-screen hero directly under the header, so
  // the see-through "overlay" look only makes sense there and only before
  // the visitor scrolls past it.
  const isOverlay = pathname === "/" && !scrolled;

  useEffect(() => {
    if (pathname !== "/") return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const toggleTheme = () => {
    const next = document.body.classList.toggle("dark-mode");
    localStorage.setItem("charity_connect_theme", next ? "dark" : "light");
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`pt-header${isOverlay ? " pt-header-overlay" : ""}`}>
      {/* Utility strip. Everything here used to sit in the main nav row, which
          left that row too crowded to read. It stays on mobile (matching
          aictglobal.org) but sheds the decorative pieces and collapses its
          labels to icons — the currency picker in particular has no other home,
          so hiding the strip outright would leave phone visitors unable to
          switch currency at all. */}
      <div className="pt-topbar">
        <div className="pt-topbar-inner">
          <div className="pt-topbar-group">
            <div className="pt-topbar-socials">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-topbar-social"
                  aria-label={social.label}
                >
                  <i className={`fa-brands ${social.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>

            <span className="pt-topbar-email">
              <span className="pt-topbar-divider" aria-hidden="true" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="pt-topbar-item" aria-label="Email us">
                <i className="fa-regular fa-envelope" aria-hidden="true" />
                {/* Collapses to the envelope alone once the strip runs out of room. */}
                <span className="pt-topbar-label">{CONTACT_EMAIL}</span>
              </a>
            </span>
          </div>

          <div className="pt-topbar-group">
            {/* Purely decorative, so it yields space before the real controls. */}
            <span className="pt-topbar-clock">
              <LiveClock />
              <span className="pt-topbar-divider" aria-hidden="true" />
            </span>

            <CurrencyPicker />

            <Link href="/zakat" className="pt-topbar-item" aria-label="Zakat Calculator">
              <i className="fa-solid fa-calculator" aria-hidden="true" />
              <span className="pt-topbar-label">Zakat Calculator</span>
            </Link>

            <button type="button" className="pt-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <i className="fa-solid fa-moon pt-icon-moon" />
              <i className="fa-solid fa-sun pt-icon-sun" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-header-container">
        <Link href="/" className="pt-logo">
          <Image src="/logo.jpg" alt="AICT Global Bangladesh" width={38} height={38} className="pt-logo-img" priority />
        </Link>

        <nav>
          <ul className={`pt-nav-menu${mobileOpen ? " pt-nav-open" : ""}`}>
            <NavMegaMenu
              label="Appeals"
              href="/campaigns"
              active={pathname === "/campaigns"}
              viewAllHref="/campaigns"
              viewAllLabel="View All Appeals"
              items={campaigns.map((c) => ({ href: `/campaigns/${c.slug}`, title: c.title, subtitle: c.category }))}
            />

            <NavPlainLink href="/volunteer" label="Volunteer" pathname={pathname} onClick={closeMobile} />

            <NavMegaMenu
              label="About Us"
              href="/about"
              active={pathname === "/about"}
              viewAllHref="/about"
              viewAllLabel="Learn More About Us"
              items={ABOUT_MENU_ITEMS}
            />

            <NavPlainLink href="/what-we-do" label="What We Do" pathname={pathname} onClick={closeMobile} />

            <NavPlainLink href="/contact" label="Contact" pathname={pathname} onClick={closeMobile} />
          </ul>
        </nav>

        <div className="pt-header-actions">
          <button type="button" className="pt-cart-btn" onClick={openBasket} aria-label="Open basket">
            <i className="fa-solid fa-cart-shopping" />
            {basketCount > 0 && <span className="pt-cart-badge">{basketCount}</span>}
          </button>

          <Link href="/donate" className="pt-btn pt-btn-accent pt-btn-sm pt-header-desktop-only">
            Donate Now
          </Link>

          <button
            type="button"
            className="pt-mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
