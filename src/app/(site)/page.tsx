import Link from "next/link";

import { CampaignCarousel } from "@/components/site/campaign-carousel";
import { HeroSlider } from "@/components/site/hero-slider";
import { PhotoGallery } from "@/components/site/photo-gallery";
import { getCampaigns, getGalleryPhotos, getHeroSlides } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [campaigns, heroSlides, galleryPhotos] = await Promise.all([
    getCampaigns(),
    getHeroSlides(),
    getGalleryPhotos(),
  ]);
  const featured = campaigns.slice(0, 9);
  const totalRaised = campaigns.reduce((sum, c) => sum + c.raised, 0);

  const stats = [
    { value: `$${totalRaised.toLocaleString()}`, label: "Total Funds Raised" },
    { value: "120+", label: "Global Donors Force" },
    { value: "45+", label: "Completed Projects" },
    { value: "9,200+", label: "Families Impacted" },
  ];

  return (
    <>
      <HeroSlider slides={heroSlides} stats={stats} />

      {/* Featured campaigns */}
      <section className="pt-section">
        <div className="pt-container">
          <h2 className="pt-section-title">Featured Campaigns</h2>
          <p className="pt-section-subtitle">
            Take direct action. Donate to our current, high-priority fundraising drives and help
            change lives today.
          </p>

          {featured.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--pt-text-muted)" }}>
              No active campaigns yet — check back soon.
            </p>
          ) : (
            <CampaignCarousel campaigns={featured} />
          )}

          <div style={{ marginTop: 50, textAlign: "center" }}>
            <Link href="/campaigns" className="pt-btn pt-btn-secondary">
              View All Active Campaigns <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }} />
            </Link>
          </div>
        </div>
      </section>

      <PhotoGallery photos={galleryPhotos} />

      {/* Mission */}
      <section
        className="pt-section"
        style={{ background: "var(--pt-border-light)", borderTop: "1px solid var(--pt-border)", borderBottom: "1px solid var(--pt-border)" }}
      >
        <div className="pt-container">
          <div className="pt-grid pt-grid-2" style={{ alignItems: "center", gap: 60 }}>
            <div>
              <h2 style={{ fontSize: "2.25rem", marginBottom: 20, textAlign: "left" }}>
                Our Vision, Mission &amp; Goals
              </h2>
              <p style={{ marginBottom: 20, color: "var(--pt-text-muted)" }}>
                Founded in 2020, AICT Global Charity aims to remove structural wealth inequities and
                logistics bottlenecks in social aid delivery. We believe that direct, transparent
                fundraising changes the dynamic of giving.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                {[
                  { icon: "fa-bullseye", title: "Direct Giving Model", desc: "95% of donated funds flow straight to community contractors. No bloated operations." },
                  { icon: "fa-square-poll-vertical", title: "Dynamic Reports", desc: "We publish audit reports quarterly showing project completions and geo-location details." },
                  { icon: "fa-shield-halved", title: "Safe payment system", desc: "All donation receipts are encrypted and tax-deductible for donors." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: 15, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        background: "var(--pt-primary-alpha)",
                        color: "var(--pt-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i className={`fa-solid ${item.icon}`} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ fontSize: "0.9rem", color: "var(--pt-text-muted)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ position: "relative", borderRadius: "var(--pt-radius-lg)", overflow: "hidden", boxShadow: "var(--pt-shadow-lg)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80"
                  alt="Volunteers in action"
                  style={{ width: "100%", display: "block", objectFit: "cover", height: 450 }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 24,
                    left: 24,
                    right: 24,
                    background: "var(--pt-glass-bg)",
                    backdropFilter: "var(--pt-glass-blur)",
                    border: "1px solid var(--pt-glass-border)",
                    borderRadius: "var(--pt-radius-md)",
                    padding: 20,
                    boxShadow: "var(--pt-shadow-md)",
                  }}
                >
                  <h4 style={{ color: "var(--pt-primary-dark)", marginBottom: 6, fontWeight: 700 }}>
                    &ldquo;They brought clean drinking water right outside my school door.&rdquo;
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--pt-text-muted)" }}>
                    - Amina, Grade 5 student, Rural Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="pt-section"
        style={{
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 118, 110, 0.9)), url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="pt-container" style={{ maxWidth: 700 }}>
          <h2 style={{ fontSize: "2.25rem", marginBottom: 16, color: "white" }}>
            Ready to Make an Impact?
          </h2>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: 30, lineHeight: 1.6 }}>
            Your physical support is just as powerful as financial contributions. Register to
            join our upcoming disaster relief operations or local community meal prep projects.
          </p>
          <Link href="/volunteer" className="pt-btn pt-btn-accent pt-btn-lg">
            Apply as a Volunteer
          </Link>
        </div>
      </section>
    </>
  );
}
