import React, {useState, useEffect} from 'react';

import './MultipleAssets.css'

import Skill from '../Skill/Skill'
import { getWidth, parseImgName, projects, typeWriter } from '../../Global';


const MultipleAssets = ({project, assets}) => {

    var slides_object = []
    for(let s in assets){
        slides_object.push(0)
    }

    const [curSlides, setCurSlides] = useState(slides_object)

    function changeSlides(){

        let copy_of_curslides = curSlides
        for(let s in curSlides){
            
            var num = parseInt(curSlides[s] + 1)

            if(s == 0){
            }
            
            if(curSlides[s]<assets[s].src.length - 1){
                if(s==0){
                }
                copy_of_curslides[s] = num
            }else{
                if(s==0){
                }
                copy_of_curslides[s] = 0
            }
            
        }


        setCurSlides([...copy_of_curslides])

    }

    useEffect(()=>{
      
        setTimeout(() => {
            changeSlides()
        }, 1800);

    })


    return(
            <div className="multiple-assets big-section">

                {assets.map((asset, index)=>
                    <div className="ma-asset" style={{width: getWidth(assets.length)}} key={asset.src[0]}>
                        
                        <div className="ma-a" style={{backgroundImage: "url('imgs/"+project.name+"/"+asset.src[curSlides[index]]+"')"}}>
                            <img src={"imgs/"+project.name+"/"+asset.src[curSlides[index]]} style={{opacity: 0}} alt="" />
                        </div>

                    </div>
                )}

            </div>
    )
}

export default MultipleAssets