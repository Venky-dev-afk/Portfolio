import React from 'react'
import "./About.css"
import profile_pic from "../../assets/Header/profilepic.jpg"
import {motion,useInView} from 'framer-motion'

function About() {

    const textVariants ={
        hidden : {opacity: 0, y: -50},
        visible : {opacity: 1, y: 0, transition : {duration: 1}},
  };

  return (
    <motion.div variants={textVariants} initial="hidden" whileInView="visible" viewport={{once:false, amount:0.3}} className='about'>
        <h1 className='head1'>About Me</h1>
        <div className='aboutme'>
        <img src={profile_pic} alt="profile-pic" className='profile' />
            <p className='p1'>
                I'm Venkatesh Kumar V I am a dedicated Software Developer with a strong foundation in C++, Data Structures & Algorithms, and full-stack development. Passionate about building innovative solutions, I have hands-on experience working on projects like an Event Management Dashboard and a Virtual Trial Room leveraging OpenCV and MediaPipe.<br></br><br></br>
Beyond coding, I have proven leadership and teamwork skills, having organized technical events at my college. I enjoy solving complex problems and continuously learning new technologies. With expertise in MongoDB, SQL, Git, and computer vision, I am eager to contribute to impactful software solutions.
            </p>
        </div>
    </motion.div>
  )
}

export default About