import React from 'react';
import './Experience.css'

const Experience = ({job, company, location, date, description}) => {
    return (
        <div className="experience">
        <p className="experience__job"><strong>{job}</strong></p>
            <p className="experience__comapny">{company}</p>
            <p className="experience__location">{location}</p>
            <p className="experience__date">{date}</p>
        </div>
    )
}

export default Experience
