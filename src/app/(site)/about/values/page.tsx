export const metadata = { title: "Our Values | AICT Global" };

const VALUES = [
  {
    icon: "fa-people-roof",
    title: "Community-Led",
    desc: "We co-design interventions with local communities and programme participants, and run continuous feedback loops to stay accountable to affected people.",
  },
  {
    icon: "fa-hand-holding-heart",
    title: "100% Donation Policy",
    desc: "Every public donation goes directly to projects; core operating costs are covered through Gift Aid, institutional grants, and dedicated administrative sponsorships.",
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
  {
    icon: "fa-shield-halved",
    title: "Compassion & Courage",
    desc: "We act swiftly in times of crisis and restore dignity after hardship, serving humanity with compassion and courage.",
  },
  {
    icon: "fa-scale-balanced",
    title: "Integrity",
    desc: "We hold ourselves accountable to donors and beneficiaries alike, in how funds are raised and spent.",
  },
];

export default function ValuesPage() {
  return (
    <section className="pt-section">
      <div className="pt-container">
        <h1 className="pt-section-title">Our Values</h1>
        <p className="pt-section-subtitle">The principles behind our work — with donors, and with the communities we serve.</p>

        <div className="pt-grid pt-grid-3">
          {VALUES.map((value) => (
            <div key={value.title} className="pt-card" style={{ padding: 32, alignItems: "center", textAlign: "center" }}>
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
                <i className={`fa-solid ${value.icon}`} />
              </div>
              <h4 style={{ marginBottom: 8 }}>{value.title}</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--pt-text-muted)" }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
