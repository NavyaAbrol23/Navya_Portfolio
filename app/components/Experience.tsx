"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    role:        "Research Intern",
    org:         "Thapar Institute of Engineering & Technology",
    location:    "Patiala, Punjab",
    period:      "Feb 2026 — Present",
    status:      "active",
    type:        "Research",
    description: "Designing and developing an AI-driven ROS2 architecture with integrated perception and path planning for autonomous solar cleaning systems.",
    tags:        ["ROS2", "AI Perception", "Path Planning", "Autonomous Systems"],
  },
  {
    role:        "Research Intern — SPFA 2025",
    org:         "Indian Institute of Technology, Delhi",
    location:    "New Delhi",
    period:      "Jun 2025 — Aug 2025",
    status:      "completed",
    type:        "IIT Research",
    mentor:      "Dr. Rama Krishna K",
    description: "Conducted static analysis of multi-degree-of-freedom planar mechanisms using kinematic coefficients under IIT Delhi's Summer Programme for Future Academicians.",
    tags:        ["Kinematic Analysis", "Mechanism Design", "GeoGebra"],
  },
  {
    role:        "Exploration Intern",
    org:         "Enord, IIITD — Okhla",
    location:    "Delhi NCR",
    period:      "Jun 2024 — Aug 2024",
    status:      "completed",
    type:        "Industry",
    description: "Contributed to user manual documentation, supported hardware assembly and testing, and proposed process improvements through 6S methodology research.",
    tags:        ["Hardware Assembly", "6S Methodology", "Documentation", "Testing"],
  },
];

const education = [
  {
    institution: "Thapar Institute of Engineering & Technology",
    degree:      "B.Tech — Mechatronics Engineering",
    period:      "2023 — 2027",
    location:    "Patiala, Punjab",
    status:      "current",
  },
  {
    institution: "Delhi Public School, R.K. Puram",
    degree:      "CBSE — Class XII",
    period:      "2021 — 2023",
    location:    "New Delhi",
    status:      "completed",
  },
  {
    institution: "Holy Child Sr. Sec. School",
    degree:      "CBSE — Class X",
    period:      "2011 — 2021",
    location:    "New Delhi",
    status:      "completed",
  },
];

export default function Experience() {
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
    <section
      id="experience"
      ref={ref}
      style={{ padding: "9rem 0", background: "var(--bg-2)", position: "relative" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 3rem" }}>
        
        {/* ── Header ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "5rem" }}>
          <div>
            <div className="reveal section-label" style={{ marginBottom: "1.2rem" }}>Experience</div>
            <h2 className="reveal" style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    700,
              fontSize:      "clamp(2.2rem, 4vw, 3.2rem)",
              lineHeight:    1,
              letterSpacing: "-0.03em",
              color:         "var(--text-primary)",
            }}>
              Research &
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-secondary)" }}>Industry</span>
            </h2>
          </div>
        </div>

        {/* ── Experience list ── */}
        <div style={{ marginBottom: "7rem" }}>
          {experiences.map((e, i) => (
            <div
              key={i}
              className={`reveal reveal-stagger-${i + 1}`}
              style={{
                display:       "grid",
                gridTemplateColumns: "180px 1fr auto",
                gap:           "3rem",
                alignItems:    "start",
                padding:       "2.5rem 0",
                borderTop:     "1px solid var(--border)",
              }}
              onMouseEnter={ev => (ev.currentTarget.style.background = "rgba(255,255,255,0.015)")}
              onMouseLeave={ev => (ev.currentTarget.style.background = "transparent")}
            >
              {/* Left: time + type */}
              <div>
                <div style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "1rem",
                  color:         "var(--text-muted)",
                  letterSpacing: "0.12em",
                  marginBottom:  "0.5rem",
                }}>
                  {e.period}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {e.status === "active" && <div className="active-dot" />}
                  <span style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      "0.9rem",
                    color:         e.status === "active" ? "var(--green)" : "var(--text-muted)",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}>{e.type}</span>
                </div>
              </div>

              {/* Center: role details */}
              <div>
                <div style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    600,
                  fontSize:      "1.4rem",
                  color:         "var(--text-primary)",
                  letterSpacing: "-0.015em",
                  marginBottom:  "0.25rem",
                  lineHeight:    1.2,
                }}>
                  {e.role}
                </div>
                <div style={{
                  fontFamily:    "var(--font-display)",
                  fontStyle:     "italic",
                  fontWeight:    400,
                  fontSize:      "1rem",
                  color:         "var(--text-secondary)",
                  marginBottom:  "0.4rem",
                }}>
                  {e.org}
                </div>
                {e.mentor && (
                  <div style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      "0.85rem",
                    color:         "rgba(232,228,222,0.7)",
                    letterSpacing: "0.08em",
                    marginBottom:  "1.2rem",
                  }}>
                    Mentor: {e.mentor}
                  </div>
                )}
                <p style={{
                  fontFamily:  "var(--font-sans)",
                  fontSize:    "1.3rem",
                  color:       "var(--text-secondary)",
                  lineHeight:  1.95,
                  fontWeight:  300,
                  maxWidth:    "520px",
                  marginBottom:"1.2rem",
                  textAlign:   "justify",
                }}>
                  {e.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                  {e.tags.map(t => <span key={t} className="skill-pill">{t}</span>)}
                </div>
              </div>

              {/* Right: location */}
              <div style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.92rem",
                color:         "var(--text-muted)",
                letterSpacing: "0.1em",
                textAlign:     "right",
                paddingTop:    "2px",
              }}>
                {e.location}
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

        {/* ── Education ── */}
        <div>
          <div className="reveal section-label" style={{ marginBottom: "3rem" }}>Education</div>
          {education.map((ed, i) => (
            <div
              key={i}
              className={`reveal reveal-stagger-${i + 1}`}
              style={{
                display:       "grid",
                gridTemplateColumns: "180px 1fr auto",
                gap:           "3rem",
                alignItems:    "center",
                padding:       "1.8rem 0",
                borderTop:     "1px solid var(--border)",
              }}
            >
              <div style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.95rem",
                color:         "rgba(232,228,222,0.8)",
                letterSpacing: "0.12em",
              }}>
                {ed.period}
              </div>
              <div>
                <div style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    ed.status === "current" ? 600 : 400,
                  fontSize:      "1.25rem",
                  color:         ed.status === "current" ? "var(--text-primary)" : "var(--text-secondary)",
                  marginBottom:  "0.2rem",
                  letterSpacing: "-0.01em",
                }}>
                  {ed.institution}
                </div>
                <div style={{
                  fontFamily:    "var(--font-sans)",
                  fontSize:      "1rem",
                  color:         "var(--text-muted)",
                  fontWeight:    300,
                }}>
                  {ed.degree}
                </div>
              </div>
              <div style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.9rem",
                color:         "var(--text-muted)",
                letterSpacing: "0.1em",
                textAlign:     "right",
              }}>
                {ed.location}
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience > div > div[style*="grid-template-columns: 180px"] { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
          #experience > div > div > div[style*="grid-template-columns: 180px"] { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
        }
      `}</style>
    </section>
  );
}
