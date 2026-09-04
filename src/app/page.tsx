import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reel Pipeline — Automated Short-Form Video Creation & Publishing",
  description:
    "Transform your content into polished short-form videos and publish directly to Facebook, Instagram, and TikTok through an automated production pipeline.",
};

const workflowSteps = [
  {
    num: "01",
    title: "Content Selection",
    desc: "Quotes and content are sourced from your Firebase-managed collection, categorized and ready for video production.",
  },
  {
    num: "02",
    title: "Video Generation",
    desc: "The pipeline automatically generates TTS voiceover, selects background video and music, and renders cinematic subtitles.",
  },
  {
    num: "03",
    title: "Quality Review",
    desc: "Each reel is validated for technical specifications — resolution, duration, and format compliance before publishing.",
  },
  {
    num: "04",
    title: "Platform Publishing",
    desc: "Publish directly to authorized social accounts. Each platform is handled independently with real-time status tracking.",
  },
];

const platforms = [
  {
    name: "Facebook",
    status: "Active",
    statusType: "active" as const,
    desc: "Reels published via Graph API with chunked video upload.",
  },
  {
    name: "Instagram",
    status: "Active",
    statusType: "active" as const,
    desc: "Reels published via Instagram Graph API for business accounts.",
  },
  {
    name: "TikTok",
    status: "Pending Review",
    statusType: "pending" as const,
    desc: "Content Posting API integrated. Full public publishing pending TikTok App Review approval.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "6rem",
          paddingBottom: "6rem",
        }}
      >
        {/* Background glow */}
        <div
          className="glow-spot"
          style={{
            width: "600px",
            height: "600px",
            background: "var(--accent-primary)",
            top: "-200px",
            right: "-100px",
          }}
          aria-hidden="true"
        />
        <div
          className="glow-spot"
          style={{
            width: "400px",
            height: "400px",
            background: "var(--accent-tertiary)",
            bottom: "-100px",
            left: "-100px",
          }}
          aria-hidden="true"
        />

        <div className="container-main" style={{ position: "relative" }}>
          <div
            style={{ maxWidth: "720px" }}
            className="animate-fade-in-up"
          >
            <div className="badge badge-accent" style={{ marginBottom: "1.5rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-primary)" }} />
              Automated Video Production Pipeline
            </div>

            <h1 className="heading-xl" style={{ marginBottom: "1.5rem" }}>
              From content to published reel,{" "}
              <span className="gradient-text">fully automated.</span>
            </h1>

            <p className="body-lg" style={{ maxWidth: "580px", marginBottom: "2.5rem" }}>
              Reel Pipeline transforms your content into polished short-form
              videos with AI voiceover, cinematic subtitles, and curated visuals
              — then publishes directly to your social accounts.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/how-it-works" className="btn-primary" id="cta-how-it-works">
                See How It Works →
              </Link>
              <Link href="/features" className="btn-secondary" id="cta-features">
                View Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="section-spacing">
        <div className="container-main">
          <div className="animate-fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
              The production workflow
            </h2>
            <p className="body-lg" style={{ maxWidth: "560px", margin: "0 auto" }}>
              Every reel follows a consistent, automated pipeline from content to
              published result.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {workflowSteps.map((step, i) => (
              <div
                key={step.num}
                className={`card animate-fade-in-up delay-${i + 1}`}
                style={{ position: "relative" }}
              >
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "var(--bg-elevated)",
                    position: "absolute",
                    top: "1rem",
                    right: "1.5rem",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                  }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <div className="step-indicator" style={{ marginBottom: "1.25rem" }}>
                  {step.num}
                </div>
                <h3
                  className="heading-sm"
                  style={{ marginBottom: "0.75rem" }}
                >
                  {step.title}
                </h3>
                <p className="body-md">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support Section */}
      <section
        id="platforms"
        className="section-spacing"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="container-main">
          <div className="animate-fade-in-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
              Multi-platform publishing
            </h2>
            <p className="body-lg" style={{ maxWidth: "520px", margin: "0 auto" }}>
              Each platform is handled independently. A failure on one does not
              block the others.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              maxWidth: "960px",
              margin: "0 auto",
            }}
          >
            {platforms.map((p, i) => (
              <div
                key={p.name}
                className={`card animate-fade-in-up delay-${i + 1}`}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <h3 className="heading-sm" style={{ margin: 0 }}>
                    {p.name}
                  </h3>
                  <span
                    className={`platform-status ${p.statusType === "active" ? "platform-active" : "platform-pending"}`}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "currentColor",
                      }}
                    />
                    {p.status}
                  </span>
                </div>
                <p className="body-md">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="section-spacing">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <div className="animate-fade-in-up">
            <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
              Ready to automate your reels?
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "480px", margin: "0 auto 2.5rem" }}
            >
              Learn about the complete video production workflow and supported
              platform integrations.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <Link href="/about" className="btn-primary" id="cta-about">
                Learn More
              </Link>
              <Link href="/contact" className="btn-secondary" id="cta-contact">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
