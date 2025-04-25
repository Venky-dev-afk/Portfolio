import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="minimal-footer">
      <div className="social-icons">
        <a href="https://github.com/Venky-dev-afk" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/venkatesh-kumar-v-842588323/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:venkateshkumarsbv@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Venkatesh Kumar V. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
