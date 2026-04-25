"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id:          "01",
    title:       "Audio-Visual-Thermal Fusion for Rescue Robot",
    period:      "Feb 2026 — Ongoing",
    status:      "active",
    category:    "Perception · Navigation",
    description: "Multi-modal perception system using RGB, thermal, and audio streams in ROS2 + NVIDIA Isaac for autonomous navigation in low-visibility rescue environments. Designed to operate where single-sensor approaches catastrophically fail.",
    highlights:  [
      "Multi-modal sensor fusion: RGB, thermal imaging, audio",
      "ROS2 + NVIDIA Isaac Sim integration",
      "Low-visibility autonomous navigation pipeline",
    ],
    tags:   ["ROS2", "NVIDIA Isaac", "Sensor Fusion", "Thermal Imaging", "Audio Processing", "SLAM"],
  },
  {
    id:          "02",
    title:       "Autonomous Mobile Robot",
    period:      "Feb 2025 — Ongoing",
    status:      "active",
    category:    "Navigation · Embedded",
    description: "Designed in Creo Parametric. Deployed using ROS2 with EKF-based state estimation through IMU and encoder fusion. Real-time UART communication pipeline between ESP32 and onboard compute, with sensor drift diagnosis and resolution under live deployment.",
    highlights:  [
      "EKF-based state estimation: IMU + encoder fusion",
      "Real-time UART pipeline: ESP32 ↔ onboard compute",
      "Sensor drift diagnosis and resolution in live deployment",
    ],
    tags:   ["ROS2", "EKF", "IMU Fusion", "ESP32", "UART", "Nav2"],
    driveLink: "https://drive.google.com/drive/folders/17V314iIic4ATRtoffKKzCP9IuXrptEql?usp=sharing",
  },
  {
    id:          "03",
    title:       "KAIRA — Intelligent Robotic Assistance",
    period:      "Oct 2025 — Nov 2025",
    status:      "completed",
    category:    "HRI · Vision",
    description: "ROS-based autonomous robot with integrated navigation and face recognition. Full perception pipeline deployed with Jetson Nano, environmental sensors, and ESP32. Delivered 100+ live interactions on campus and recognized 25+ unique individuals in real operational settings.",
    highlights:  [
      "Face recognition pipeline built with OpenCV",
      "Full-stack hardware: Jetson Nano + ESP32 + sensors",
      "100+ live human-robot interactions",
      "Recognized 25+ unique individuals in real deployment",
    ],
    tags:   ["ROS", "OpenCV", "Face Recognition", "Jetson Nano", "ESP32", "HRI"],
    driveLink: "https://drive.google.com/drive/folders/1A8Bst0Sz1v5UReIYQ_-Hh3dhGV7q8Zw2?usp=sharing",
  },
  {
    id:          "04",
    title:       "Facial Recognition Attendance System",
    period:      "March 2025",
    status:      "completed",
    category:    "Vision · Embedded",
    description: "Raspberry Pi-based face recognition system with MySQL backend. Achieved approximately 80% reduction in false attendance entries through improved recognition accuracy in real-world deployment conditions.",
    highlights:  [
      "~80% reduction in false attendance entries",
      "MySQL database integration",
      "Raspberry Pi embedded deployment",
    ],
    tags:   ["Raspberry Pi", "OpenCV", "MySQL", "Python"],
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.04 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={{ padding: "9rem 0", position: "relative", background: "var(--bg)" }}>
      
      {/* Section header */}
      <div style={{ padding: "0 3rem", marginBottom: "4rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem" }}>
          <div>
            <div className="reveal section-label" style={{ marginBottom: "1.2rem" }}>Selected Projects</div>
            <h2 className="reveal" style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    700,
              fontSize:      "clamp(2.2rem, 4vw, 3.4rem)",
              lineHeight:    1,
              letterSpacing: "-0.03em",
              color:         "var(--text-primary)",
            }}>
              Systems Built for
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-secondary)" }}>the Real World</span>
            </h2>
          </div>
          <div className="reveal" style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "0.82rem",
            color:         "var(--text-muted)",
            letterSpacing: "0.12em",
            textAlign:     "right",
            lineHeight:    1.8,
          }}>
            {projects.length} Projects
          </div>
        </div>
      </div>

      {/* Project rows — editorial horizontal list */}
      <div>
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="reveal"
            style={{
              borderBottom:  "1px solid var(--border)",
              transition:    "background 0.3s ease",
              cursor:        "pointer",
              background:    expanded === i ? "var(--surface)" : "transparent",
            }}
            onClick={() => setExpanded(expanded === i ? null : i)}
            onMouseEnter={e => {
              if (expanded !== i) (e.currentTarget as HTMLElement).style.background = "var(--bg-2)";
            }}
            onMouseLeave={e => {
              if (expanded !== i) (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            {/* Row header — always visible */}
            <div style={{
              display:        "grid",
              gridTemplateColumns: "80px 1fr auto auto 60px",
              alignItems:     "center",
              gap:            "2rem",
              padding:        "1.8rem 3rem",
            }} className="project-row-inner">
              {/* Index */}
              <div style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "1.1rem",
                color:         "rgba(232,228,222,0.8)",
                letterSpacing: "0.12em",
              }}>
                {p.id}
              </div>

              {/* Title */}
              <div>
                <div style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    600,
                  fontSize:      "clamp(1.15rem, 2vw, 1.45rem)",
                  color:         "var(--text-primary)",
                  letterSpacing: "-0.01em",
                  lineHeight:    1.2,
                  marginBottom:  "0.3rem",
                }}>
                  {p.title}
                </div>
                <div style={{
                  fontFamily:    "var(--font-mono)",
                  fontSize:      "0.9rem",
                  color:         "var(--text-muted)",
                  letterSpacing: "0.1em",
                }}>
                  {p.category}
                </div>
              </div>

              {/* Period */}
              <div style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "1.15rem",
                whiteSpace:    "nowrap",
              }}>
                {p.period}
              </div>

              {/* Status */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {p.status === "active" ? (
                  <>
                    <div className="active-dot" />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.86rem", color: "var(--green)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Active</span>
                  </>
                ) : (
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.86rem", color: "var(--text-muted)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Done</span>
                )}
              </div>

              {/* Expand toggle */}
              <div style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "0.88rem",
                color:         "var(--text-muted)",
                textAlign:     "right",
                transition:    "transform 0.3s ease, color 0.2s",
                transform:     expanded === i ? "rotate(45deg)" : "none",
              }}>
                +
              </div>
            </div>

            {/* Expanded detail */}
            <div style={{
              maxHeight:  expanded === i ? "500px" : "0",
              overflow:   "hidden",
              transition: "max-height 0.55s cubic-bezier(0.16,1,0.3,1)",
            }}>
              <div style={{
                display:             "grid",
                gridTemplateColumns: "80px 1fr 1fr",
                gap:                 "2rem",
                padding:             "0 3rem 2.5rem 3rem",
              }} className="project-detail-inner">
                <div /> {/* spacer for index col */}

                {/* Description */}
                <div>
                  <p style={{
                    fontFamily:  "var(--font-sans)",
                    fontSize:    "1.2rem",
                    color:       "var(--text-secondary)",
                    lineHeight:  1.95,
                    fontWeight:  300,
                    marginBottom:"1.5rem",
                    textAlign:   "justify",
                  }}>
                    {p.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: p.driveLink ? "1.25rem" : "0" }}>
                    {p.tags.map(tag => (
                      <span key={tag} className="skill-pill" style={{ fontSize: "0.85rem" }}>{tag}</span>
                    ))}
                  </div>
                  {/* Drive link button — only shown if driveLink is set */}
                  {p.driveLink && (
                    <a
                      href={p.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{
                        display:       "inline-flex",
                        alignItems:    "center",
                        gap:           "7px",
                        padding:       "8px 18px",
                        border:        "1px solid var(--border-mid)",
                        background:    "transparent",
                        color:         "var(--text-secondary)",
                        fontFamily:    "var(--font-mono)",
                        fontSize:      "0.72rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        textDecoration:"none",
                        transition:    "all 0.22s ease",
                        cursor:        "pointer",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                        (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-mid)";
                        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Open Drive
                    </a>
                  )}
                </div>

                {/* Highlights */}
                <div>
                  <div style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      "0.7rem",
                    color:         "var(--text-muted)",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    marginBottom:  "1rem",
                  }}>
                    Key Work
                  </div>
                  {p.highlights.map((h, j) => (
                    <div key={j} style={{
                      display:      "flex",
                      gap:          "1rem",
                      marginBottom: "0.7rem",
                      alignItems:   "flex-start",
                    }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "rgba(232,228,222,0.8)", marginTop: "3px", flexShrink: 0 }}>{String(j + 1).padStart(2, "0")}</span>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.75, fontWeight: 300 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-row-inner { grid-template-columns: 40px 1fr 40px !important; gap: 1rem !important; padding: 1.4rem 1.5rem !important; }
          .project-row-inner > *:nth-child(3), .project-row-inner > *:nth-child(4) { display: none; }
          .project-detail-inner { grid-template-columns: 1fr !important; padding: 0 1.5rem 2rem !important; }
          .project-detail-inner > *:first-child { display: none; }
        }
      `}</style>
    </section>
  );
}
