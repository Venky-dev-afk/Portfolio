import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import trial from '../../assets/Projects/vtr.jpg'
import ai from '../../assets/Projects/ai.jpg'
import news from '../../assets/Projects/news.jpg'
import fitness from '../../assets/Projects/fitness.png'



const projects = [
  {
    id: 1,
    title: "Virtual Trial Room",
    description: "An AI-based virtual try-on experience using OpenCV and MediaPipe.",
    image: trial,
    techStack: ["OpenCV", "MediaPipe", "Flask"],
    link: "https://github.com/Venky-dev-afk",
  },
  {
    id: 2,
    title: "AI Voice Assistant",
    description: "A personal AI assistant with speech-to-text and automation.",
    image: ai,
    techStack: ["Python", "NLU", "Speech-to-Text"],
    link: "https://github.com/Venky-dev-afk",
  },
  {
    id: 3,
    title: "Personalized News Digest",
    description: "A news aggregation platform with AI-powered summarization.",
    image: news,
    techStack: ["Nhost", "React", "n8n", "OpenRouter"],
    link: "https://github.com/Venky-dev-afk/News-Digest",
  },
  {
    id:4,
    title:"AI Fitness Tracker",
    description: "A personalized AI fitness tracker which tracks your exercise form and gives feedback.",
    image: fitness,
    techStack: ["Python", "OpenCV", "MediaPipe", "React", "Flask"],
    link: "https://github.com/Venky-dev-afk/AI-Fitness-Tracker",
  },
  
];

const Projects = () => {
  return (
    <div className="projects-container">
        <motion.div
        id="projects"
        className="section"
        initial={{ opacity: 0, y: 50 }} // Start hidden & slightly below
        whileInView={{ opacity: 1, y: 0 }} // Fade in & move up
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} // Trigger only once
        >
      <h2 className="projects-title">My Projects</h2>
      <motion.div
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -((projects.length - 1) * 300) }}
        >
          {projects.map((project) => (
            <motion.div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="visit-btn">View Project</button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
