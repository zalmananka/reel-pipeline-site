import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Reel Pipeline team for support, questions about the service, or TikTok integration inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          className="glow-spot"
          style={{
            width: "400px",
            height: "400px",
            background: "var(--accent-tertiary)",
            top: "-150px",
            left: "20%",
          }}
          aria-hidden="true"
        />
        <div className="container-narrow" style={{ position: "relative" }}>
          <div className="animate-fade-in-up">
            <div className="badge badge-accent" style={{ marginBottom: "1.5rem" }}>
              Contact
            </div>
            <h1 className="heading-xl" style={{ marginBottom: "1.5rem" }}>
              Get in <span className="gradient-text">touch</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: "520px" }}>
              Have questions about Reel Pipeline, the TikTok integration, or
              need support? Reach out using the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
            }}
          >
            {/* Form */}
            <div className="animate-fade-in-up">
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <div className="animate-fade-in-up delay-2">
              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h3 className="heading-sm" style={{ marginBottom: "1rem" }}>
                  Response Time
                </h3>
                <p className="body-md">
                  We typically respond to inquiries within 1–2 business days.
                  For urgent matters related to active publishing or
                  authorization issues, please indicate this in your message.
                </p>
              </div>

              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h3 className="heading-sm" style={{ marginBottom: "1rem" }}>
                  TikTok Integration Questions
                </h3>
                <p className="body-md">
                  For questions specifically about TikTok authorization,
                  publishing permissions, or data handling, please select
                  &quot;TikTok Integration&quot; as the subject. You can also
                  review our{" "}
                  <a
                    href="/tiktok"
                    style={{ color: "var(--accent-primary)", textDecoration: "underline" }}
                  >
                    TikTok Integration
                  </a>{" "}
                  page and{" "}
                  <a
                    href="/privacy"
                    style={{ color: "var(--accent-primary)", textDecoration: "underline" }}
                  >
                    Privacy Policy
                  </a>{" "}
                  for detailed information.
                </p>
              </div>

              <div className="card">
                <h3 className="heading-sm" style={{ marginBottom: "1rem" }}>
                  Data &amp; Privacy
                </h3>
                <p className="body-md">
                  For data-related requests including access, correction, or
                  deletion of your information, please select &quot;Privacy &amp;
                  Data&quot; as the subject and include the details of your
                  request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
