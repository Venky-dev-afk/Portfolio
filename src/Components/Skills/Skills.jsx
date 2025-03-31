import React from "react";
import "./Skills.css";
import { FaReact, FaPython, FaHtml5, FaCss3, FaJs, FaNodeJs, FaCode } from "react-icons/fa";
import { SiCplusplus, SiMysql, SiMongodb, SiFlask } from "react-icons/si";
import { motion} from "framer-motion";


const skills = [
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { name: "SQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "OOPS", icon: <FaCode />, color: "#FF7F50" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Flask", icon: <SiFlask />, color: "#000000" },
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
];

const Skills = () => {
  return (
    <section className="skills-container">
        <motion.div
        id="skills"
        className="section"
        initial={{ opacity: 0, y: 50 }} // Start hidden & slightly below
        whileInView={{ opacity: 1, y: 0 }} // Fade in & move up
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }} // Trigger only once
        >

      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            style={{ "--hover-color": skill.color }}
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      </motion.div>
    </section>
  );
};

export default Skills;
