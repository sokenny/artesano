import React, {useState, useEffect} from 'react';

import './CenteredIcons.css'

import { typeWriter, parseImgName, isInViewport } from '../../Global';

const CenteredIcons = ({icons, project}) => {

    const[hasAppeared, setHasAppeared] = useState(false)

    const write = 4;

    var centered_icons;
    var centered_icons_des;
    var icons_section;

    useEffect(()=>{


        centered_icons = document.querySelectorAll('#centered-icons-container .ct-icon')
        centered_icons_des = document.querySelectorAll('#centered-icons-container .ct-container .ct-des')
        icons_section = document.getElementById('centered-icons-container')

        window.addEventListener("scroll", showIcons)

    }, [])

    function showIcons(){

        if(isInViewport(icons_section)){

            if(!hasAppeared){  
                window.removeEventListener("scroll", showIcons)
                setHasAppeared(true)
                setTimeout(() => {   
                    
                    for(let i=0; i<centered_icons.length; i++){
                        var ct = centered_icons[i]
                        var ct_des = centered_icons_des[i]
                        ct.querySelector('img').classList.remove('scaled-down')
                        // setTimeout(() => {
                            ct.querySelector('.cti-border').classList.remove('scaled-down')
                        // }, 00);
                        typeWriter(ct_des, icons[i].des.slice(-write))
                    }
                    
                }, 250);
            }
        }

    }


    return(
            <div id="centered-icons-container" className="big-section">
                {icons.map((icon)=>
                    <div className="ct-container w30">
                        
                        <div className="ct-icon">
                            <div className="cti-border scaled-down" style={{border: "2.5px solid var(--"+parseImgName(project.name)+")"}}></div>
                            <img src={"imgs/"+parseImgName(project.name)+"/"+icon.src} alt="" className="scaled-down"/>
                        </div>
                        <div className="ct-title">{icon.title}</div>
                        <div className="ct-des">{icon.des.slice(0, icon.des.length - write)}</div>

                    </div>
                )}
            </div>
    )
}

export default CenteredIcons