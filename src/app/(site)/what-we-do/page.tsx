import Link from "next/link";

import { OchaIcon, type OchaIconName } from "@/components/site/ocha-icon";

export const metadata = { title: "What We Do | AICT Global" };

const DEVELOPMENT_PROGRAMME = [
  {
    icon: "education",
    title: "Education",
    desc: "Expanding access to quality learning and scholarship through schooling support, learning materials, and accredited courses.",
  },
  {
    icon: "health",
    title: "Health",
    desc: "Delivering affordable care, from hospital services and sight-restoring interventions to patient support and medical outreach.",
  },
  {
    icon: "water-sanitation-and-hygiene",
    title: "WASH (Water, Sanitation & Hygiene)",
    desc: "Securing safe water, sanitation, and hygiene through water-aid projects, hygiene promotion, and new/rehabilitated handpumps.",
  },
  {
    icon: "livelihood",
    title: "Food Security & Livelihoods",
    desc: "Building income security via skills training, asset grants (e-rickshaws, e-vegetable carts, etc.), and small-business start-up support alongside targeted food assistance where needed.",
  },
] satisfies { icon: OchaIconName; [k: string]: unknown }[];

const EMERGENCY_PROGRAMME = [
  {
    icon: "nutrition",
    title: "Food Security & Nutrition",
    desc: "Rapid assistance to reduce hunger and malnutrition for families in crisis.",
  },
  {
    icon: "mobile-clinic",
    title: "Essential Health Services",
    desc: "Life-saving primary care and screenings — mobile clinics, health check-ups — delivered at the doorstep during emergencies.",
  },
  {
    icon: "potable-water",
    title: "WASH in Emergencies",
    desc: "Immediate hygiene kit distribution and fast restoration of safe water points.",
  },
  {
    icon: "shelter",
    title: "Emergency Shelter",
    desc: "Safe, dignified temporary shelter solutions that protect households and speed early recovery.",
  },
] satisfies { icon: OchaIconName; [k: string]: unknown }[];

const SEASONAL_PROGRAMME = [
  {
    icon: "mosque",
    title: "Ramadan Food Assistance",
    desc: "Supporting vulnerable families with nutritious food packs designed to meet essential household needs throughout the month of Ramadan.",
  },
  {
    icon: "kitchen-set",
    title: "Iftar and Suhoor Support",
    desc: "Providing cooked meals, community iftars, and suhoor assistance to fasting individuals, travellers, students, displaced people, and families facing food insecurity.",
  },
  {
    icon: "fund",
    title: "Zakat and Fitrana Assistance",
    desc: "Delivering Shariah-compliant, needs-based support to eligible individuals and households through transparent beneficiary selection, fund segregation, distribution, and reporting.",
  },
  {
    icon: "relief-goods",
    title: "Eid Support",
    desc: "Helping children, orphans, and vulnerable families celebrate Eid with dignity through Eid gifts, clothing, food assistance, and other essential household support.",
  },
  {
    icon: "livestock",
    title: "Qurbani/Udhiyah Programme",
    desc: "Facilitating the ethical and Shariah-compliant procurement, slaughter, processing, and distribution of fresh meat to vulnerable households during Eid al-Adha.",
  },
  {
    icon: "blanket",
    title: "Winter Assistance",
    desc: "Protecting vulnerable families during the colder months through the distribution of blankets, warm clothing, heating support, and other essential winter items.",
  },
  {
    icon: "reporting",
    title: "Islamic Giving and Donor Stewardship",
    desc: "Managing seasonal donations in accordance with donor intentions and Islamic principles, supported by clear documentation, beneficiary verification, monitoring, and timely reporting.",
  },
] satisfies { icon: OchaIconName; [k: string]: unknown }[];

function ProgrammeCard({ icon, title, desc }: { icon: OchaIconName; title: string; desc: string }) {
  return (
    <div className="pt-card" style={{ padding: 28 }}>
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
          marginBottom: 14,
        }}
      >
        <OchaIcon name={icon} size={26} />
      </div>
      <h4 style={{ marginBottom: 8 }}>{title}</h4>
      <p style={{ fontSize: "0.9rem", color: "var(--pt-text-muted)" }}>{desc}</p>
    </div>
  );
}

export default function WhatWeDoPage() {
  return (
    <>
      <section className="pt-section">
        <div className="pt-container">
          <h1 className="pt-section-title">What We Do</h1>
          <p className="pt-section-subtitle">
            AICT Global empowers underserved communities through our Development Programme,
            Emergency Response Programme, and Seasonal Programme — so that families can survive
            crisis today and thrive tomorrow.
          </p>
        </div>
      </section>

      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container">
          <h2 className="pt-section-title" style={{ fontSize: "1.75rem" }}>Development Programme</h2>
          <p className="pt-section-subtitle" style={{ marginBottom: 32 }}>
            Long-term programmes that build just, sustainable systems of health, education, and
            livelihoods.
          </p>
          <div className="pt-grid pt-grid-2">
            {DEVELOPMENT_PROGRAMME.map((item) => (
              <ProgrammeCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="pt-section"
        style={{ background: "var(--pt-border-light)", borderTop: "1px solid var(--pt-border)", borderBottom: "1px solid var(--pt-border)" }}
      >
        <div className="pt-container">
          <h2 className="pt-section-title" style={{ fontSize: "1.75rem" }}>Emergency Response Programme</h2>
          <p className="pt-section-subtitle" style={{ marginBottom: 32 }}>
            Acting swiftly in times of crisis to stabilise families and restore dignity.
          </p>
          <div className="pt-grid pt-grid-2">
            {EMERGENCY_PROGRAMME.map((item) => (
              <ProgrammeCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-section" style={{ paddingTop: 0 }}>
        <div className="pt-container">
          <h2 className="pt-section-title" style={{ fontSize: "1.75rem" }}>Seasonal Programme</h2>
          <p className="pt-section-subtitle" style={{ marginBottom: 32 }}>
            Supporting vulnerable families through Ramadan, Eid, and the winter months in line
            with donor intentions and Islamic principles.
          </p>
          <div className="pt-grid pt-grid-3">
            {SEASONAL_PROGRAMME.map((item) => (
              <ProgrammeCard key={item.title} {...item} />
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
