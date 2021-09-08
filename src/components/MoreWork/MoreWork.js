import React, {useState, useEffect} from 'react';

import './MoreWork.css'

import {projects, isInViewport} from '../../Global'
import Project from '../Project/Project'

const MoreWork = ({project, recommended, setView}) => {

    var progress_bar;
    var progress_timeout;
    var activated = false;

    useEffect(()=>{
        
        progress_bar = document.getElementById('progress-bar')
        window.addEventListener("scroll", handleProgress)

        return () => {
            window.removeEventListener("scroll", handleProgress)
            if(activated){
                clearInterval(progress_timeout)
            }
        }

    },[])

    function handleProgress(){

        if(isInViewport(progress_bar)){
            // increaseProgress()
            if(!activated){
                progress_bar.classList.add('progressing')
                progress_timeout = setTimeout(() => {
                    document.querySelector('#more-work-container .pr-view').click()
                }, 9000);
                activated = true
            }
            
        }else{

            if(activated){
                progress_bar.classList.remove('progressing')
                clearInterval(progress_timeout)
                activated = false
            }

        }  

    }

    return(
            
        <div id="more-work-container" className="big-section">
            <h2>more work in action</h2>

            <Project project={projects[recommended] } setView={setView} />

            <div id="progress-bar-container">
                <div>
                    <div id="empty-bar"></div>
                    <div id="progress-bar" style={{backgroundImage: "linear-gradient(var(--"+projects[recommended].name+"-light), var(--"+projects[recommended].name+"-dark))"}}></div>
                </div>
            </div>
        </div>
    )
}

export default MoreWork