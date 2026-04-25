"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    label:  "Robotics & Autonomy",
    skills: ["ROS2 (Humble/Jazzy)", "Nav2", "Extended Kalman Filter", "Sensor Fusion", "Path Planning", "SLAM", "Autonomous Navigation", "HRI"],
  },
  {
    label:  "Programming",
    skills: ["Python", "C/C++", "Linux", "Git", "Bash"],
  },
  {
    label:  "AI & Computer Vision",
    skills: ["OpenCV", "PyTorch", "NumPy", "Pandas", "Scikit-learn", "Face Recognition"],
  },
  {
    label:  "Hardware & Embedded",
    skills: ["Raspberry Pi", "ESP32", "Teensy", "UART / I2C", "PWM Motor Control", "Embedded Integration"],
  },
  {
    label:  "Engineering Tools",
    skills: ["MATLAB", "Simulink", "Creo Parametric"],
  },
  {
    label:  "Currently Refining",
    skills: ["SLAM (Advanced)", "VLMs", "NVIDIA Isaac"],
  },
];

export default function Skills() {
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
    <section id="skills" ref={ref} style={{ padding: "9rem 0", background: "var(--bg)", position: "relative" }}>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 3rem" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem", marginBottom: "5rem" }}>
          <div>
            <div className="reveal section-label" style={{ marginBottom: "1.2rem" }}>Technical Skills</div>
            <h2 className="reveal" style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    700,
              fontSize:      "clamp(2.2rem, 4vw, 3.2rem)",
              lineHeight:    1,
              letterSpacing: "-0.03em",
              color:         "var(--text-primary)",
            }}>
              Stack &{" "}
              <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-secondary)" }}>Toolchain</span>
            </h2>
          </div>
          <div className="reveal" style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "0.7rem",
            color:         "var(--text-muted)",
            letterSpacing: "0.12em",
            textAlign:     "right",
            lineHeight:    1.8,
          }}>
            {skillGroups.reduce((a, g) => a + g.skills.length, 0)} Technologies<br />6 Domains
          </div>
        </div>

        {/* Skills as clean table rows */}
        <div>
          {skillGroups.map((g, i) => (
            <div
              key={g.label}
              className={`reveal reveal-stagger-${(i % 4) + 1}`}
              style={{
                display:    "grid",
                gridTemplateColumns: "200px 1fr",
                gap:        "3rem",
                padding:    "2rem 0",
                borderBottom: "1px solid var(--border)",
                alignItems: "start",
              }}
            >
              <div style={{
                fontFamily:    "var(--font-display)",
                fontStyle:     "italic",
                fontWeight:    400,
                fontSize:      "1.1rem",
                color:         "var(--text-secondary)",
                lineHeight:    1.3,
                paddingTop:    "2px",
              }}>
                {g.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {g.skills.map(s => (
                  <span
                    key={s}
                    className="skill-pill"
                    style={{ cursor: "default" }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .reveal[style*="grid-template-columns: 200px"] { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
        }
      `}</style>
    </section>
  );
}
