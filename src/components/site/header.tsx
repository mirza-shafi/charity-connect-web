"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useBasket } from "@/components/site/basket-context";
import { useCurrency } from "@/components/site/currency-context";
import { NavMegaMenu } from "@/components/site/nav-mega-menu";
import { CURRENCIES, type CurrencyCode } from "@/lib/currency";
import { formatDate } from "@/lib/format";
import type { Campaign, EventItem, BlogPost } from "@/lib/types";

const PLAIN_LINKS = [
  { href: "/volunteer", label: "Volunteer" },
  { href: "/zakat", label: "Zakat Calculator" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({
  campaigns,
  events,
  posts,
}: {
  campaigns: Campaign[];
  events: EventItem[];
  posts: BlogPost[];
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { items, openBasket } = useBasket();
  const { currency, setCurrency } = useCurrency();
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
          <Image src="/logo.jpg" alt="AICT Global Charity" width={38} height={38} className="pt-logo-img" priority />
        </Link>

        <nav>
          <ul className={`pt-nav-menu${mobileOpen ? " pt-nav-open" : ""}`}>
            <NavMegaMenu
              label="Campaigns"
              href="/campaigns"
              active={pathname === "/campaigns"}
              viewAllHref="/campaigns"
              viewAllLabel="View All Campaigns"
              items={campaigns.map((c) => ({ href: `/campaigns/${c.slug}`, title: c.title, subtitle: c.category }))}
            />

            <NavMegaMenu
              label="Events"
              href="/events"
              active={pathname === "/events"}
              viewAllHref="/events"
              viewAllLabel="View All Events"
              items={events.map((e) => ({
                href: `/events/${e.slug}`,
                title: e.title,
                subtitle: formatDate(e.date, { month: "short", day: "numeric", year: "numeric" }),
              }))}
            />

            <NavMegaMenu
              label="News"
              href="/blog"
              active={pathname === "/blog"}
              viewAllHref="/blog"
              viewAllLabel="View All News"
              items={posts.map((p) => ({ href: `/blog/${p.slug}`, title: p.title, subtitle: p.category }))}
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
          <select
            className="pt-currency-select pt-header-desktop-only"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
            aria-label="Select display currency"
          >
            {Object.values(CURRENCIES).map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="pt-theme-toggle pt-header-desktop-only"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className="fa-solid fa-moon pt-icon-moon" />
            <i className="fa-solid fa-sun pt-icon-sun" />
          </button>

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
