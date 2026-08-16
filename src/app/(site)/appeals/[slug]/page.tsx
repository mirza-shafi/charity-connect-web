import Link from "next/link";
import { notFound } from "next/navigation";

import { APPEALS, getAppeal } from "@/lib/appeals-data";

export function generateStaticParams() {
  return APPEALS.map((appeal) => ({ slug: appeal.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const appeal = getAppeal(slug);
  return { title: appeal ? `${appeal.title} | AICT Global Bangladesh` : "Appeal Not Found" };
}

export default async function AppealDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const appeal = getAppeal(slug);

  if (!appeal) notFound();

  return (
    <section className="pt-section">
      <div className="pt-container" style={{ maxWidth: 960 }}>
        <span className="pt-card-badge" style={{ position: "static", display: "inline-block" }}>
          {appeal.category}
        </span>
        <h1 style={{ fontSize: "2.5rem", marginTop: 16, marginBottom: 0 }}>{appeal.title}</h1>

        <div className="pt-grid pt-campaign-hero-grid" style={{ marginTop: 24, gap: 24, alignItems: "stretch" }}>
          <div
            style={{
              borderRadius: "var(--pt-radius-lg)",
              overflow: "hidden",
              backgroundColor: "var(--pt-border-light)",
              minHeight: 320,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={appeal.image}
              alt={appeal.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          <div
            style={{
              background: "var(--pt-card-bg)",
              border: "1px solid var(--pt-border)",
              borderRadius: "var(--pt-radius-lg)",
              padding: 20,
              boxShadow: "var(--pt-shadow-sm)",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <p style={{ color: "var(--pt-text-muted)" }}>
              Every contribution to this appeal goes straight toward {appeal.title.toLowerCase()}.
            </p>
            <Link href="/donate" className="pt-btn pt-btn-primary pt-btn-pill" style={{ justifyContent: "center" }}>
              <i className="fa-solid fa-heart" /> Donate Now
            </Link>
          </div>
        </div>

        <p style={{ color: "var(--pt-text-muted)", whiteSpace: "pre-line", marginTop: 32 }}>
          {appeal.description}
        </p>
      </div>
    </section>
  );
}
