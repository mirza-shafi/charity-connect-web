import type { Appeal } from "@/lib/appeals-data";

export function AppealCard({ appeal }: { appeal: Appeal }) {
  return (
    <div className="pt-card">
      <div className="pt-card-img-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={appeal.image} alt={appeal.title} className="pt-card-img" />
      </div>
      <div className="pt-card-body">
        <h3 className="pt-card-title">{appeal.title}</h3>
      </div>
    </div>
  );
}
