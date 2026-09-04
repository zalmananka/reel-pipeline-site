import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Follow the complete Reel Pipeline journey from content preparation through video generation, platform authorization, and publishing.",
};

const steps = [
  {
    num: "01",
    title: "Prepare Your Content",
    desc: "Add quotes or short-form text content to your Firebase Firestore collection. Each entry is categorized by theme — this determines the visual style, voice, and music that will be used.",
    detail: "Content is organized in the instagram_quotes collection with fields for text, author, category, and processing status.",
  },
  {
    num: "02",
    title: "Generate the Reel",
    desc: "Trigger the pipeline to process the next eligible piece of content. The system automatically handles every step of video production.",
    detail: "The pipeline fetches a background video from Pexels, selects music from Jamendo, generates TTS voiceover via Edge TTS, creates word-level subtitles, and composites a final 1080×1920 MP4 using FFmpeg.",
  },
  {
    num: "03",
    title: "Review the Output",
    desc: "The rendered video is validated against technical requirements — resolution, duration, codec, and format. Review the output before publishing.",
    detail: "Validation checks ensure the video meets platform specifications. Generated files are stored in the output directory with unique identifiers.",
  },
  {
    num: "04",
    title: "Connect Your Platforms",
    desc: "Authorize your social media accounts when connecting for the first time. Facebook and Instagram use a Page Token. TikTok uses OAuth 2.0 with PKCE.",
    detail: "Each platform connection is independent. You can publish to one platform without needing to connect the others. Tokens are securely stored in Firestore.",
  },
  {
    num: "05",
    title: "Review Publishing Settings",
    desc: "Before publishing, review the available settings for each platform. Privacy levels and other options are determined by your account permissions and platform policies.",
    detail: "For TikTok, creator settings are retrieved from the API to show only actually available options. The system does not assume or force privacy levels.",
  },
  {
    num: "06",
    title: "Confirm and Publish",
    desc: "Confirm publishing for each target platform. The system handles the upload protocol specific to each platform — chunked upload for Facebook, media containers for Instagram, and Direct Post for TikTok.",
    detail: "Publishing is triggered per platform. Each upload uses the official API protocol for reliable, spec-compliant delivery.",
  },
  {
    num: "07",
    title: "Track the Result",
    desc: "After publishing, track the result for each platform independently. Published content receives a platform-specific post ID. Failed or pending results are clearly reported.",
    detail: "Results are stored per platform with statuses like published, processing, audit_required, or failed. TikTok audit restrictions are mapped to a specific status rather than treated as an error.",
  },
];

export default function HowItWorksPage() {
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
            width: "500px",
            height: "500px",
            background: "var(--accent-primary)",
            top: "-250px",
            left: "30%",
          }}
          aria-hidden="true"
        />
        <div className="container-narrow" style={{ position: "relative" }}>
          <div className="animate-fade-in-up">
            <div className="badge badge-accent" style={{ marginBottom: "1.5rem" }}>
              How It Works
            </div>
            <h1 className="heading-xl" style={{ marginBottom: "1.5rem" }}>
              The complete <span className="gradient-text">user journey</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: "560px" }}>
              Follow each stage of the Reel Pipeline workflow — from preparing
              content to tracking published results across platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <div key={step.num}>
                <div
                  className={`animate-fade-in-up delay-${Math.min(i + 1, 6)}`}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div className="step-indicator">{step.num}</div>
                  </div>
                  <div style={{ paddingBottom: "1rem" }}>
                    <h2 className="heading-md" style={{ marginBottom: "0.75rem" }}>
                      {step.title}
                    </h2>
                    <p className="body-lg" style={{ marginBottom: "0.75rem" }}>
                      {step.desc}
                    </p>
                    <p className="body-sm">{step.detail}</p>
                  </div>
                </div>
                {i < steps.length - 1 && <div className="step-connector" style={{ marginBottom: "1rem" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Status Summary */}
      <section className="section-spacing" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-narrow">
          <div className="animate-fade-in-up" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
              Current platform status
            </h2>
            <p className="body-lg">
              Publishing availability for each supported platform.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            <div className="card animate-fade-in-up delay-1" style={{ textAlign: "center" }}>
              <h3 className="heading-sm" style={{ marginBottom: "0.75rem" }}>Facebook</h3>
              <span className="badge badge-success">✓ Published Successfully</span>
            </div>
            <div className="card animate-fade-in-up delay-2" style={{ textAlign: "center" }}>
              <h3 className="heading-sm" style={{ marginBottom: "0.75rem" }}>Instagram</h3>
              <span className="badge badge-success">✓ Published Successfully</span>
            </div>
            <div className="card animate-fade-in-up delay-3" style={{ textAlign: "center" }}>
              <h3 className="heading-sm" style={{ marginBottom: "0.75rem" }}>TikTok</h3>
              <span className="badge badge-warning">⏳ Pending App Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <div className="animate-fade-in-up">
            <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
              Learn more about our integrations
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link href="/tiktok" className="btn-primary" id="hiw-cta-tiktok">
                TikTok Integration →
              </Link>
              <Link href="/features" className="btn-secondary" id="hiw-cta-features">
                All Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
