import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what Reel Pipeline is, the problem it solves, who it's for, and how the automated video publishing workflow operates.",
};

export default function AboutPage() {
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
            background: "var(--accent-tertiary)",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          aria-hidden="true"
        />
        <div className="container-narrow" style={{ position: "relative" }}>
          <div className="animate-fade-in-up">
            <div className="badge badge-accent" style={{ marginBottom: "1.5rem" }}>
              About
            </div>
            <h1 className="heading-xl" style={{ marginBottom: "1.5rem" }}>
              What is <span className="gradient-text">Reel Pipeline</span>?
            </h1>
            <p className="body-lg" style={{ maxWidth: "600px" }}>
              Reel Pipeline is an automated content-to-video production system
              that transforms written content into polished, ready-to-publish
              short-form video reels.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section-spacing" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-narrow">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            <div className="card animate-fade-in-up delay-1">
              <h2 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--accent-primary)" }}>
                The Problem
              </h2>
              <p className="body-md">
                Creating short-form video content for multiple social platforms
                is time-consuming and repetitive. Each platform has different
                technical requirements, upload processes, and API integrations
                — turning a simple quote or message into a polished reel
                requires video editing, voiceover recording, subtitle timing,
                and manual uploading to each platform separately.
              </p>
            </div>

            <div className="card animate-fade-in-up delay-2">
              <h2 className="heading-sm" style={{ marginBottom: "1rem", color: "var(--accent-secondary)" }}>
                The Solution
              </h2>
              <p className="body-md">
                Reel Pipeline automates the entire workflow. From selecting content
                in Firebase to rendering a finished 1080×1920 video with
                text-to-speech voiceover, background visuals, music, and
                cinematic subtitles — then publishing directly to Facebook,
                Instagram, and TikTok through their official APIs. Each
                platform&apos;s result is tracked independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h2 className="heading-lg" style={{ marginBottom: "1.5rem" }}>
              Who is it for?
            </h2>
            <p className="body-lg" style={{ marginBottom: "2rem" }}>
              Reel Pipeline is designed for content creators and social media
              operators who need to produce and distribute short-form video
              content consistently across multiple platforms.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              {
                title: "Content Creators",
                desc: "Individuals producing quote-based or informational video content for social media audiences.",
              },
              {
                title: "Social Media Managers",
                desc: "Professionals managing multiple social accounts who need consistent, automated content publishing.",
              },
              {
                title: "Small Teams",
                desc: "Teams that want to maintain a regular publishing cadence without dedicated video production resources.",
              },
            ].map((item, i) => (
              <div key={item.title} className={`card animate-fade-in-up delay-${i + 1}`}>
                <h3 className="heading-sm" style={{ marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p className="body-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the workflow operates */}
      <section className="section-spacing" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-narrow">
          <div className="animate-fade-in-up">
            <h2 className="heading-lg" style={{ marginBottom: "1.5rem" }}>
              How the workflow operates
            </h2>
            <p className="body-lg" style={{ marginBottom: "2.5rem" }}>
              The pipeline is a sequence of automated stages. Once content is
              available, the system handles everything from media acquisition
              through final publishing.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              {
                stage: "Content Sourcing",
                detail:
                  "Quotes are stored in a Firebase Firestore collection, categorized by theme. The pipeline selects eligible, unprocessed quotes.",
              },
              {
                stage: "Media Acquisition",
                detail:
                  "Background video is sourced from Pexels (portrait HD/UHD). Background music is sourced from Jamendo with a fallback system.",
              },
              {
                stage: "Voiceover Generation",
                detail:
                  "Text-to-speech is generated using Edge TTS with category-specific voice selection and speech rate configuration.",
              },
              {
                stage: "Subtitle Rendering",
                detail:
                  "Word-level timing alignment produces cinematic, timed subtitle groups rendered as ASS format overlays.",
              },
              {
                stage: "Video Composition",
                detail:
                  "FFmpeg composites all layers: scaled/cropped background, dark overlay for readability, burned-in subtitles, and mixed audio tracks.",
              },
              {
                stage: "Validation & Publishing",
                detail:
                  "The rendered reel is validated for specs, then published to authorized platforms through their respective APIs.",
              },
            ].map((item, i) => (
              <div key={item.stage}>
                <div
                  className={`animate-slide-in delay-${i + 1}`}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    padding: "1.5rem 0",
                  }}
                >
                  <div className="step-indicator" style={{ fontSize: "0.875rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3
                      className="heading-sm"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {item.stage}
                    </h3>
                    <p className="body-md">{item.detail}</p>
                  </div>
                </div>
                {i < 5 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <div className="animate-fade-in-up">
            <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
              Explore the full feature set
            </h2>
            <p className="body-lg" style={{ maxWidth: "480px", margin: "0 auto 2rem" }}>
              See exactly what Reel Pipeline can do and how each component of the
              pipeline works.
            </p>
            <Link href="/features" className="btn-primary" id="about-cta-features">
              View Features →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
