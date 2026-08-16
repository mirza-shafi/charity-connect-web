import Link from "next/link";

export const metadata = { title: "Our Mission | AICT Global" };

const SECTIONS = [
  {
    number: "1",
    icon: "fa-scroll",
    title: "Mission Note (Institutional Statement)",
    paragraphs: [
      "AICT Global’s mission is not an abstract aspiration; it is a lived responsibility rooted in amānah (trust), compassion, and disciplined action. We exist to respond where human suffering is greatest and where systems have failed, acting with urgency in crisis, restoring dignity after hardship, and building just, sustainable systems that allow people to reclaim control over their lives.",
      "Our mission reflects a belief that humanitarian action must go beyond temporary relief. True service requires courage to act swiftly, integrity to remain accountable, and commitment to stay until communities can stand independently with hope and self-reliance. Every AICT initiative is designed to translate compassion into measurable impact, and faith into responsible action.",
    ],
  },
  {
    number: "2",
    icon: "fa-route",
    title: "How We Live the Mission",
    paragraphs: [
      "AICT Global puts its mission into action through a continuum of response that moves from emergency to recovery to resilience.",
      "In times of crisis such as conflict, natural disasters, displacement, or acute poverty, we act swiftly to save lives through food assistance, medical care, shelter, and water. Speed matters, but so does responsibility; rapid response is guided by needs assessments, local partnerships, and transparent resource management.",
      "After immediate hardship, we focus on restoring dignity. This means rebuilding homes, supporting widows and orphans, restoring access to healthcare and education, and ensuring that assistance strengthens and not replaces community agency. Dignity is preserved by listening first, engaging communities as partners, and respecting cultural and social contexts.",
      "Beyond relief, AICT invests in just and sustainable systems such as clinics, hospitals, education programmes, livelihood pathways, water infrastructure, and skills development so that individuals and communities can move from dependency to self-reliance. Our work continues until people are no longer surviving, but living with stability, confidence, and hope.",
    ],
  },
  {
    number: "3",
    icon: "fa-compass",
    title: "Why This Mission Exists",
    paragraphs: [
      "This mission exists because too many lives remain unseen, unheard, and underserved — not due to lack of resources, but due to lack of courage, accountability, and long-term commitment. AICT Global was founded on the conviction that humanitarian work must be both compassionate and uncompromising in ethics.",
      "Our Founder’s journey — leaving comfort and certainty to serve the most marginalized — shaped an organisation that believes faith demands action, and action demands excellence. The mission exists to honour that sacrifice by ensuring that every decision, every dollar, and every programme is accountable to both people and Allah.",
      "AICT Global exists to prove that it is possible to act swiftly without recklessness, to be faith-guided without exclusion, and to do what others call impossible with discipline, transparency, and trust in Allah. This mission is our response to suffering and our commitment to restore dignity, hope, and self-reliance wherever humanity is in need.",
    ],
  },
];

export default function MissionPage() {
  return (
    <>
      <section className="pt-section">
        <div className="pt-container">
          <h1 className="pt-section-title">Our Mission</h1>
          <p className="pt-section-subtitle">
            A lived responsibility rooted in amānah, compassion, and disciplined action.
          </p>
        </div>
      </section>

      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container" style={{ maxWidth: 820, display: "flex", flexDirection: "column", gap: 48 }}>
          {SECTIONS.map((section) => (
            <div
              key={section.number}
              style={{
                borderTop: "1px solid var(--pt-border)",
                paddingTop: 40,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
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
                  }}
                >
                  <i className={`fa-solid ${section.icon}`} />
                </div>
                <h2 style={{ fontSize: "1.5rem", margin: 0 }}>
                  {section.number}. {section.title}
                </h2>
              </div>

              {section.paragraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    marginBottom: i === section.paragraphs.length - 1 ? 0 : 16,
                    color: "var(--pt-text-muted)",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}

          <div style={{ textAlign: "center" }}>
            <Link href="/donate" className="pt-btn pt-btn-primary">
              Support Our Mission <i className="fa-solid fa-arrow-right" style={{ marginLeft: 6 }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
