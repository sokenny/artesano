import React, {useState, useEffect} from 'react';
import { parseImgName, isInViewport, typeWriter } from '../../Global';

import './AssetAndText.css'

const AssetAndText = ({data, project, index}) => {

    const[hasAppeared, setHasAppeared] = useState(false)
    const write = 5

    useEffect(()=>{
        
        window.addEventListener("scroll", writeDescription)

        return () => {
            window.removeEventListener("scroll", writeDescription)
        }

    },[])

    function writeDescription(){

        var description = document.querySelector('.at-'+ index +'-' +parseImgName(project.name) + ' .des')

        if(isInViewport(description)){

            if(!hasAppeared){
                setHasAppeared(true)
                window.removeEventListener("scroll", writeDescription)
                typeWriter(description, data.text.description.slice(-write), 100)
            }
            
        }

    }

    return(
        <div className={"asset-and-text big-section " + "at-"+index+ "-" +parseImgName(project.name)}>

            <div className="a-asset">
                <img src={"imgs/"+data.asset.src} alt="" id="wireframe" />
            </div>

            <div className="a-text">
                <div className="at-title">{data.text.title}</div>
                <div className="at des">{data.text.description.slice(0, data.text.description.length - write)}</div>
            </div>

        </div>
    )
}

export default AssetAndText