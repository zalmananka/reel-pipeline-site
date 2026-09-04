import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the verified capabilities of Reel Pipeline — from automated reel creation and content management to multi-platform social publishing.",
};

const features = [
  {
    category: "Reel Creation",
    items: [
      {
        title: "Automated Video Generation",
        desc: "Complete quote-to-video pipeline that generates ready-to-publish 1080×1920 portrait reels without manual editing.",
      },
      {
        title: "Text-to-Speech Voiceover",
        desc: "High-quality AI voiceover using Edge TTS with category-specific voice selection and adjustable speech rate.",
      },
      {
        title: "Cinematic Subtitles",
        desc: "Word-level timing alignment produces precisely timed, styled subtitle overlays rendered as ASS format with author attribution.",
      },
    ],
  },
  {
    category: "Content Workflow",
    items: [
      {
        title: "Firebase Content Management",
        desc: "Quotes and content are managed in Firestore collections, organized by category with processing status tracking.",
      },
      {
        title: "Category-Based Configuration",
        desc: "Each content category maps to specific visual themes, music styles, TTS voices, and subtitle styling for consistent output.",
      },
      {
        title: "Job Tracking",
        desc: "Every pipeline run is tracked in Firestore with metadata including reel ID, media sources, generation status, and timestamps.",
      },
    ],
  },
  {
    category: "Video Preparation",
    items: [
      {
        title: "Background Video Sourcing",
        desc: "Portrait-oriented HD and UHD background videos sourced from Pexels with category-specific search queries and retry logic.",
      },
      {
        title: "Music Integration",
        desc: "Royalty-free background music sourced from Jamendo with robust SoundHelix fallback to ensure generation never fails on music.",
      },
      {
        title: "FFmpeg Composition",
        desc: "Professional-grade video compositing: scaling, cropping, dark overlay for readability, subtitle burning, and audio mixing.",
      },
    ],
  },
  {
    category: "Social Publishing",
    items: [
      {
        title: "Facebook Reels",
        desc: "Direct publishing via Facebook Graph API using chunked rupload video protocol for reliable large-file transfers.",
      },
      {
        title: "Instagram Reels",
        desc: "Publishing to Instagram Business accounts via Graph API with automated media container creation and processing status polling.",
      },
      {
        title: "TikTok Content Posting",
        desc: "Integration with TikTok's Content Posting API via Direct Post with OAuth 2.0 PKCE authorization. Currently pending App Review for unrestricted posting.",
      },
    ],
  },
  {
    category: "Publishing Status",
    items: [
      {
        title: "Independent Platform Handling",
        desc: "Each platform publishes independently. A failure on TikTok does not block Facebook or Instagram, and vice versa.",
      },
      {
        title: "Per-Platform Status Tracking",
        desc: "Publishing results are tracked per platform with statuses such as published, processing, pending, audit_required, or failed.",
      },
      {
        title: "Token Management",
        desc: "OAuth tokens are securely stored in Firestore with automatic refresh handling and expiration monitoring for uninterrupted access.",
      },
    ],
  },
];

export default function FeaturesPage() {
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
            background: "var(--accent-secondary)",
            top: "-200px",
            right: "-100px",
          }}
          aria-hidden="true"
        />
        <div className="container-narrow" style={{ position: "relative" }}>
          <div className="animate-fade-in-up">
            <div className="badge badge-accent" style={{ marginBottom: "1.5rem" }}>
              Features
            </div>
            <h1 className="heading-xl" style={{ marginBottom: "1.5rem" }}>
              What Reel Pipeline <span className="gradient-text">can do</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: "560px" }}>
              Every capability listed here is verified against the actual
              implementation. No invented analytics, scheduling, or features
              that do not exist.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((section, sectionIdx) => (
        <section
          key={section.category}
          className="section-spacing"
          style={{
            background:
              sectionIdx % 2 === 0 ? "transparent" : "var(--bg-secondary)",
          }}
        >
          <div className="container-main">
            <div className="animate-fade-in-up" style={{ marginBottom: "2.5rem" }}>
              <h2 className="heading-lg">{section.category}</h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {section.items.map((item, i) => (
                <div
                  key={item.title}
                  className={`card animate-fade-in-up delay-${i + 1}`}
                >
                  <h3
                    className="heading-sm"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    {item.title}
                  </h3>
                  <p className="body-md">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* TikTok Note */}
      <section className="section-spacing" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-narrow">
          <div
            className="card-glass animate-fade-in-up"
            style={{
              textAlign: "center",
              padding: "3rem 2rem",
            }}
          >
            <div className="badge badge-warning" style={{ marginBottom: "1.5rem" }}>
              TikTok Integration Status
            </div>
            <h2 className="heading-md" style={{ marginBottom: "1rem" }}>
              TikTok publishing is pending App Review
            </h2>
            <p className="body-lg" style={{ maxWidth: "520px", margin: "0 auto 2rem" }}>
              The TikTok Content Posting integration is fully implemented and
              tested in sandbox mode. Full public publishing requires TikTok
              App Review approval, which is currently in progress.
            </p>
            <Link href="/tiktok" className="btn-primary" id="features-cta-tiktok">
              Learn About TikTok Integration →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
