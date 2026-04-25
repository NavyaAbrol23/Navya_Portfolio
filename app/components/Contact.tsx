"use client";
import { useEffect, useRef } from "react";

const RESUME_URL = "/Navya_Abrol_Resume.pdf";

const contacts = [
  { label: "Email",    value: "navyaabrol.23@gmail.com",   href: "mailto:navyaabrol.23@gmail.com" },
  { label: "LinkedIn", value: "navya-abrol-63357622b",     href: "https://www.linkedin.com/in/navya-abrol-63357622b/" },
  { label: "Phone",    value: "+91 9999657788",             href: "tel:+919999657788" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} style={{ padding: "11rem 0", position: "relative", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 3rem" }}>
        
        {/* Editorial contact layout */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:                 "6rem",
          alignItems:          "end",
          borderBottom:        "1px solid var(--border)",
          paddingBottom:       "5rem",
          marginBottom:        "4rem",
        }} className="contact-grid">
          {/* Left: big editorial CTA */}
          <div>
            <div className="reveal section-label" style={{ marginBottom: "2rem" }}>Contact</div>
            <h2 className="reveal" style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    700,
              fontSize:      "clamp(3.4rem, 7vw, 5.8rem)",
              lineHeight:    0.95,
              letterSpacing: "-0.04em",
              color:         "var(--text-primary)",
              marginBottom:  "2rem",
            }}>
              Let&apos;s build<br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-secondary)" }}>something real.</span>
            </h2>
            <p className="reveal reveal-stagger-1" style={{
              fontFamily:   "var(--font-sans)",
              fontWeight:   300,
              color:        "var(--text-secondary)",
              fontSize:     "1.25rem",
              lineHeight:   1.95,
              textAlign:    "justify",
              maxWidth:     "420px",
              marginBottom: "2.5rem",
            }}>
              Actively seeking research internships in robotics, autonomous systems, and AI-driven engineering. If you&apos;re building machines that matter, I&apos;d love to talk.
            </p>
            <div className="reveal reveal-stagger-2" style={{ display: "flex", gap: "1.2rem" }}>
              <a href={RESUME_URL} download className="btn-primary" style={{ fontSize: "0.75rem", padding: "14px 32px" }}>
                Download Resume
              </a>
              <a href="mailto:navyaabrol.23@gmail.com" className="btn-secondary" style={{ fontSize: "0.75rem", padding: "14px 32px" }}>
                Send Email
              </a>
            </div>
          </div>

          {/* Right: contact details */}
          <div>
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`reveal reveal-stagger-${i + 1}`}
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "space-between",
                  padding:        "1.6rem 0",
                  borderTop:      "1px solid var(--border)",
                  textDecoration: "none",
                  transition:     "all 0.22s ease",
                  gap:            "2rem",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.paddingLeft = "0.5rem";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                }}
              >
                <div style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "1.05rem",
                  color:         "var(--text-muted)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  width:         "85px",
                  flexShrink:    0,
                }}>
                  {c.label}
                </div>
                <div style={{
                  fontFamily:    "var(--font-sans)",
                  fontSize:      "1.15rem",
                  color:         "var(--text-secondary)",
                  fontWeight:    300,
                  flex:          1,
                }}>
                  {c.value}
                </div>
                <span style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.85rem",
                  color:         "var(--text-muted)",
                  transition:    "color 0.2s",
                }}>
                  ↗
                </span>
              </a>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </div>

        {/* Closing editorial line */}
        <div className="reveal" style={{
          display:    "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div style={{
            fontFamily:    "var(--font-display)",
            fontStyle:     "italic",
            fontSize:      "1.1rem",
            color:         "var(--text-muted)",
          }}>
            Navya Abrol — Robotics Developer
          </div>
          <div style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "1rem",
            color:         "var(--text-muted)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}>
            TIET, Patiala · 2024
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
