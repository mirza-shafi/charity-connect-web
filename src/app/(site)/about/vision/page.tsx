import { OchaIcon, type OchaIconName } from "@/components/site/ocha-icon";

const HOW_WE_ACT = [
  {
    number: "1",
    icon: "analysis",
    title: "Reaching the Forgotten First",
    body: "We prioritise communities that are often invisible to systems of power and aid — remote rural populations, conflict-affected families, displaced communities, widows, orphans, and those living at the margins of poverty. Our work begins where neglect is deepest and need is greatest, ensuring that no life is considered too small, too difficult, or too forgotten.",
  },
  {
    number: "2",
    icon: "response",
    title: "Acting Swiftly to Protect Life and Dignity",
    body: "In moments of crisis such as natural disasters, conflict, displacement, or acute deprivation, AICT acts swiftly to save lives through food assistance, medical care, shelter, and clean water. Speed is paired with responsibility, guided by rapid needs assessments, local partnerships, and transparent use of resources. Immediate relief is delivered with dignity, not charity optics.",
  },
  {
    number: "3",
    icon: "partnership",
    title: "Restoring Hope After Hardship",
    body: "Once urgent needs are met, AICT focuses on restoring stability and hope. This includes rebuilding homes, restoring access to healthcare and education, supporting widows and orphans, and strengthening psychosocial and community support systems. Restoration is not temporary aid; it is a bridge from survival to renewed possibility.",
  },
  {
    number: "4",
    icon: "environment",
    title: "Creating Opportunity Through Sustainable Systems",
    body: "To ensure lasting impact, AICT invests in just and sustainable systems — clinics and hospitals, schools and training centres, livelihood pathways, water and sanitation infrastructure, and community-based enterprises. These systems are designed to empower people with skills, income, and access to essential services so they can shape their own futures.",
  },
  {
    number: "5",
    icon: "innovation",
    title: "Empowering Communities to Dream Again",
    body: "Our ultimate measure of success is not the volume of aid delivered, but whether individuals and communities emerge stronger, self-reliant, and confident in their ability to dream and plan for their future. AICT walks alongside communities until they no longer depend on aid, but stand with dignity, resilience, and hope.",
  },
] satisfies { icon: OchaIconName; [k: string]: unknown }[];

const IN_PRACTICE = [
  "Relief that saves lives without compromising dignity",
  "Recovery that restores confidence, stability, and social cohesion",
  "Development that builds opportunity, justice, and self-reliance",
  "Accountability that honours every trust and every contribution",
];

export const metadata = { title: "Our Vision | AICT Global" };

export default function VisionPage() {
  return (
    <>
      <section className="pt-section">
        <div className="pt-container" style={{ maxWidth: 820 }}>
          <h1 className="pt-section-title">Our Vision</h1>
          <p className="pt-section-subtitle">
            A world where even the most forgotten lives are restored with dignity, hope, and
            opportunity — so that every person has the courage to dream again.
          </p>
        </div>
      </section>

      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container" style={{ maxWidth: 820 }}>
          <h2 className="pt-section-title" style={{ fontSize: "1.75rem" }}>
            How AICT Global Turns This Vision into Action
          </h2>
          <p style={{ color: "var(--pt-text-muted)", marginBottom: 8 }}>
            AICT Global translates its vision into action by moving deliberately from compassion
            to capability, and from relief to restoration. Every programme is designed not only
            to address suffering, but to rebuild dignity and unlock opportunity, so people can
            reclaim the courage to dream again.
          </p>
        </div>
      </section>

      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container" style={{ maxWidth: 820, display: "flex", flexDirection: "column", gap: 40 }}>
          {HOW_WE_ACT.map((step) => (
            <div key={step.number} style={{ borderTop: "1px solid var(--pt-border)", paddingTop: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
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
                  <OchaIcon name={step.icon} size={24} />
                </div>
                <h3 style={{ fontSize: "1.25rem", margin: 0 }}>
                  {step.number}. {step.title}
                </h3>
              </div>
              <p style={{ color: "var(--pt-text-muted)", margin: 0 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="pt-section"
        style={{ background: "var(--pt-border-light)", borderTop: "1px solid var(--pt-border)", borderBottom: "1px solid var(--pt-border)" }}
      >
        <div className="pt-container" style={{ maxWidth: 820 }}>
          <h2 className="pt-section-title" style={{ fontSize: "1.75rem" }}>What This Means in Practice</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {IN_PRACTICE.map((item) => (
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

      <section className="pt-section">
        <div className="pt-container" style={{ maxWidth: 820 }}>
          <p
            style={{
              borderLeft: "3px solid var(--pt-primary)",
              paddingLeft: 20,
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: "var(--pt-text)",
              margin: 0,
            }}
          >
            In essence, AICT Global translates vision into action by staying longer, acting
            braver, and building deeper — ensuring that forgotten lives are not only helped, but
            restored, empowered, and able to dream again.
          </p>
        </div>
      </section>
    </>
  );
}
