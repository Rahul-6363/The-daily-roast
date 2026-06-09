import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Menu', href: '#espresso' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit Us', href: '#visit' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1.2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
          backgroundColor: scrolled ? 'rgba(11,9,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          style={{
            background: 'none',
            border: 'none',
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#fcfcfc',
            letterSpacing: '0.06em',
            cursor: 'pointer',
            padding: 0,
            whiteSpace: 'nowrap',
          }}
        >
          THE DAILY ROAST
        </button>

        {/* Desktop Links */}
        <ul className="nav-desktop" style={{ display: 'flex', listStyle: 'none', gap: '2.5rem', alignItems: 'center', margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollTo(link.href)}
                className="nav-link"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fcfcfc',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  opacity: 0.75,
                  padding: 0,
                  transition: 'opacity 0.2s, color 0.2s',
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo('#contact')}
              className="nav-reserve-btn"
              style={{
                background: 'transparent',
                border: '1px solid #b77b4c',
                borderRadius: '24px',
                color: '#fcfcfc',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                padding: '0.55rem 1.5rem',
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
            >
              Reserve
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: '#fcfcfc',
            cursor: 'pointer',
            padding: '0.4rem',
            display: 'none',
            lineHeight: 1,
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: 'rgba(11,9,8,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              padding: '1.5rem 2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
          >
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: i < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  color: '#fcfcfc',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '1.1rem 0',
                  opacity: 0.88,
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              style={{
                marginTop: '1.5rem',
                background: 'transparent',
                border: '1px solid #b77b4c',
                borderRadius: '24px',
                color: '#fcfcfc',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                padding: '0.8rem 2rem',
                alignSelf: 'flex-start',
              }}
            >
              Reserve a Table
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
