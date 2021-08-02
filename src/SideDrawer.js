import React from 'react';
import './SideDrawer.css';
import { NavLink } from 'react-router-dom';

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ['sideDrawer'];
    if(show){
        sideDrawerClass.push("show");
    }
    return (
        <div className={sideDrawerClass.join(" ")}>
            {/*
            <ul className="sideDrawer__links" onClick={click}>
                <li>
                    <NavLink to="/" exact activeClassName="navActive">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Projects" activeClassName="navActive">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Resume" activeClassName="navActive">
                        Resume
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About Me" activeClassName="navActive">
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" activeClassName="navActive">
                        Contact
                    </NavLink>
                </li>
            </ul>
            */}
            <div className="sideDrawer__links" onClick={click}>
                <NavLink to="/" exact activeClassName="navActive">
                    <div className="side__nav">Home</div>
                    </NavLink>
                <NavLink to="/Projects" activeClassName="navActive">
                    <div className="side__nav">Projects</div>
                    </NavLink>
                <NavLink to="/Resume" activeClassName="navActive">
                    <div className="side__nav">Resume</div>
                    </NavLink>
                <NavLink to="/AboutMe" activeClassName="navActive">
                    <div className="side__nav">About Me</div>
                    </NavLink>
            </div>
        </div>
    )
}

export default SideDrawer
