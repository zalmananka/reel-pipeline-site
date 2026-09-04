import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TikTok Integration",
  description:
    "How Reel Pipeline integrates with TikTok's Content Posting API — authorization, publishing permissions, content handling, and current review status.",
};

export default function TikTokPage() {
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
            top: "-200px",
            right: "-50px",
          }}
          aria-hidden="true"
        />
        <div className="container-narrow" style={{ position: "relative" }}>
          <div className="animate-fade-in-up">
            <div className="badge badge-warning" style={{ marginBottom: "1.5rem" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "currentColor" }} />
              App Review In Progress
            </div>
            <h1 className="heading-xl" style={{ marginBottom: "1.5rem" }}>
              TikTok <span className="gradient-text">Integration</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: "600px" }}>
              The service can send eligible short-form video content to an
              authorized TikTok account through TikTok&apos;s supported Content
              Posting integration.
            </p>
          </div>
        </div>
      </section>

      {/* What the integration does */}
      <section className="section-spacing" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-narrow">
          <h2 className="heading-lg animate-fade-in-up" style={{ marginBottom: "2rem" }}>
            What the integration does
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                title: "Content Posting API",
                desc: "Reel Pipeline uses TikTok's official Content Posting API to publish video content. This is TikTok's supported method for third-party applications to post video on behalf of authorized users.",
              },
              {
                title: "Direct Post Flow",
                desc: "Videos are uploaded using the Direct Post method — the application initializes an upload session, transfers the video binary data, and TikTok processes the content for publishing.",
              },
              {
                title: "Status Tracking",
                desc: "After submission, the publish ID is tracked to monitor processing status. Each TikTok publish result is stored independently from other platform results.",
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

      {/* Authorization */}
      <section className="section-spacing">
        <div className="container-narrow">
          <h2 className="heading-lg animate-fade-in-up" style={{ marginBottom: "1.5rem" }}>
            Why authorization is required
          </h2>
          <div className="animate-fade-in-up delay-1">
            <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
              To publish content to a TikTok account, the account owner must
              explicitly authorize the application. This follows TikTok&apos;s
              standard OAuth 2.0 authorization flow with PKCE (Proof Key for
              Code Exchange) for enhanced security.
            </p>
          </div>

          <div
            className="card animate-fade-in-up delay-2"
            style={{ marginBottom: "2rem" }}
          >
            <h3 className="heading-sm" style={{ marginBottom: "1.25rem" }}>
              Authorization Flow
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "User initiates TikTok connection from the application",
                "User is redirected to TikTok's authorization page",
                "User reviews and grants the requested permissions",
                "TikTok redirects back with an authorization code",
                "The application exchanges the code for access tokens using PKCE verification",
                "Tokens are securely stored server-side in Firestore",
              ].map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.875rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "1.75rem",
                      height: "1.75rem",
                      borderRadius: "0.375rem",
                      background: "var(--accent-glow)",
                      color: "var(--accent-primary)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="body-md" style={{ margin: 0 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Permission */}
      <section className="section-spacing" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-narrow">
          <h2 className="heading-lg animate-fade-in-up" style={{ marginBottom: "1.5rem" }}>
            Required publishing permission
          </h2>
          <div className="animate-fade-in-up delay-1">
            <p className="body-lg" style={{ marginBottom: "2rem" }}>
              Reel Pipeline requests only the permissions necessary for video
              publishing. No unrelated permissions are requested.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            <div className="card animate-fade-in-up delay-1">
              <code
                style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  background: "var(--bg-tertiary)",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  color: "var(--accent-primary)",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                video.upload
              </code>
              <p className="body-md">
                Allows the application to upload video files to TikTok&apos;s servers
                on behalf of the authorized user.
              </p>
            </div>
            <div className="card animate-fade-in-up delay-2">
              <code
                style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  background: "var(--bg-tertiary)",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  color: "var(--accent-primary)",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                video.publish
              </code>
              <p className="body-md">
                Allows the application to publish uploaded video content to the
                authorized user&apos;s TikTok account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Handling */}
      <section className="section-spacing">
        <div className="container-narrow">
          <h2 className="heading-lg animate-fade-in-up" style={{ marginBottom: "1.5rem" }}>
            What happens to your content
          </h2>
          <div className="animate-fade-in-up delay-1">
            <div className="card" style={{ marginBottom: "1.5rem" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  "Videos are generated locally by the Reel Pipeline system from your managed content.",
                  "When publishing to TikTok, the video file is transferred directly to TikTok's upload endpoint via their API.",
                  "The application includes a title/caption with each video submission as provided by the content source.",
                  "Privacy level and other post settings are determined by the creator's available options as returned by TikTok's API — the application does not force a specific privacy level.",
                  "The application does not store or cache your published TikTok content. Only the publish ID and publishing status are retained for tracking.",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent-primary)",
                        fontSize: "1.25rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        marginTop: "0.125rem",
                      }}
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <p className="body-md" style={{ margin: 0 }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="section-spacing" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-narrow">
          <div
            className="card-glass animate-fade-in-up"
            style={{ textAlign: "center", padding: "3rem 2rem" }}
          >
            <div className="badge badge-warning" style={{ marginBottom: "1.5rem" }}>
              Current Status
            </div>
            <h2 className="heading-md" style={{ marginBottom: "1rem" }}>
              Pending TikTok App Review
            </h2>
            <p
              className="body-lg"
              style={{ maxWidth: "520px", margin: "0 auto 1.5rem" }}
            >
              The TikTok integration is fully implemented and tested in
              sandbox mode. Full public publishing capability requires approval
              through TikTok&apos;s official App Review process, which is currently
              in progress.
            </p>
            <p className="body-sm" style={{ maxWidth: "480px", margin: "0 auto" }}>
              Reel Pipeline is not officially affiliated with, endorsed by, or
              partnered with TikTok. TikTok is a trademark of ByteDance Ltd.
              The integration uses TikTok&apos;s publicly available developer APIs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <div className="animate-fade-in-up">
            <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
              Questions about the integration?
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link href="/contact" className="btn-primary" id="tiktok-cta-contact">
                Contact Us
              </Link>
              <Link href="/privacy" className="btn-secondary" id="tiktok-cta-privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
