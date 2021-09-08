import React, {useState, useEffect} from 'react';
import { parseImgName, isInViewport, typeWriter } from '../../Global';

import './Process.css'

// import {} from '../../Global';

const Process = ({process, project}) => {

    var border;

    useEffect(()=>{
        
        border = document.querySelector('.p-col2-border')
        window.addEventListener("scroll", showBorder)

    },[])

    function showBorder(){ 

        if(isInViewport(border)){
            setTimeout(() => {
                border.style.height = "100%"
            }, 400);
            window.removeEventListener("scroll", showBorder)
        }

    }

    return(
            <div className="process-container">
                
                <div className="p-title">
                    in a nutshell
                </div>
                <div className="p-cols">
                    <div className="p-col1">{process.col1}</div>
                    <div className="p-col2">
                        <div className="p-col2-border" style={{backgroundColor: "var(--"+project.name+")"}}></div>
                        <div className="p-col2-text">
                            {process.col2}
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Process