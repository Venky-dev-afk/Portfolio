import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import "./Hero.css";
import hero_pic from '../../assets/Header/hero.jpg'

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="hero-container">
      {/* Left Side - Text */}
      <div className="hero-text">
        <h1 className="hero-title">I'm Venkatesh Kumar V</h1>
        <TypeAnimation
          sequence={["Full Stack Developer", 2000, "React Enthusiast", 2000, "C++ Developer", 2000, "Python Developer",2000, "AI-ML Enthusiast", 2000]}
          speed={50}
          repeat={Infinity}
          className="hero-subtitle"
        />
        
        {/* Short Introduction */}
        <p className="hero-bio">A Full-Stack Developer skilled in C++, React, Flask, and OpenCV, passionate about building AI-powered and real-time applications. I love solving complex problems and creating innovative software solutions.</p>
        
        {/* Social Media Links */}
        <div className="hero-socials">
          <a href="https://github.com/Venky-dev-afk" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/venkatesh-kumar-842588323" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:venkateshkumarsbv@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/venkyyy_007" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className={`hero-image ${animate ? "fade-in" : ""}`}>
        <img src={hero_pic} alt="Your Photo" className="profile-pic" />
      </div>
    </div>
  );
};

export default HeroSection;
