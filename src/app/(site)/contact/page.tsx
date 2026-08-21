import { ContactForm } from "@/components/site/contact-form";
import { FaqAccordion } from "@/components/site/faq-accordion";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  OFFICE_ADDRESS,
  OFFICE_MAP_EMBED_URL,
  OFFICE_MAP_URL,
} from "@/lib/site-contact";

export const metadata = { title: "Contact | AICT Global Bangladesh" };

export default function ContactPage() {
  return (
    <section className="pt-section">
      <div className="pt-container">
        <h1 className="pt-section-title">Get in Touch</h1>
        <p className="pt-section-subtitle">
          Have questions about our campaigns, events, or tax certificates? Contact our support
          staff, chat with us on WhatsApp using the button in the corner, or read our FAQ guide.
        </p>

        <div className="pt-grid pt-grid-2" style={{ gap: 50, alignItems: "flex-start", marginBottom: 60 }}>
          <div>
            <h2 style={{ fontSize: "1.75rem", marginBottom: 24 }}>Office Location</h2>
            <div
              style={{
                background: "var(--pt-card-bg)",
                border: "1px solid var(--pt-border)",
                borderRadius: "var(--pt-radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--pt-shadow-sm)",
                marginBottom: 30,
              }}
            >
              {/* Real map, replacing the dotted placeholder that used to sit here.
                  The address sits in its own bar underneath rather than floating
                  over the map, where it would swallow clicks meant for it. */}
              <iframe
                src={OFFICE_MAP_EMBED_URL}
                title="AICT Global Bangladesh office location on Google Maps"
                width="100%"
                height={250}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                style={{ border: 0, display: "block" }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 20px",
                  borderTop: "1px solid var(--pt-border)",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                }}
              >
                <i className="fa-solid fa-location-pin" style={{ color: "var(--pt-danger)", flexShrink: 0 }} />
                <a href={OFFICE_MAP_URL} target="_blank" rel="noopener noreferrer">
                  {OFFICE_ADDRESS}
                </a>
              </div>
              <div style={{ padding: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <h4 style={{ marginBottom: 6 }}>
                    <i className="fa-solid fa-phone" style={{ color: "var(--pt-accent)", marginRight: 6 }} /> Call Us
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--pt-text-muted)" }}>
                    {CONTACT_PHONE}<br />Mon-Fri, 9AM - 5PM
                  </p>
                </div>
                <div>
                  <h4 style={{ marginBottom: 6 }}>
                    <i className="fa-solid fa-envelope" style={{ color: "var(--pt-accent)", marginRight: 6 }} /> Email Us
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--pt-text-muted)" }}>
                    {CONTACT_EMAIL}<br />Average reply: 24 hours
                    <br />
                    <span style={{ fontSize: "0.8rem" }}>Organization: aictglobalbd@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "var(--pt-card-bg)",
              border: "1px solid var(--pt-border)",
              borderRadius: "var(--pt-radius-lg)",
              padding: 30,
              boxShadow: "var(--pt-shadow-md)",
            }}
          >
            <h2 style={{ fontSize: "1.75rem", marginBottom: 12 }}>Send an Inquiry</h2>
            <p style={{ color: "var(--pt-text-muted)", fontSize: "0.9rem", marginBottom: 24 }}>
              Send us a message using the form below. We will get back to you as soon as
              possible.
            </p>
            <ContactForm />
          </div>
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 className="pt-section-title">Frequently Asked Questions</h2>
          <p className="pt-section-subtitle">
            Find quick answers to common questions about donation tax benefits, community
            registration, and fund delivery models.
          </p>
          <div style={{ marginTop: 30 }}>
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
