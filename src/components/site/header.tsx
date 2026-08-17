"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useBasket } from "@/components/site/basket-context";
import { CurrencyPicker } from "@/components/site/currency-picker";
import { LiveClock } from "@/components/site/live-clock";
import { NavMegaMenu } from "@/components/site/nav-mega-menu";
import type { Campaign } from "@/lib/types";

const ABOUT_MENU_ITEMS = [
  { href: "/about", title: "About Us", subtitle: "Who we are & our story" },
  { href: "/about/mission", title: "Our Mission", subtitle: "What drives everything we do" },
  { href: "/about/values", title: "Our Values", subtitle: "The principles behind our work" },
  { href: "/about/vision", title: "Our Vision", subtitle: "The world we're working toward" },
];

// Same destinations as the footer's social row — kept in sync deliberately.
const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/aictglobal/", label: "Facebook", icon: "fa-facebook-f" },
  { href: "https://www.instagram.com/aictglobal/", label: "Instagram", icon: "fa-instagram" },
  { href: "https://www.youtube.com/@aictglobal2885", label: "YouTube", icon: "fa-youtube" },
  { href: "https://x.com/aictglobal", label: "X", icon: "fa-x-twitter" },
];

const CONTACT_EMAIL = "connect@aictglobal.org";

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
          left that row too crowded to read. Hidden below 768px (where it can't
          fit) — its still-needed links are repeated in the mobile menu. */}
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

            {/* Dropped first as the strip tightens — the address is also in the
                footer and on /contact, so nothing becomes unreachable. */}
            <span className="pt-topbar-email">
              <span className="pt-topbar-divider" aria-hidden="true" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="pt-topbar-item">
                <i className="fa-regular fa-envelope" aria-hidden="true" />
                <span>{CONTACT_EMAIL}</span>
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

            <Link href="/zakat" className="pt-topbar-item">
              <i className="fa-solid fa-calculator" aria-hidden="true" />
              <span>Zakat Calculator</span>
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

            {/* Repeated from the utility strip, which is hidden at this width. */}
            <li className="pt-nav-mobile-only">
              <Link
                href="/zakat"
                onClick={closeMobile}
                className={`pt-nav-link${pathname === "/zakat" ? " active" : ""}`}
              >
                Zakat Calculator
              </Link>
            </li>
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
