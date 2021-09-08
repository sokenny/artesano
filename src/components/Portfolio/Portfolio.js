import React, {useState, useEffect} from 'react';

import './Portfolio.css'

import Project from '../Project/Project';
import {projects} from '../../Global'


const Portfolio = () => {


    return(
            <div id="portfolio-container" className="big-section">

                <h3>Latest projects</h3>

                <div id="projects-container">

                    {projects.map((project)=>
                        <Project project={project} key={project.name} />
                    )}

                </div>

            </div>
    )
}

export default Portfolio