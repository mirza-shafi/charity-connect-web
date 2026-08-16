import Link from "next/link";

import { AppealCard } from "@/components/site/appeal-card";
import { HeroSlider } from "@/components/site/hero-slider";
import { PhotoGallery } from "@/components/site/photo-gallery";
import { QuickDonateBar } from "@/components/site/quick-donate-bar";
import { APPEALS } from "@/lib/appeals-data";
import { getCampaigns, getGalleryPhotos, getHeroSlides } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [campaigns, heroSlides, galleryPhotos] = await Promise.all([
    getCampaigns(),
    getHeroSlides(),
    getGalleryPhotos(),
  ]);
  const totalRaisedCents = Math.round(campaigns.reduce((sum, c) => sum + c.raised, 0) * 100);

  const stats = [
    { value: "120+", label: "Global Donors Force" },
    { value: "45+", label: "Completed Projects" },
    { value: "9,200+", label: "Families Impacted" },
  ];

  return (
    <>
      <HeroSlider slides={heroSlides} totalRaisedCents={totalRaisedCents} stats={stats} />

      <QuickDonateBar />

      {/* Featured appeals */}
      <section className="pt-section">
        <div className="pt-container">
          <h2 className="pt-section-title">
            <span>
              Featured <span style={{ color: "var(--pt-accent)" }}>Appeals</span>
            </span>
          </h2>
          <p className="pt-section-subtitle">
            Take direct action. Donate to our current, high-priority appeals — including
            emergency flood response across Bangladesh — and help change lives today.
          </p>

          <div className="pt-grid pt-grid-3">
            {APPEALS.map((appeal) => (
              <AppealCard key={appeal.title} appeal={appeal} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section
        className="pt-section"
        style={{ background: "var(--pt-border-light)", borderTop: "1px solid var(--pt-border)", borderBottom: "1px solid var(--pt-border)" }}
      >
        <div className="pt-container">
          <h2 className="pt-section-title">Why Choose Us</h2>
          <p className="pt-section-subtitle">
            Every taka you give is tracked from your pocket to the field — here&apos;s how we
            earn that trust.
          </p>
          <div className="pt-grid pt-grid-3">
            {[
              { icon: "fa-bullseye", title: "Direct Giving Model", desc: "95% of donated funds flow straight to community contractors. No bloated operations." },
              { icon: "fa-square-poll-vertical", title: "Dynamic Reports", desc: "We publish audit reports quarterly showing project completions and geo-location details." },
              { icon: "fa-shield-halved", title: "Safe Payment System", desc: "All donation receipts are encrypted, and a digital receipt is available from your dashboard." },
            ].map((item) => (
              <div key={item.title} className="pt-card" style={{ padding: 32, alignItems: "center", textAlign: "center" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "var(--pt-primary-alpha)",
                    color: "var(--pt-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "1.4rem",
                    marginBottom: 18,
                  }}
                >
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <h4 style={{ marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--pt-text-muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pt-section">
        <div className="pt-container">
          <div className="pt-grid pt-grid-2" style={{ alignItems: "center", gap: 60 }}>
            <div>
              <h2 style={{ fontSize: "2.25rem", marginBottom: 20, textAlign: "left" }}>
                Our Vision, Mission &amp; Goals
              </h2>
              <p style={{ marginBottom: 20, color: "var(--pt-text-muted)" }}>
                Founded in 2020, AICT Global Bangladesh aims to remove structural wealth inequities and
                logistics bottlenecks in social aid delivery. We believe that direct, transparent
                fundraising changes the dynamic of giving — and right now, that means getting
                emergency relief to flood-affected families across Bangladesh as fast as possible.
              </p>
              <Link href="/campaigns" className="pt-btn pt-btn-primary">
                See Our Emergency Appeals <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }} />
              </Link>
            </div>
            <div>
              <div style={{ position: "relative", borderRadius: "var(--pt-radius-lg)", overflow: "hidden", boxShadow: "var(--pt-shadow-lg)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80"
                  alt="Relief volunteers distributing aid"
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
                    &ldquo;When the flood took everything, they were the first to reach us with
                    food and shelter.&rdquo;
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--pt-text-muted)" }}>
                    - Rahima, flood-affected mother, Sunamganj
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PhotoGallery photos={galleryPhotos} />

      {/* CTA */}
      <section
        className="pt-section"
        style={{
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(45, 123, 194, 0.85)), url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&auto=format&fit=crop&q=80')",
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
            join our flood emergency-response operations or local community relief efforts.
          </p>
          <Link href="/volunteer" className="pt-btn pt-btn-accent pt-btn-lg">
            Apply as a Volunteer
          </Link>
        </div>
      </section>
    </>
  );
}
