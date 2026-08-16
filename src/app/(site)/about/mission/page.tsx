import Link from "next/link";

export const metadata = { title: "Our Mission | AICT Global Bangladesh" };

const GOALS = [
  {
    icon: "fa-truck-medical",
    title: "Fast Emergency Response",
    desc: "Get relief — food, clean water, shelter, and medical care — to families as fast as logistics allow, no matter how remote.",
  },
  {
    icon: "fa-seedling",
    title: "Sustainable Development",
    desc: "Move beyond one-time aid toward programs communities can build on: clean water access, healthcare, and livelihoods.",
  },
  {
    icon: "fa-people-group",
    title: "Community Empowerment",
    desc: "Work with, not just for, the communities we serve — so recovery is locally led and lasts beyond our involvement.",
  },
];

export default function MissionPage() {
  return (
    <section className="pt-section">
      <div className="pt-container">
        <h1 className="pt-section-title">Our Mission</h1>
        <p className="pt-section-subtitle">What drives everything we do, from first response to long-term recovery.</p>

        <div className="pt-grid pt-grid-2" style={{ alignItems: "center", gap: 60 }}>
          <div>
            <p style={{ marginBottom: 16, color: "var(--pt-text-muted)", fontSize: "1.05rem" }}>
              Founded in 2020, AICT Global Bangladesh aims to remove structural wealth
              inequities and logistics bottlenecks in social aid delivery. We believe that
              direct, transparent fundraising changes the dynamic of giving — and right now,
              that means getting emergency relief to flood-affected families across Bangladesh
              as fast as possible.
            </p>
            <p style={{ color: "var(--pt-text-muted)" }}>
              Every taka given is tracked from your pocket to the field. We keep our operating
              footprint small so donations reach communities directly, not administrative
              overhead.
            </p>
            <Link href="/donate" className="pt-btn pt-btn-primary" style={{ marginTop: 24 }}>
              Support Our Mission <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }} />
            </Link>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mission.jpeg"
              alt="AICT Global Bangladesh team on the ground"
              style={{
                width: "100%",
                height: 420,
                objectFit: "cover",
                display: "block",
                borderRadius: "var(--pt-radius-lg)",
                boxShadow: "var(--pt-shadow-lg)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="pt-container" style={{ marginTop: 64 }}>
        <h2 className="pt-section-title" style={{ fontSize: "1.75rem" }}>
          Our Goals
        </h2>
        <div className="pt-grid pt-grid-3">
          {GOALS.map((goal) => (
            <div key={goal.title} className="pt-card" style={{ padding: 32, alignItems: "center", textAlign: "center" }}>
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
                <i className={`fa-solid ${goal.icon}`} />
              </div>
              <h4 style={{ marginBottom: 8 }}>{goal.title}</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--pt-text-muted)" }}>{goal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
