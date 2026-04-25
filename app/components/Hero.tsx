"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const RESUME_URL = "/Navya_Abrol_Resume.pdf";
const phrases = [
  "ROS2 Architecture",
  "Sensor Fusion",
  "Autonomous Navigation",
  "EKF State Estimation",
  "SLAM",
  "Embedded Systems",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phrases = [
    "ROS2 Architecture",
    "Sensor Fusion",
    "Autonomous Navigation",
    "EKF State Estimation",
    "SLAM",
    "Embedded Systems",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting && displayText === currentPhrase) {
      const hold = window.setTimeout(() => setIsDeleting(true), 1200);
      return () => window.clearTimeout(hold);
    }

    if (isDeleting && displayText === "") {
      const next = window.setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhraseIndex((index) => (index + 1) % phrases.length);
      }, 300);
      return () => window.clearTimeout(next);
    }

    const timeout = window.setTimeout(() => {
      const nextLength = displayText.length + (isDeleting ? -1 : 1);
      setDisplayText(currentPhrase.slice(0, nextLength));
    }, isDeleting ? 40 : 85);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex, phrases]);

  // Subtle parallax offset for photo panel
  const parallaxOffset = scrollY * 0.18;

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight:  "100vh",
        display:    "grid",
        gridTemplateColumns: "0.92fr 1.08fr",
        position:   "relative",
        overflow:   "hidden",
      }}
      className="hero-section"
    >
      {/* ── LEFT: Full-bleed photo panel ── */}
      <div
        className="hero-photo-panel"
        style={{
          position:   "relative",
          overflow:   "hidden",
          background: "#080808",
          minHeight:  "100vh",
        }}
      >
        {/* Photo fills the entire left panel with parallax */}
        <div style={{
          position:  "absolute",
          inset:     0,
          opacity:   mounted ? 1 : 0,
          transform: `translateY(${parallaxOffset}px)`,
          transition: mounted ? "opacity 1.4s cubic-bezier(0.16,1,0.3,1)" : "none",
        }}>
          <Image
            src="/navya-nobg.png"
            alt="Navya Abrol"
            fill
            style={{
              objectFit:      "cover",
              objectPosition: "center top",
            }}
            priority
          />
          {/* Vertical gradient fade from bottom */}
          <div style={{
            position:   "absolute",
            inset:      0,
            background: "linear-gradient(to top, rgba(10,10,10,0.65) 0%, transparent 55%)",
            pointerEvents: "none",
          }} />
          {/* Right-edge blend into right panel */}
          <div style={{
            position:   "absolute",
            top:        0,
            right:      0,
            bottom:     0,
            width:      "30%",
            background: "linear-gradient(to right, transparent, rgba(10,10,10,0.88))",
            pointerEvents: "none",
          }} />
        </div>

        {/* Top-left metadata — above the picture, below navbar */}
        <div style={{
          position:  "absolute",
          top:       "5rem",
          left:      "3rem",
          opacity:   mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(12px)",
          transition:"opacity 0.9s ease 0.9s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.9s",
          zIndex:    10,
        }}>
          <div style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "0.68rem",
            color:         "rgba(232,228,222,0.88)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom:  "0.5rem",
          }}>
            TIET, Patiala — B.Tech Mechatronics
          </div>
          <div style={{
            display:    "flex",
            alignItems: "center",
            gap:        "8px",
          }}>
            <div className="active-dot" />
            <span style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "0.68rem",
              color:         "var(--green)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}>Looking for Internships</span>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Text panel ── */}
      <div
        style={{
          display:        "flex",
          flexDirection:  "column",
          justifyContent: "center",
          padding:        "8rem 4rem 8rem 5rem",
          paddingTop:     "calc(60px + 6rem)",
          position:       "relative",
        }}
      >
        {/* Main headline — editorial Playfair, large — staggered entrance */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{
            fontFamily:    "var(--font-display)",
            fontWeight:    400,
            fontStyle:     "italic",
            fontSize:      "clamp(1.2rem, 2.2vw, 1.6rem)",
            color:         "var(--text-secondary)",
            marginBottom:  "0.6rem",
            letterSpacing: "0.02em",
            opacity:       mounted ? 1 : 0,
            transform:     mounted ? "translateY(0)" : "translateY(16px)",
            transition:    "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}>
            Building machines that
          </div>
          {["Think,", "Navigate,"].map((word, i) => (
            <h1 key={word} style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    800,
              fontSize:      "clamp(3.8rem, 6.5vw, 6.4rem)",
              lineHeight:    0.93,
              letterSpacing: "-0.03em",
              color:         "var(--text-primary)",
              marginBottom:  "0.2rem",
              opacity:       mounted ? 1 : 0,
              transform:     mounted ? "translateY(0)" : "translateY(24px)",
              transition:    `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${0.28 + i * 0.12}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${0.28 + i * 0.12}s`,
            }}>
              {word}
            </h1>
          ))}
          <h1 style={{
            fontFamily:    "var(--font-display)",
            fontWeight:    400,
            fontStyle:     "italic",
            fontSize:      "clamp(4rem, 7vw, 6.2rem)",
            lineHeight:    0.93,
            letterSpacing: "-0.02em",
            color:         "var(--accent-2)",
            opacity:       mounted ? 1 : 0,
            transform:     mounted ? "translateY(0)" : "translateY(24px)",
            transition:    "opacity 0.75s cubic-bezier(0.16,1,0.3,1) 0.52s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.52s",
          }}>
            Deploy.
          </h1>
        </div>

        {/* Technical identity strip */}
        <div style={{
          fontFamily:    "var(--font-mono)",
            fontSize:      "18pt",
          marginBottom:  "3.5rem",
          lineHeight:    2.1,
          opacity:       mounted ? 1 : 0,
          transition:    "opacity 0.7s ease 0.72s",
        }}>
          <span className="typing-subheading">
            {displayText}
            <span className="typing-cursor" aria-hidden="true">|</span>
          </span>
        </div>

        {/* CTAs — text-forward, minimal */}
        <div style={{
          display:    "flex",
          gap:        "1.2rem",
          alignItems: "center",
          marginBottom:"4rem",
          opacity:    mounted ? 1 : 0,
          transform:  mounted ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.7s ease 0.82s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.82s",
        }}>
          <a href="/Navya_Abrol_Resume.pdf" download className="btn-primary" style={{ background: "var(--gold)", fontSize: "0.75rem", padding: "14px 32px" }}>
            Download Resume
          </a>
          <a href="projects" className="btn-secondary" style={{ fontSize: "0.75rem", padding: "14px 32px" }}>
            View Work
          </a>
        </div>

        {/* Social links — bottom, enlarged */}
        <div style={{
          display:    "flex",
          gap:        "3rem",
          alignItems: "center",
          paddingTop: "2rem",
          borderTop:  "1px solid var(--border)",
          opacity:    mounted ? 1 : 0,
          transition: "opacity 0.7s ease 0.96s",
        }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/navya-abrol-63357622b/" },
            { label: "navyaabrol.23@gmail.com", href: "mailto:navyaabrol.23@gmail.com" },
          ].map(s => (
            <a key={s.label} href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontFamily:    "var(--font-sans)",
                fontSize:      "1.2rem",
                color:         "var(--text-secondary)",
                textDecoration:"none",
                letterSpacing: "0.02em",
                transition:    "color 0.2s, letter-spacing 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                (e.currentTarget as HTMLElement).style.letterSpacing = "0.04em";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.letterSpacing = "0.02em";
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr !important;
          }
          .hero-photo-panel {
            min-height: 55vh !important;
          }
        }
      `}</style>
    </section>
  );
}
