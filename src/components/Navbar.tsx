"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/tiktok", label: "TikTok" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav
      id="main-nav"
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled
          ? "rgba(11, 13, 17, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
        transition: "all var(--duration-normal) var(--ease-out)",
      }}
    >
      <div
        className="container-main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4.5rem",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
            color: "var(--text-primary)",
            fontWeight: 700,
            fontSize: "1.25rem",
            letterSpacing: "-0.02em",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2.25rem",
              height: "2.25rem",
              borderRadius: "0.5rem",
              background:
                "linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))",
              fontSize: "1rem",
            }}
            aria-hidden="true"
          >
            ▶
          </span>
          <span>
            Reel{" "}
            <span style={{ color: "var(--accent-primary)" }}>Pipeline</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="mobile-menu-btn"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "8px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: "22px",
              height: "2px",
              background: "var(--text-primary)",
              borderRadius: "1px",
              transition: "all var(--duration-fast) var(--ease-out)",
              transform: isOpen
                ? "rotate(45deg) translateY(5px)"
                : "none",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              background: "var(--text-primary)",
              borderRadius: "1px",
              transition: "all var(--duration-fast) var(--ease-out)",
              opacity: isOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              background: "var(--text-primary)",
              borderRadius: "1px",
              transition: "all var(--duration-fast) var(--ease-out)",
              transform: isOpen
                ? "rotate(-45deg) translateY(-5px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="menu"
        style={{
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          gap: "0.25rem",
          padding: "1rem 1.5rem 1.5rem",
          background: "var(--bg-secondary)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
        className="mobile-menu-panel"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            role="menuitem"
            onClick={() => setIsOpen(false)}
            style={{
              display: "block",
              padding: "0.75rem 1rem",
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 500,
              borderRadius: "0.5rem",
              transition: "all var(--duration-fast) var(--ease-out)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--bg-tertiary)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Responsive styles */}
      <style jsx global>{`
        .desktop-nav {
          display: flex !important;
        }
        .mobile-menu-btn {
          display: none !important;
        }
        .mobile-menu-panel {
          display: none !important;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .mobile-menu-panel {
            display: ${isOpen ? "flex" : "none"} !important;
          }
        }
      `}</style>
    </nav>
  );
}
