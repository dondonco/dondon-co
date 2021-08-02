import React from 'react'
import './Project.css'

const Project = ({name, tools, description, img}) => {
    return (
        <div className="project">
            <div className="project__leftSide">
                <img className="project__logo"
                src={img}
                alt={name}
                />
            </div>
            <div className="project__rightSide">
                <p className="project__name"><a href="https://dondonco.github.io/login-authentication/">{name}</a></p>
                <p className="project__tools">{tools}</p>
                <p className="project__description">{description}</p>
            </div>
        </div>
    )
}

export default Project
