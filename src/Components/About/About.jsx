import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const timelineVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.3 },
  }),
};

const About = () => {
  const timelineData = [
    { title: "Started Coding", description: "My journey began with C++ and DSA, exploring problem-solving and algorithms.", year: "2021" },
    { title: "Web Development", description: "Dived into HTML, CSS, JavaScript, and built full-stack applications with React & Flask.", year: "2022" },
    { title: "AI & Computer Vision", description: "Developed projects integrating OpenCV, Flask, and MediaPipe, enhancing real-world applications.", year: "2023" },
    { title: "Building Real-World Projects", description: "Worked on Virtual Trial Room, AI Voice Assistant, and an Internship SaaS project.", year: "2024" },
  ];

  return (
    <section className="about-container">
        <motion.div
        id="about"
        className="section"
        initial={{ opacity: 0, y: 50 }} // Start hidden & slightly below
        whileInView={{ opacity: 1, y: 0 }} // Fade in & move up
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} // Trigger only once
        >
      <h2 className="about-title">My Journey</h2>
      <div className="timeline">
        {timelineData.map((item, i) => (
          <motion.div 
            key={i} 
            className="timeline-item"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="timeline-date">{item.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
      </motion.div>
    </section>
  );
};

export default About;




