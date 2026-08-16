import Link from "next/link";

export const metadata = { title: "What We Do | AICT Global Bangladesh" };

const PROGRAMS = [
  {
    icon: "fa-truck-medical",
    title: "Emergency Relief",
    desc: "Rapid-response food, clean water, shelter, and medical aid for families affected by floods and other disasters across Bangladesh.",
  },
  {
    icon: "fa-seedling",
    title: "Sustainable Development",
    desc: "Longer-term programs — clean water infrastructure, healthcare access, and livelihood support — that help communities recover for good.",
  },
  {
    icon: "fa-people-group",
    title: "Community Empowerment",
    desc: "Volunteer-driven, locally-led initiatives that put resources and decisions in the hands of the communities we serve.",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <section className="pt-section">
        <div className="pt-container">
          <h1 className="pt-section-title">What We Do</h1>
          <p className="pt-section-subtitle">
            AICT Global Bangladesh delivers emergency relief, sustainable development, and
            community empowerment across Bangladesh — with every taka tracked from your pocket
            to the field.
          </p>

          <div className="pt-grid pt-grid-3">
            {PROGRAMS.map((program) => (
              <div key={program.title} className="pt-card" style={{ padding: 32, alignItems: "center", textAlign: "center" }}>
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
                  <i className={`fa-solid ${program.icon}`} />
                </div>
                <h4 style={{ marginBottom: 8 }}>{program.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--pt-text-muted)" }}>{program.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, textAlign: "center" }}>
            <Link href="/campaigns" className="pt-btn pt-btn-primary">
              See Our Current Appeals <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
