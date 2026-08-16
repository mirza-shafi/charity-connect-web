export const metadata = { title: "Our Values | AICT Global Bangladesh" };

const VALUES = [
  {
    icon: "fa-bullseye",
    title: "Direct Giving",
    desc: "95% of donated funds flow straight to community contractors. No bloated operations.",
  },
  {
    icon: "fa-square-poll-vertical",
    title: "Transparency",
    desc: "We publish audit reports quarterly showing project completions and geo-location details.",
  },
  {
    icon: "fa-shield-halved",
    title: "Trust & Security",
    desc: "All donation receipts are encrypted, and a digital receipt is available from your dashboard.",
  },
  {
    icon: "fa-hand-holding-heart",
    title: "Compassion",
    desc: "Every family we serve is treated with dignity — aid is delivered as we'd want it delivered to our own.",
  },
  {
    icon: "fa-scale-balanced",
    title: "Integrity",
    desc: "We hold ourselves accountable to donors and beneficiaries alike, in how funds are raised and spent.",
  },
  {
    icon: "fa-people-roof",
    title: "Community-Led",
    desc: "We work alongside local communities so recovery and development are locally owned, not imposed.",
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
