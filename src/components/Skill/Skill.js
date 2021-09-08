import React, {useState, useEffect} from 'react';

import './Skill.css'

const Skill = ({skill}) => {

    return(
            <div className="skill-container">
                {skill}
            </div>
    )
}

export default Skill