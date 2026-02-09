import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [now, setNow] = useState(new Date());

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Live Time
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "topics", label: "Topics" },
    { id: "teachers", label: "Teachers" },
    { id: "features", label: "Features" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (linkId) => {
    setActiveLink(linkId);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-bg"></div>

      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-section">
          <div className="logo">
            <span className="logo-symbol">∑</span>
          </div>
          <h1 className="logo-text">
            <span className="logo-char">M</span>
            <span className="logo-char">A</span>
            <span className="logo-char">T</span>
            <span className="logo-char">H</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeLink === link.id ? "active" : ""}`}
              onClick={() => handleNavClick(link.id)}
            >
              <span className="nav-label">{link.label}</span>
              {activeLink === link.id && <span className="nav-indicator"></span>}
            </a>
          ))}
        </div>

        {/* Live Time & Date */}
        <div className="nav-time">
          <div className="time-line">
            {now.toLocaleTimeString()}
          </div>
          <div className="date-line">
            {now.toLocaleDateString()}
          </div>
        </div>

        {/* Admission Button */}
        <button className="cta-nav-btn">
          <span className="btn-text">Get Admission</span>
          <span className="btn-icon">→</span>
        </button>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-nav-link ${activeLink === link.id ? "active" : ""}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </a>
          ))}

          <button className="mobile-cta-btn">
            Enroll Now →
          </button>
        </div>
      </div>
    </nav>
  );
}
