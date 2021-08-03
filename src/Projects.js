import React from 'react';
import './Projects.css';
import Project from './Project';
import Web from './web.png'

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__header">
                <p className="projects__headerText">
                    These page will projects that I will study online and maybe in the future I can make projects of my own.
                </p>
            </div>

            <div className="projects__body">
                
                <Project 
                name="Login Authentication" 
                tools="HTML, CSS, Javascript, Firebase"
                description="Simple Signup/Signin webpage that uses email authentication from firebase created using react"
                img={Web}/>
            
            </div>
        </div>
    )
}

export default Projects
