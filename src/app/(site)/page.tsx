import Link from "next/link";

import { AppealCard } from "@/components/site/appeal-card";
import { Carousel } from "@/components/site/carousel";
import { HeroSlider } from "@/components/site/hero-slider";
import { PhotoGallery } from "@/components/site/photo-gallery";
import { QuickDonateBar } from "@/components/site/quick-donate-bar";
import { APPEALS } from "@/lib/appeals-data";
import { getCampaigns, getGalleryPhotos, getHeroSlides } from "@/lib/data";

import { OchaIcon, type OchaIconName } from "@/components/site/ocha-icon";

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
          <Carousel
            header={
              <>
                <h2 className="pt-section-title">
                  <span>
                    Featured <span style={{ color: "var(--pt-accent)" }}>Appeals</span>
                  </span>
                </h2>
                <p className="pt-section-subtitle">
                  Take direct action. Donate to our current, high-priority appeals — including
                  emergency flood response across Bangladesh — and help change lives today.
                </p>
              </>
            }
            items={APPEALS.map((appeal) => ({ key: appeal.title, content: <AppealCard appeal={appeal} /> }))}
          />

          <div style={{ marginTop: 32, textAlign: "center" }}>
            <Link href="/campaigns" className="pt-btn pt-btn-secondary">
              View All Active Appeals <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }} />
            </Link>
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
            {([
              { icon: "financing", title: "Direct Giving Model", desc: "95% of donated funds flow straight to community contractors. No bloated operations." },
              { icon: "reporting", title: "Dynamic Reports", desc: "We publish audit reports quarterly showing project completions and geo-location details." },
              { icon: "protection", title: "Safe Payment System", desc: "All donation receipts are encrypted, and a digital receipt is available from your dashboard." },
            ] satisfies { icon: OchaIconName; title: string; desc: string }[]).map((item) => (
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
                  <OchaIcon name={item.icon} size={24} />
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
                Our Vision, Mission &amp; Commitment
              </h2>
              <p style={{ marginBottom: 16, color: "var(--pt-text-muted)" }}>
                AICT Global envisions a world where even the most forgotten lives are restored with
                dignity, hope and opportunity, so that every person has the courage to dream again.
              </p>
              <p style={{ marginBottom: 16, color: "var(--pt-text-muted)" }}>
                In Bangladesh, we bring this vision to life by serving communities with compassion,
                courage and accountability. We act swiftly when crisis strikes, help families recover
                with dignity, and invest in sustainable solutions in health, education, livelihoods,
                food security, water and community resilience.
              </p>
              <p style={{ marginBottom: 20, color: "var(--pt-text-muted)" }}>
                Our aim is not simply to deliver aid, but to walk alongside communities from relief to
                recovery and from recovery to self-reliance, creating opportunities for people to
                rebuild their lives with confidence and hope.
              </p>
              <Link href="/campaigns" className="pt-btn pt-btn-primary">
                See Our Emergency Appeals <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }} />
              </Link>
            </div>
            <div>
              <div style={{ position: "relative", borderRadius: "var(--pt-radius-lg)", overflow: "hidden", boxShadow: "var(--pt-shadow-lg)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mission.jpeg"
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
