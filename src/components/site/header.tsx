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
];

const PLAIN_LINKS = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

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

  return (
    <header className={`pt-header${isOverlay ? " pt-header-overlay" : ""}`}>
      <div className="pt-header-container">
        <Link href="/" className="pt-logo">
          <Image src="/logo.jpg" alt="AICT Global Bangladesh" width={38} height={38} className="pt-logo-img" priority />
        </Link>

        <nav>
          <ul className={`pt-nav-menu${mobileOpen ? " pt-nav-open" : ""}`}>
            <NavMegaMenu
              label="About Us"
              href="/about"
              active={pathname === "/about"}
              viewAllHref="/about"
              viewAllLabel="Learn More About Us"
              items={ABOUT_MENU_ITEMS}
            />

            <NavMegaMenu
              label="Appeals"
              href="/campaigns"
              active={pathname === "/campaigns"}
              viewAllHref="/campaigns"
              viewAllLabel="View All Appeals"
              items={campaigns.map((c) => ({ href: `/campaigns/${c.slug}`, title: c.title, subtitle: c.category }))}
            />

            {PLAIN_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`pt-nav-link${pathname === link.href ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-header-actions">
          <LiveClock />

          <CurrencyPicker className="pt-header-desktop-only" />

          <button
            type="button"
            className="pt-theme-toggle pt-header-desktop-only"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className="fa-solid fa-moon pt-icon-moon" />
            <i className="fa-solid fa-sun pt-icon-sun" />
          </button>

          <Link href="/zakat" className="pt-theme-toggle" aria-label="Zakat Calculator" title="Zakat Calculator">
            <i className="fa-solid fa-calculator" />
          </Link>

          <Link href="/donate" className="pt-btn pt-btn-accent pt-btn-sm pt-header-desktop-only">
            Donate Now
          </Link>

          <button type="button" className="pt-cart-btn" onClick={openBasket} aria-label="Open basket">
            <i className="fa-solid fa-cart-shopping" />
            {basketCount > 0 && <span className="pt-cart-badge">{basketCount}</span>}
          </button>

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
