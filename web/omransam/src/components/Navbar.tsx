import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "صفحه اصلی" },
    { href: "/modules", label: "ماژول‌ها" },
    { href: "/pricing", label: "تعرفه" },
    { href: "/case-study", label: "نمونه پروژه" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,248,245,0.95)" : "#FFFFFF",
        borderBottom: "1px solid #E8E5E0",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" data-testid="link-home">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ background: "linear-gradient(135deg, #E0B84A, #B8860B)", boxShadow: "0 2px 8px rgba(184,134,11,0.3)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 21H21" stroke="#1F1E1C" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M5 21V8L12 3L19 8V21" stroke="#1F1E1C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 21V13H15V21" stroke="#1F1E1C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ color: "#2B2A28" }}>عمران‌سام</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{
                  color: location === link.href ? "#1a4d8c" : "#6B6863",
                  background: location === link.href ? "#EEF3FA" : "transparent",
                  fontWeight: location === link.href ? 600 : 500,
                }}
                data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" data-testid="link-contact-cta">
              <button
                className="px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 btn-gold"
              >
                درخواست مشاوره
              </button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#6B6863" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t" style={{ borderColor: "#E8E5E0", background: "#FFFFFF" }}>
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
                style={{
                  color: location === link.href ? "#1a4d8c" : "#6B6863",
                  background: location === link.href ? "#EEF3FA" : "transparent",
                }}
                data-testid={`link-mobile-nav-${link.href.replace("/", "") || "home"}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} data-testid="link-mobile-contact-cta">
                <button className="w-full px-4 py-2.5 rounded-lg text-sm font-bold btn-gold">
                  درخواست مشاوره
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
