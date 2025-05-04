import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click (for mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">VK</div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        </ul>
      </nav>

      {/* Resume Button */}
      <a href="../../../public/Resume.pdf" download="Venkatesh_Resume.pdf" className="resume-btn">
        Resume
      </a>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
};

export default Header;
