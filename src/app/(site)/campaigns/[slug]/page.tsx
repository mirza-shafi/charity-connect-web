import { notFound } from "next/navigation";

import { DonationCard } from "@/components/site/donation-card";
import { getCampaign } from "@/lib/data";

export default async function CampaignDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campaign = await getCampaign(slug);

  if (!campaign) notFound();

  const pct = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));

  return (
    <section className="pt-section">
      <div className="pt-container" style={{ maxWidth: 960 }}>
        <span className="pt-card-badge" style={{ position: "static", display: "inline-block" }}>
          {campaign.category}
        </span>
        <h1 style={{ fontSize: "2.5rem", marginTop: 16, marginBottom: 0 }}>{campaign.title}</h1>

        <div className="pt-grid pt-campaign-hero-grid" style={{ marginTop: 24, gap: 24, alignItems: "stretch" }}>
          <div
            style={{
              borderRadius: "var(--pt-radius-lg)",
              overflow: "hidden",
              backgroundColor: "var(--pt-border-light)",
              minHeight: 320,
            }}
          >
            {campaign.image_key ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={campaign.image_key}
                alt={campaign.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            ) : null}
          </div>

          <div
            id="donate"
            style={{
              background: "var(--pt-card-bg)",
              border: "1px solid var(--pt-border)",
              borderRadius: "var(--pt-radius-lg)",
              padding: 20,
              boxShadow: "var(--pt-shadow-sm)",
              height: "fit-content",
              scrollMarginTop: "calc(var(--pt-header-height) + 16px)",
            }}
          >
            <div className="pt-progress-labels">
              <span>Raised: ${campaign.raised.toLocaleString()}</span>
              <span>{pct}%</span>
            </div>
            <div className="pt-progress-bar-bg">
              <div className="pt-progress-bar-fill" style={{ width: `${pct}%` }} />
            </div>
            <div
              className="pt-progress-labels"
              style={{ marginTop: 6, marginBottom: 16, fontWeight: 500, fontSize: "0.8rem", color: "var(--pt-text-light)" }}
            >
              <span>Goal: ${campaign.goal.toLocaleString()}</span>
            </div>

            <DonationCard campaign={campaign} variant="compact" />
          </div>
        </div>

        <p style={{ color: "var(--pt-text-muted)", whiteSpace: "pre-line", marginTop: 32 }}>
          {campaign.description}
        </p>
      </div>
    </section>
  );
}
