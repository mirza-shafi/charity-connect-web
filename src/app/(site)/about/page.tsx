import Link from "next/link";

export const metadata = { title: "About Us | AICT Global Bangladesh" };

const STATS = [
  { value: "2020", label: "Founded" },
  { value: "120+", label: "Global Donors Force" },
  { value: "45+", label: "Completed Projects" },
  { value: "9,200+", label: "Families Impacted" },
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
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-section">
        <div className="pt-container">
          <h1 className="pt-section-title">About Us</h1>
          <p className="pt-section-subtitle">
            AICT Global Bangladesh delivers emergency relief, sustainable development, and
            community empowerment across Bangladesh.
          </p>

          <div className="pt-grid pt-grid-2" style={{ alignItems: "center", gap: 60, marginTop: 20 }}>
            <div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: 16, textAlign: "left" }}>Our Story</h2>
              <p style={{ marginBottom: 16, color: "var(--pt-text-muted)" }}>
                Founded in 2020, AICT Global Bangladesh aims to remove structural wealth
                inequities and logistics bottlenecks in social aid delivery. We believe that
                direct, transparent fundraising changes the dynamic of giving.
              </p>
              <p style={{ color: "var(--pt-text-muted)" }}>
                From flood-affected families in Sunamganj to underserved communities across the
                country, our teams work directly on the ground — turning donations into food,
                clean water, medical care, and shelter as fast as possible, with every taka
                tracked from your pocket to the field.
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

      <section
        className="pt-section"
        style={{ background: "var(--pt-border-light)", borderTop: "1px solid var(--pt-border)", borderBottom: "1px solid var(--pt-border)" }}
      >
        <div className="pt-container">
          <h2 className="pt-section-title">Get to Know Us</h2>
          <p className="pt-section-subtitle">Explore our mission, our values, and the work behind every appeal.</p>

          <div className="pt-grid pt-grid-3">
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
