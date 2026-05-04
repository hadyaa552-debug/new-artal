"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "عن المشروع", href: "#about" },
  { label: "الوحدات", href: "#units" },
  { label: "أنظمة السداد", href: "#payment" },
  { label: "الموقع", href: "#location" },
  { label: "الخدمات", href: "#amenities" },
  { label: "المطور", href: "#developer" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-lg shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-accent tracking-wider">
                PLATÓ
              </span>
              <span className="text-[10px] text-cream/50 tracking-widest uppercase">
                Artal Developments
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-cream/70 hover:text-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:01116663367"
              className="hidden sm:flex items-center gap-2 bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent px-4 py-2 rounded-sm text-sm transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold" dir="ltr">01116663367</span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-cream/80 hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-primary/98 backdrop-blur-xl border-t border-accent/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 text-cream/80 hover:text-accent hover:bg-accent/5 rounded transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:01116663367"
            className="flex items-center gap-2 py-3 px-4 text-accent"
          >
            <Phone className="w-4 h-4" />
            <span dir="ltr">01116663367</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
