"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about",      label: "About"      },
  { href: "/experience", label: "Experience" },
  { href: "/projects",   label: "Projects"   },
  { href: "/skills",     label: "Skills"     },
  { href: "/contact",    label: "Contact"    },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="nav-shell"
      style={{
        background: scrolled ? "rgba(10,10,10,0.98)" : "rgba(10,10,10,0.88)",
        borderBottom: scrolled ? "1px solid rgba(212,183,101,0.18)" : "1px solid transparent",
      }}
    >
      <div className="nav-left">
        <Link href="/" className="brand-link">
          Navya Abrol
        </Link>
        <span className="brand-note">Robotics · Autonomy</span>
      </div>

      <div className="desktop-nav nav-links">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${pathname === item.href ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "CLOSE" : "MENU"}
      </button>

      {menuOpen && (
        <div className="mobile-menu-panel">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
