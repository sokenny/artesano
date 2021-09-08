import React, {useState, useEffect} from 'react';

import './Integrations.css'

import {getWidth, parseImgName, isInViewport} from '../../Global';

const Integrations = ({integrations}) => {

    const[hasAppeared, setHasAppeared] = useState(false)

    var integration_icons;
    var integration_franja;
    
    useEffect(()=>{
        integration_icons = document.querySelectorAll('.integrations .int-img img')
        integration_franja = document.querySelector('.integrations')
        
        window.addEventListener("scroll", spin)

        return ()=>{
            window.removeEventListener("scroll", spin)
        }

    },[])

    function spin(){

        if(isInViewport(integration_franja)){

            setTimeout(() => {
                
                
                for(let i=0; i<integration_icons.length; i++){
                    
                    integration_icons[i].classList.add('spin')
                    
                }
            }, 300);

            window.removeEventListener("scroll", spin)

        }

    }

    return(
            <div id="integrations-container" className="big-section">

                <div className="at-title">api integrations</div>

                <div className="integrations">

                    {integrations.map((integration)=>
                        <div className="integration" key={integration.name} style={{width: getWidth(integrations.length)}}>
                            
                            <div className="int-img">
                                <img src={"imgs/"+parseImgName(integration.name)+".png"} height="35px" alt="" />
                            </div>
                            <div className="int-texts">
                                <div className="int-name">{integration.name}</div>
                                <div className="int-des">{integration.des}</div>
                            </div>

                        </div>
                    )}

                </div>

            </div>
    )
}

export default Integrations