import React from 'react'
import './Header.css'

function Header () {
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "../../../public/1JB21CS171_VENKATESH KUMAR V_RESUME.pdf";
        link.download = "Venkatesh_Kumar.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


  return (
    <div className='navbar'>
        <h1 className='head'>Portfolio</h1>

        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Skills</a></li>
            <li><a href='#'>Projects</a></li>

        </ul>

        <button className='btn' onClick={downloadResume}>Download Resume</button>
        
    </div>
  )
}

export default Header