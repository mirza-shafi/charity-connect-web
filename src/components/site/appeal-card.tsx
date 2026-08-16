import Link from "next/link";

import type { Appeal } from "@/lib/appeals-data";

export function AppealCard({ appeal }: { appeal: Appeal }) {
  return (
    <div className="pt-card">
      <div className="pt-card-img-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={appeal.image} alt={appeal.title} className="pt-card-img" />
        <span className="pt-card-badge">{appeal.category}</span>
      </div>
      <div className="pt-card-body">
        <h3 className="pt-card-title">{appeal.title}</h3>
        <p className="pt-card-description">{appeal.description}</p>
      </div>
      <div className="pt-card-footer pt-card-cta-row">
        <Link href="/donate" className="pt-btn pt-btn-primary pt-btn-pill">
          <i className="fa-solid fa-heart" /> Donate
        </Link>
        <Link href={`/appeals/${appeal.slug}`} className="pt-btn pt-btn-outline pt-btn-pill">
          Learn More <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>
    </div>
  );
}
