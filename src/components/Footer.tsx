"use client";

import Link from "next/link";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/tiktok", label: "TikTok Integration" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      role="contentinfo"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        marginTop: "auto",
      }}
    >
      <div className="container-main" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
        {/* Footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                textDecoration: "none",
                color: "var(--text-primary)",
                fontWeight: 700,
                fontSize: "1.125rem",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "0.5rem",
                  background:
                    "linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))",
                  fontSize: "0.875rem",
                }}
                aria-hidden="true"
              >
                ▶
              </span>
              Reel Pipeline
            </Link>
            <p
              className="body-sm"
              style={{ maxWidth: "280px", marginTop: "0.75rem" }}
            >
              Automated short-form video creation and multi-platform social
              publishing pipeline.
            </p>
          </div>

          {/* Product column */}
          <div>
            <h3
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              Product
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {productLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.625rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.9375rem",
                      transition: "color var(--duration-fast) var(--ease-out)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {companyLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.625rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.9375rem",
                      transition: "color var(--duration-fast) var(--ease-out)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              Legal
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {legalLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.625rem" }}>
                  <Link
                    href={link.href}
                    id={`footer-${link.href.slice(1)}-link`}
                    style={{
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.9375rem",
                      transition: "color var(--duration-fast) var(--ease-out)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--text-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p className="body-sm" style={{ margin: 0 }}>
            © {currentYear} Reel Pipeline. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link
              href="/privacy"
              className="body-sm"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color var(--duration-fast) var(--ease-out)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="body-sm"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color var(--duration-fast) var(--ease-out)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
