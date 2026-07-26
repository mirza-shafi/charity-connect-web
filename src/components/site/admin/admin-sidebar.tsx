"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Banknote,
  CalendarDays,
  GalleryHorizontal,
  HandHeart,
  LayoutGrid,
  Newspaper,
  Users,
} from "lucide-react";

export const ADMIN_NAV = [
  { href: "/admin", label: "Overview", icon: LayoutGrid },
  { href: "/admin/hero-slides", label: "Hero Slides", icon: GalleryHorizontal },
  { href: "/admin/campaigns", label: "Campaigns", icon: Banknote },
  { href: "/admin/events", label: "Events", icon: CalendarDays },
  { href: "/admin/blog", label: "News", icon: Newspaper },
  { href: "/admin/volunteers", label: "Volunteers", icon: Users },
  { href: "/admin/zakat", label: "Zakat Settings", icon: HandHeart },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r bg-sidebar px-4 py-6 md:flex">
      <Link href="/admin" className="mb-8 flex items-center gap-2 px-2 text-lg font-bold text-primary">
        <HandHeart className="h-6 w-6" />
        Charity Connect
      </Link>

      <nav className="flex flex-col gap-1">
        {ADMIN_NAV.map((item) => {
          const active = item.href === "/admin" ? pathname === "/admin" : pathname?.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
