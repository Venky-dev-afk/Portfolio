import React from 'react'
import './Projects.css'
import{motion} from 'framer-motion'
import virtual_trial from '../../assets/Projects/vtr.jpg'
import ai_voice from '../../assets/Projects/ai.jpg'
import event_dash from '../../assets/Projects/events.jpg'


function Projects() {
    const textVariants ={
        hidden : {opacity: 0, y: -50},
        visible : {opacity: 1, y: 0, transition : {duration: 1}},
  };

    const projects = [
        { title: "Virtual Trial Room",
        description: ["A computer vision-based virtual try-on experience.",
        "Uses OpenCV & MediaPipe",
        "Enhances online shopping"
    ],
        image:virtual_trial
        },

        { title: "AI Voice Assistant", 
        description: ["An AI-powered voice assistant for task automation.",
        "Task automation (reminders, emails)",
        "Web search & interaction"
        ],
        image:ai_voice
        },

        { title: "Event Management Dashboard", 
        description: ["A full-stack event management platform.",
        "Attendee tracking system",
        "Integrates with backend APIs"
    ], 
        image:event_dash
        }
      ];

  return (
    <motion.div variants={textVariants} initial="hidden" whileInView="visible" viewport={{once:false, amount:0.3}} className='projects-container' id='projects'>
        <h2 className='projects-heading'>My Projects</h2>
        <div className='projects-grid'>
            {projects.map((project,index) => (
                <div key={index} className='project-card'>
                    <div className='card-inner'>
                        <div className='card-front' style={{backgroundImage: `url(${project.image})`}}>
                            <h3 className='project-title'>{project.title}</h3>
                        </div>
                        <div className='card-back'>
                            <h4>Features:</h4>
                            <ul className='project-list'>
                                {project.description.map((point,idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Projects