import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import { isInViewport } from '../../Global';

import './Project.css?r=2'

import Skill from '../Skill/Skill'

const Project = ({project}) => {

    var project_logo;

    useEffect(()=>{

        project_logo = document.querySelector('.' + project.name + ' .project-logo')
        window.addEventListener("scroll", scale)

        return ()=>{
            window.removeEventListener("scroll", scale)
        }

    }, [])

    function scale(){

        if(isInViewport(project_logo)){

            setTimeout(() => {
                
                project_logo.classList.remove('shrink')
                
            }, 150);

            window.removeEventListener("scroll", scale)

        }

    }


    return(
            <div className={project.name + " project-container"}>
                
                <div className="project-img" style={{backgroundImage: "linear-gradient(var(--"+project.name+"-light), var(--"+project.name+"-dark))"}}>
                    <img src={"imgs/"+project.name+"/"+project.name+"-logo.png"} height="55px" alt="" className="project-logo shrink" style={{filter: "drop-shadow(5px 5px 5px var(--"+project.name+"-dark))"}} />
                </div>

                <div className="project-info">
                    <div className="pr-name">{project.name}</div>
                    <div className="pr-des">{project.description}</div>
                    <div className="pr-skills">
                        {project.skills.map((skill)=>
                            <Skill skill={skill} key={skill} />
                        )}
                    </div>
                    <Link to={project.name.toLowerCase()}>
                    <div className="pr-view">view project</div>
                    </Link>
                </div>

            </div>
    )
}

export default Project