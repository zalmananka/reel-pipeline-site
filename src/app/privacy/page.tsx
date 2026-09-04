import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Reel Pipeline Privacy Policy — how we handle your data, OAuth tokens, content processing, and third-party service interactions.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "5rem",
          paddingBottom: "3rem",
        }}
      >
        <div className="container-narrow" style={{ position: "relative" }}>
          <div className="animate-fade-in-up">
            <div className="badge" style={{ marginBottom: "1.5rem" }}>
              Legal
            </div>
            <h1 className="heading-xl" style={{ marginBottom: "1rem" }}>
              Privacy Policy
            </h1>
            <p className="body-sm">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing" style={{ paddingTop: "2rem" }}>
        <div className="container-narrow legal-content">
          <div className="animate-fade-in-up">
            <p className="body-lg" style={{ marginBottom: "2rem" }}>
              This Privacy Policy describes how Reel Pipeline (&quot;the
              Service&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, and
              handles information when you use our automated video creation and
              social media publishing service.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Content Data</h3>
            <ul>
              <li>
                Quotes, text content, and associated metadata (author,
                category) that you store in your Firebase Firestore collection
                for video generation.
              </li>
              <li>
                Generated video files, voiceover audio, subtitle data, and
                background media sourced during the production process.
              </li>
            </ul>

            <h3>Account and OAuth Data</h3>
            <ul>
              <li>
                <strong>TikTok:</strong> When you authorize the TikTok
                integration, we receive and store an access token, refresh
                token, token expiration timestamps, and your TikTok open ID.
                These are stored server-side in Firebase Firestore.
              </li>
              <li>
                <strong>Facebook / Instagram:</strong> A Page Access Token is
                used for publishing to Facebook Pages and linked Instagram
                Business accounts. This token is stored as a server-side
                environment variable.
              </li>
            </ul>

            <h3>Publishing Activity</h3>
            <ul>
              <li>
                Platform-specific publish IDs and publishing status (e.g.,
                published, processing, audit_required, failed) for each
                publishing attempt.
              </li>
              <li>
                Timestamps and metadata associated with each pipeline
                execution.
              </li>
            </ul>

            <h3>Contact Information</h3>
            <ul>
              <li>
                If you contact us through our contact form, we receive your
                name, email address, and message content.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>
                <strong>Video Generation:</strong> Content data is used
                exclusively to generate video reels as part of the production
                pipeline.
              </li>
              <li>
                <strong>Platform Publishing:</strong> OAuth tokens are used
                solely to authenticate and publish content to your authorized
                social media accounts.
              </li>
              <li>
                <strong>Status Tracking:</strong> Publishing metadata is used
                to track the status and outcome of each publishing attempt.
              </li>
              <li>
                <strong>Support:</strong> Contact form submissions are used
                only to respond to your inquiries.
              </li>
            </ul>

            <h2>3. Token Handling</h2>
            <p>
              OAuth tokens (access tokens, refresh tokens) are stored
              server-side in Firebase Firestore. They are never exposed in
              client-side code, frontend bundles, public directories, or
              application logs.
            </p>
            <ul>
              <li>
                TikTok tokens are automatically refreshed when they approach
                expiration, using the stored refresh token.
              </li>
              <li>
                If a refresh token expires, the user must re-authorize the
                application through the standard OAuth flow.
              </li>
              <li>
                Tokens are used exclusively for the authorized purpose
                (video publishing) and are not shared with third parties.
              </li>
            </ul>

            <h2>4. Content Processing</h2>
            <p>
              During video generation, the pipeline interacts with the
              following external services:
            </p>
            <ul>
              <li>
                <strong>Pexels:</strong> Background video footage is
                downloaded from Pexels based on category-specific search
                queries. Pexels&apos; own privacy policy applies to their service.
              </li>
              <li>
                <strong>Jamendo:</strong> Background music is downloaded from
                Jamendo. Jamendo&apos;s own privacy policy applies.
              </li>
              <li>
                <strong>Edge TTS (Microsoft):</strong> Text content is sent
                to Microsoft&apos;s Edge TTS service for voiceover generation.
                Microsoft&apos;s privacy policy applies to their speech service.
              </li>
            </ul>

            <h2>5. Third-Party Services</h2>
            <p>
              The Service integrates with the following third-party platforms
              for publishing:
            </p>
            <ul>
              <li>
                <strong>TikTok</strong> (ByteDance Ltd.) — Content Posting
                API for video publishing.{" "}
                <a
                  href="https://www.tiktok.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent-primary)" }}
                >
                  TikTok Privacy Policy
                </a>
              </li>
              <li>
                <strong>Meta</strong> (Facebook, Instagram) — Graph API for
                Reels publishing.{" "}
                <a
                  href="https://www.facebook.com/privacy/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Meta Privacy Policy
                </a>
              </li>
              <li>
                <strong>Firebase</strong> (Google) — Firestore for data
                storage.{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Firebase Privacy
                </a>
              </li>
            </ul>

            <h2>6. Data Retention and Deletion</h2>
            <ul>
              <li>
                Generated video files are stored locally in the pipeline
                output directory and are not automatically deleted.
              </li>
              <li>
                Temporary files (background video, music, TTS audio,
                subtitle files) are deleted after successful video
                composition.
              </li>
              <li>
                OAuth tokens are retained in Firestore until the user
                revokes authorization or requests deletion.
              </li>
              <li>
                Publishing metadata is retained in Firestore for status
                tracking purposes.
              </li>
              <li>
                You may request deletion of your data by contacting us
                through the{" "}
                <Link
                  href="/contact"
                  style={{ color: "var(--accent-primary)" }}
                >
                  contact form
                </Link>
                .
              </li>
            </ul>

            <h2>7. Security</h2>
            <ul>
              <li>
                OAuth tokens and API credentials are stored server-side and
                are never exposed in client-facing code or public assets.
              </li>
              <li>
                The TikTok OAuth flow uses PKCE (Proof Key for Code
                Exchange) for enhanced authorization security.
              </li>
              <li>
                Firebase Admin SDK credentials are stored as server-side
                configuration files excluded from version control.
              </li>
              <li>
                The <code>.gitignore</code> file is configured to prevent
                accidental exposure of <code>.env</code> files and
                credentials.
              </li>
            </ul>

            <h2>8. Cookies and Analytics</h2>
            <p>
              The Service does not currently use cookies for tracking or
              analytics purposes. If analytics are implemented in the future,
              this policy will be updated accordingly.
            </p>

            <h2>9. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                Request access to the personal data we hold about you.
              </li>
              <li>
                Request correction of inaccurate personal data.
              </li>
              <li>
                Request deletion of your personal data and revocation of
                platform authorizations.
              </li>
              <li>
                Revoke TikTok authorization at any time through your TikTok
                account settings.
              </li>
            </ul>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes
              will be reflected on this page with an updated &quot;Last
              updated&quot; date. Continued use of the Service after changes
              constitutes acceptance of the revised policy.
            </p>

            <h2>11. Contact</h2>
            <p>
              For privacy-related inquiries, data requests, or questions
              about this policy, please use our{" "}
              <Link
                href="/contact"
                style={{ color: "var(--accent-primary)" }}
              >
                contact form
              </Link>{" "}
              and select &quot;Privacy & Data&quot; as the subject.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
