"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "4+",   label: "Projects Deployed"  },
  { value: "3",    label: "Research Positions"  },
  { value: "3+",   label: "ROS2 Systems Built"  },
  { value: "2027", label: "B.Tech Expected"     },
];

export default function About() {
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
    <section id="about" ref={ref} style={{ padding: "9rem 0", position: "relative", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 3rem" }}>

        {/* ── Header row ── */}
        <div style={{
          display:       "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:           "6rem",
          alignItems:    "end",
          marginBottom:  "5rem",
          paddingBottom: "2.5rem",
          borderBottom:  "1px solid var(--border)",
        }} className="about-header-grid">
          <div>
            <div className="reveal section-label" style={{ marginBottom: "1.2rem" }}>About</div>
            <h2 className="reveal" style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    700,
              fontSize:      "clamp(2.6rem, 5vw, 4rem)",
              lineHeight:    0.95,
              letterSpacing: "-0.03em",
              color:         "var(--text-primary)",
            }}>
              Where Software
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-secondary)" }}>Meets Hardware</span>
            </h2>
          </div>
          {/* Stats — right column */}
          <div className="reveal" style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "0",
          }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding:      "2rem",
                  borderRight:  i % 2 === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{
                  fontFamily:    "var(--font-display)",
                  fontSize:      "3.6rem",
                  fontWeight:    700,
                  color:         "var(--text-primary)",
                  lineHeight:    1,
                  marginBottom:  "0.6rem",
                  letterSpacing: "-0.04em",
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.75rem",
                  color:         "rgba(232,228,222,0.75)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Body: two-column text layout ── */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:                 "5rem",
          alignItems:          "start",
        }} className="about-body-grid">
          
          {/* Left column — main bio */}
          <div>
            <p className="reveal" style={{
              fontFamily:   "var(--font-sans)",
              fontSize:     "1.4rem",
              color:        "var(--text-secondary)",
              lineHeight:   1.95,
              fontWeight:   300,
              marginBottom: "1.5rem",
              textAlign:    "justify",
            }}>
              I&apos;m a Mechatronics Engineering student and Robotics Developer focused on building autonomous systems that work beyond simulations and into real-world deployment.
            </p>
            <p className="reveal reveal-stagger-1" style={{
              fontFamily:  "var(--font-sans)",
              fontSize:    "1.3rem",
              color:       "var(--text-secondary)",
              lineHeight:  1.95,
              fontWeight:  300,
              textAlign:   "justify",
            }}>
              My work centers around ROS2 architecture, perception pipelines, sensor fusion, and autonomous navigation, solving practical problems in robot intelligence, localization, path planning, and human-robot interaction.
            </p>
          </div>

          {/* Right column — focus areas */}
          <div>
            <p className="reveal" style={{
              fontFamily:   "var(--font-sans)",
              fontSize:     "1.25rem",
              color:        "var(--text-secondary)",
              lineHeight:   1.95,
              fontWeight:   300,
              marginBottom: "2.5rem",
              textAlign:    "justify",
            }}>
              From deploying ROS2-based autonomous mobile robots using EKF-based state estimation to building multi-modal rescue robots with RGB, thermal, and audio fusion, I work on systems that demand reliability, adaptability, and real-time decision-making under uncertainty.
            </p>

            {/* Interest tags — minimal */}
            <div className="reveal reveal-stagger-1">
              <div style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.82rem",
                color:         "var(--text-muted)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom:  "1rem",
              }}>
                Research Interests
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["Human Robot Interaction", "Perception", "Mechanism", "Navigation", "Autonomous Systems", "Intelligent Robotic Systems"].map(tag => (
                  <span key={tag} className="skill-pill">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-header-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-body-grid   { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
