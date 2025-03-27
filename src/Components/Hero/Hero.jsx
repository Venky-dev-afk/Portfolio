import React from 'react'
import './Hero.css'
import {motion} from 'framer-motion'

const textVariants ={
      hidden : {opacity: 0, y: -50},
      visible : {opacity: 1, y: 0, transition : {duration: 1.8}},
};

function Hero() {
  return (
    <div className='Hero-section'>
      <motion.h1 variants={textVariants} initial="hidden" animate="visible" className='head1'>Welcome to Venkatesh Kumar's</motion.h1>
      <motion.h2 variants={textVariants} initial="hidden" animate="visible" className='head2'>Portfolio Website</motion.h2>
    </div>
  )
}

export default Hero