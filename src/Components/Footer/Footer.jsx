import React from 'react'
import './Footer.css'
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-content'>
            <p>© {new Date().getFullYear()} Venkatesh Kumar V | All Rights Reserved</p>
        <div className='social-links'>
            <a href='https://github.com/Venky-dev-afk' target="_blank" rel="noopener noreferrer">
              <FaGithub/>
            </a>
            <a href='https://www.linkedin.com/in/venkatesh-kumar-842588323/' target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
            </a>
            <a href='mailto:venkateshkumarsbv@gmail.com'>
              <FaEnvelope/>
            </a>
        </div>
        </div>
    </footer>
  )
}

export default Footer