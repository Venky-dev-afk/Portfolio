import React from 'react'
import './Skills.css'
import {motion} from 'framer-motion'
import {FaReact,FaHtml5,FaCss3Alt,FaJsSquare,FaWindows, FaPython} from "react-icons/fa";
import {SiCplusplus,SiDatabricks,SiMysql} from "react-icons/si"; 


function Skills() {

    const textVariants ={
        hidden : {opacity: 0, y: -50},
        visible : {opacity: 1, y: 0, transition : {duration: 1}},
  };

    const skills = [
        {name: "C++", icon: <SiCplusplus />},
        {name: "Python", icon: <FaPython />},
        {name: "HTML", icon: <FaHtml5 />},
        {name: "CSS", icon: <FaCss3Alt />},
        {name: "JavaScript", icon: <FaJsSquare/>},
        {name: "React", icon: <FaReact />},
        {name: "SQL", icon: <SiMysql />},
        {name: "OOPS", icon: <SiDatabricks />},

    ]

  return (
    <>
    <motion.div variants={textVariants} initial="hidden" whileInView="visible" viewport={{once:false, amount:0.3}} id='skills'>

        <h1 className='head1'>SKILLS</h1>
    <div className='skills-section'>
        {skills.map((skills, index) => (
            <motion.div key={index} className='skill-badge' whileHover={{scale:1.1}}>
                {skills.icon}<span>{skills.name}</span>
            </motion.div>
        ))}
    </div>
        </motion.div>
    </>
  )
}

export default Skills
