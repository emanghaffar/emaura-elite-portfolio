"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site-data";
import { ArrowUpRightIcon, CloseIcon, MenuIcon, SparkleIcon } from "./Icons";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-shell">
        <a className="brand-mark" href="#top" aria-label="Emaura Creatives home">
          <span className="brand-monogram">
            <SparkleIcon />
          </span>
          <span className="brand-copy">
            <strong>{siteConfig.brandName}</strong>
            <small>UGC · Creative Studio</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Start a project
          <ArrowUpRightIcon />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className={`mobile-panel ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
              <span>↗</span>
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Start a project
            <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
