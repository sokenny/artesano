import React, {useState, useEffect} from 'react';

import './CenteredTexts.css'

import { getWidth, typeWriter, isInViewport } from '../../Global';

const CenteredTexts = ({texts, id}) => {

    const[hasAppeared, setHasAppeared] = useState(false)

    var centered_texts;
    var centered_texts_des;

    const write = 5;
    var only_one = ""
    if(texts.length<=1){
        only_one = "only_one"
    }

    useEffect(()=>{

        centered_texts = document.querySelectorAll('#ct-'+id+' .ct-container')
        centered_texts_des = document.querySelectorAll('#ct-'+id+' .ct-container .ct-des')

        window.addEventListener("scroll", showTexts)

    }, [])

    function showTexts(){

        if(isInViewport(centered_texts[0])){

            if(!hasAppeared){  
                window.removeEventListener("scroll", showTexts)
                setHasAppeared(true)
                // setTimeout(() => {   
                    
                    for(let i=0; i<centered_texts.length; i++){
                        var ct = centered_texts[i]
                        var ct_des = centered_texts_des[i]
                        ct.classList.remove('hidden-down')
                        typeWriter(ct_des, texts[i].des.slice(-write))
                    }
                    
                // }, 250);
            }
        }

    }


    return(
            <div id={"ct-"+id} className={"big-section centered-texts-container "+ only_one}>
                {texts.map((text)=>
                    <div className="ct-container hidden-down" style={{width: getWidth(texts.length)}}>
                        
                        <div className="ct-title">{text.title}</div>
                        <div className="ct-des">{text.des.slice(0, text.des.length - write)}</div>

                    </div>
                )}
            </div>
    )
}

export default CenteredTexts