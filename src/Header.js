import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({click}) => {
    return (
        <div className="header">
            <div className="header__leftSide">
                <div className="header__topLeft">
                    Dondon Co
                </div>
                <div className="header__bottomLeft">

                </div>
            </div>
            <div className="header__rightSide">
                <div className="nav__links">
                    <NavLink to="/Home" exact activeClassName="navActive">
                        <div className="nav">Home</div>
                        </NavLink>
                    <NavLink to="/Projects" activeClassName="navActive">
                        <div className="nav">Projects</div>
                        </NavLink>
                    <NavLink to="/Resume" activeClassName="navActive">
                        <div className="nav">Resume</div>
                        </NavLink>
                    <NavLink to="/AboutMe" activeClassName="navActive">
                        <div className="nav">About Me</div>
                        </NavLink>
                </div>
                <div className="menu" onClick={click}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {/*
            <div className="header__rightSide">
                <Link to="/">
                    <div className="header__home nav">Home</div>
                    </Link>
                <Link to="/Projects">
                    <div className="header__projects nav">Projects</div>
                    </Link>
                <Link to="/Blogs">
                    <div className="header__blogs nav">Blogs</div>
                </Link> 
                <Link to="/About">
                    <div className="header__about nav">About me</div>
                </Link>
                <Link to="/Contact">
                <   div className="header__contact nav">Contact</div>
                </Link>
            </div>*/}
        </div>
    )
}

export default Header
