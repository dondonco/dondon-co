import React from 'react';
import './Resume.css';
import linkedin from './linkedin.png';
import profile from './2x2.png';
import Experience from './Experience';
import github from './github.png'
import credly from './credly.png'

const About = () => {
    return (
        <div className="about">
            <div className="about__headline">
                <div className="about__leftSide">
                    <img className="about__picture" 
                    src={profile}
                    alt="Dondon Co" 
                    />
                </div>
                <div className="about__rightSide">
                    <div className="rightSide__top">
                        Dondon Jeric Co
                    </div>
                    <div className="rightSide__mid">
                        <a href="https://www.linkedin.com/in/dondonco" >
                            <img src={linkedin} alt="LinkedIn"/>
                        </a>
                        <span className="spaceBetween__images"></span>
                        <a href="https://github.com/dondonco" >
                            <img src={github} alt="Github" />
                        </a>
                        <span className="spaceBetween__images"></span>
                        <a href="https://www.credly.com/users/dondonco" >
                            <img src={credly} alt="Github" />
                        </a>
                    </div>
                    <div className="rightSide__bot">
                        <strong>Objective: </strong>
                            My current goal is to start working in the tech industry, gain knowledge and professional experience, and choose the most ideal path established by my acculumated knowledge and experience.
                    </div>

                </div>
            </div>
            <div className="about__body">
                <div className="body__child">
                    <strong>Education</strong>
                    <div className="child__inside">
                        <p>
                            <strong>Degree:</strong> Bachelor of Science in Computer Science 
                        </p>
                        <p>
                            <strong>Year:</strong> 2019
                        </p>
                        <p>
                            <strong>Evaluated By:</strong> World Education Services
                        </p>
                        <p>
                            <strong>Evaluation:</strong> <a href="https://badges.wes.org/Evidence?i=1959331b-464a-4326-acf1-877e4e100731&type=us">US Bachelor's degree equivalent</a>
                        </p>
                    </div>
                </div>
                <div className="body__child">
                    <strong>Skills: </strong>
                    <br />
                    <div className="child__inside">
                        <span>Technical Skills:</span>
                        <div className="technical__skills">
                            <p>
                                <strong>Language: </strong>
                                Java SE(Proficient), Android(Intermediate), Python(Intermediate), Javascript(Intermediate), C++(Intermediate), C#(Basic)
                            </p>
                            <p>
                                <strong>Web: </strong>
                                HTML, CSS, reactjs, PHP
                            </p>        
                            <p>
                                <strong>Database: </strong>
                                Access, MySql, NoSql
                            </p>        
                            <p>
                                <strong>Operating System: </strong>
                                Windows 10, Linux, Windows Server
                            </p>        
                            <p>
                                <strong>Tools and Applications: </strong>
                                Eclipse, VSCode, Photoshop, 
                            </p>        
                            <p>
                                <strong>Networking: </strong>
                                Cisco, IP Routing, Subnetting, Classless Routing, Cable Management 
                            </p>        
                        </div>
                        <span>Soft Skills: </span>
                        <div className="soft__skills">
                            <p>
                                <b>Adaptability</b> - able to adapt on different situations and work with diverse people
                                
                            </p>
                            <p>
                                <b>Open Minded</b> - open to receive different ideas, brainstorm and pick or compile those ideas to create the best feasible solutions 
                            </p>
                            <p>
                                <b>Willingness to learn</b> - willing to learn the different technologies and tools that I will need to use to efficiently do the different task that I will handle
                            </p>
                        </div>
                    </div>
                </div>
                <div className="body__child">
                <strong>Relevant experience: </strong> No relevant professional experience as of now.
                </div>
                <div className="body__child">
                    <strong>Other experience: </strong> 
                    <br/>
                    <div className="body__experience">
                    <Experience 
                    job="Home Care Aide/Caregiver"
                    company="Advanced Homecare Services Inc."
                    location="Northridge, CA"
                    date="April 2021 - July 2021"
                    />
                    <Experience 
                    job="Caregiver"
                    company="Shalom Elderly Care Inc."
                    location="Woodland Hills, CA"
                    date="December 2020 - April 2021"
                    />
                    <Experience 
                    job="Caregiver"
                    company="Hart Placement Agency Inc."
                    location="Canoga Park, CA"
                    date="January 2020 - March 2021"
                    />
                    <Experience 
                    job="Caregiver"
                    company="Shalom Elderly Care Inc."
                    location="Woodland Hills, CA"
                    date="June 2019 - December 2019"
                    />
                    <Experience 
                    job="Desktop Support Intern"
                    company="RJ Globus Inc."
                    location="Ortigas, Philippines"
                    date="January 2019 - June 2019"
                    />
                    <Experience 
                    job="Caregiver"
                    company="Shalom Elderly Care Inc."
                    location="Woodland Hills, CA"
                    date="September 2018 - December 2018"
                    />
                    <Experience 
                    job="Low Voltage Technician"
                    company="Dream Technologies Inc."
                    location="Encino, CA"
                    date="November 2017 - September 2018"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
