"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "About Us", href: "/#about" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Sterling Studio home">
          <span className="brand-wordmark">Sterling Studio</span>
        </a>

        <div
          className={["nav-center", menuOpen ? "open" : ""]
            .filter(Boolean)
            .join(" ")}
          id="mobile-navigation"
        >
          {navItems.map((item) => (
            <a
              className="nav-link"
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="button button-dark nav-cta" href="/#trial">
            Book Consultation
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
