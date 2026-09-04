"use client";

export default function ContactForm() {
  return (
    <form
      id="contact-form"
      action="https://formspree.io/f/placeholder"
      method="POST"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <div>
        <label
          htmlFor="contact-name"
          style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "0.5rem",
          }}
        >
          Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          placeholder="Your name"
          style={{
            width: "100%",
            padding: "0.875rem 1rem",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-default)",
            borderRadius: "0.625rem",
            color: "var(--text-primary)",
            fontSize: "1rem",
            outline: "none",
            transition: "border-color var(--duration-fast) var(--ease-out)",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "var(--accent-primary)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "var(--border-default)")
          }
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "0.5rem",
          }}
        >
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          placeholder="your@email.com"
          style={{
            width: "100%",
            padding: "0.875rem 1rem",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-default)",
            borderRadius: "0.625rem",
            color: "var(--text-primary)",
            fontSize: "1rem",
            outline: "none",
            transition: "border-color var(--duration-fast) var(--ease-out)",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "var(--accent-primary)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "var(--border-default)")
          }
        />
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "0.5rem",
          }}
        >
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          required
          style={{
            width: "100%",
            padding: "0.875rem 1rem",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-default)",
            borderRadius: "0.625rem",
            color: "var(--text-primary)",
            fontSize: "1rem",
            outline: "none",
            cursor: "pointer",
            transition: "border-color var(--duration-fast) var(--ease-out)",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "var(--accent-primary)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "var(--border-default)")
          }
        >
          <option value="">Select a topic</option>
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="tiktok">TikTok Integration</option>
          <option value="privacy">Privacy & Data</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: "0.5rem",
          }}
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          style={{
            width: "100%",
            padding: "0.875rem 1rem",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-default)",
            borderRadius: "0.625rem",
            color: "var(--text-primary)",
            fontSize: "1rem",
            outline: "none",
            resize: "vertical",
            fontFamily: "inherit",
            transition: "border-color var(--duration-fast) var(--ease-out)",
          }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "var(--accent-primary)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "var(--border-default)")
          }
        />
      </div>

      <button
        type="submit"
        className="btn-primary"
        id="contact-submit"
        style={{ alignSelf: "flex-start" }}
      >
        Send Message →
      </button>

      <p className="body-sm" style={{ marginTop: "-0.5rem" }}>
        Your message will be sent via a secure form service. We aim to respond
        within 2 business days.
      </p>
    </form>
  );
}
