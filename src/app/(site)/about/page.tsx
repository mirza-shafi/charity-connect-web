import Link from "next/link";

export const metadata = { title: "About Us | AICT Global" };

const STATS = [
  { value: "UK", label: "Headquartered" },
  { value: "6+", label: "Countries With Offices" },
  { value: "100%", label: "Public Donations to Projects" },
  { value: "2", label: "Core Programme Areas" },
];

const APPROACH = [
  {
    icon: "fa-people-roof",
    title: "Communities at the Centre",
    desc: "We co-design interventions with local communities and programme participants, running continuous feedback loops and upholding accountability to affected people.",
  },
  {
    icon: "fa-hand-holding-heart",
    title: "100% Donation Policy",
    desc: "Every public donation goes directly to projects. Core operating costs are covered separately through Gift Aid, institutional grants, and dedicated administrative sponsorships.",
  },
  {
    icon: "fa-square-poll-vertical",
    title: "Accountable",
    desc: "Transparent reporting, independent oversight, and responsible use of every pound.",
  },
  {
    icon: "fa-seedling",
    title: "Sustainable",
    desc: "We link urgent relief to long-term recovery and self-reliance for lasting impact.",
  },
];

const IMPACT_AREAS = [
  "Reach vulnerable children and their caregivers with essential services",
  "Restore access to clean water, education and basic healthcare",
  "Keep learning going when schools are disrupted",
  "Build pathways out of poverty through skills and dignified work",
  "Save lives and stabilise families in crisis",
  "Reduce death and disease in isolated communities",
  "Restore sight to reduce suffering and renew independence",
  "Provide immediate safety and security through emergency shelter",
];

const EXPLORE_LINKS = [
  {
    href: "/about/mission",
    icon: "fa-bullseye",
    title: "Our Mission",
    desc: "What drives everything we do, from first response to long-term recovery.",
  },
  {
    href: "/about/values",
    icon: "fa-heart",
    title: "Our Values",
    desc: "The principles that shape how we work with donors and communities alike.",
  },
  {
    href: "/what-we-do",
    icon: "fa-hands-holding-child",
    title: "What We Do",
    desc: "Emergency relief, sustainable development, and community empowerment.",
  },
  {
    href: "/about/core-values",
    icon: "fa-book-quran",
    title: "Core Values Statement",
    desc: "Guided by Qur’ān and Sunnah — the principles behind every promise we keep.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-section">
        <div className="pt-container">
          <h1 className="pt-section-title">About Us</h1>
          <p className="pt-section-subtitle">
            A non-profit humanitarian organization empowering underserved communities worldwide.
          </p>

          <div className="pt-grid pt-grid-2" style={{ alignItems: "center", gap: 60, marginTop: 20 }}>
            <div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: 16, textAlign: "left" }}>Who We Are</h2>
              <p style={{ marginBottom: 16, color: "var(--pt-text-muted)" }}>
                AICT Global is a non-profit humanitarian organization headquartered in the
                United Kingdom, with registered offices in the UAE, India, Malaysia, Indonesia,
                Canada, etc. We empower underserved communities through Emergency Response
                Programme and long-term development programmes, so that families can survive
                crisis today and thrive tomorrow. That&apos;s how we do the impossible together.
              </p>
              <p style={{ marginBottom: 16, color: "var(--pt-text-muted)" }}>
                We serve humanity with compassion, courage, and accountability by acting
                swiftly in times of crisis, restoring dignity after hardship, and building
                just, sustainable systems of health, education, and livelihoods, so that
                individuals and communities rise with hope and self-resilience.
              </p>
              <p style={{ color: "var(--pt-text-muted)" }}>
                <strong style={{ color: "var(--pt-text)" }}>AICT Bangladesh</strong> is
                headquartered in Dhaka, with offices in Cox&apos;s Bazar, Kurigram, Cumilla, and
                Chittagong.
              </p>
            </div>
            <div className="pt-grid pt-grid-2" style={{ gap: 20 }}>
              {STATS.map((stat) => (
                <div key={stat.label} className="pt-card" style={{ padding: 24, alignItems: "center", textAlign: "center" }}>
                  <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--pt-primary)" }}>{stat.value}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--pt-text-muted)", marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container">
          <h2 className="pt-section-title" style={{ fontSize: "1.75rem" }}>Our Approach</h2>
          <div className="pt-grid pt-grid-2">
            {APPROACH.map((item) => (
              <div key={item.title} className="pt-card" style={{ padding: 28 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--pt-primary-alpha)",
                    color: "var(--pt-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "1.2rem",
                    marginBottom: 14,
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

      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container">
          <h2 className="pt-section-title" style={{ fontSize: "1.75rem" }}>How We Create Impact</h2>
          <div className="pt-grid pt-grid-2" style={{ gap: "12px 32px" }}>
            {IMPACT_AREAS.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "var(--pt-primary)", marginTop: 4, flexShrink: 0 }}
                />
                <span style={{ color: "var(--pt-text-muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="pt-section"
        style={{ background: "var(--pt-border-light)", borderTop: "1px solid var(--pt-border)", borderBottom: "1px solid var(--pt-border)" }}
      >
        <div className="pt-container">
          <h2 className="pt-section-title">Get to Know Us</h2>
          <p className="pt-section-subtitle">Explore our mission, our values, and the work behind every appeal.</p>

          <div className="pt-grid pt-grid-2">
            {EXPLORE_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="pt-card"
                style={{ padding: 32, alignItems: "center", textAlign: "center", color: "inherit" }}
              >
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
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 32, textAlign: "center" }}>
            <Link href="/campaigns" className="pt-btn pt-btn-primary">
              See Our Emergency Appeals <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
