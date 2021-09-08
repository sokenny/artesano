import React, {useState, useEffect} from 'react';
import { typeWriter, isInViewport, parseImgName } from '../../Global';


import './Quote.css'

// import {} from '../../Global';

const Quote = ({quote, project}) => {

    const[hasAppeared, setHasAppeared] = useState(false)

    var quote_element;
    const write = 7;

    useEffect(()=>{

        quote_element = document.getElementById("quote-"+parseImgName(project.name))
        
        window.addEventListener("scroll", showQuote)

        return()=>{
            window.removeEventListener("scroll", showQuote)
        }
        
    },[])
    
    function showQuote(){

        if(isInViewport(quote_element)){

            if(!hasAppeared){  
                window.removeEventListener("scroll", showQuote)
                setHasAppeared(true)
                setTimeout(() => {   
                    quote_element.classList.remove('hidden-down')
                    typeWriter(document.querySelector("#quote-"+parseImgName(project.name) + " .q-text-container"), quote.quote.slice(-write), 100)

                    setTimeout(() => {
                        document.querySelector('.q-source').style.opacity = 1
                    }, 1000);

                }, 250);
            }
        }

    }

    return(
            <div className="quote-container">

                <div id={"quote-"+parseImgName(project.name)} className="hidden-down q-quote">

                    <span className="q-marks" style={{color: "var(--"+project.name+")"}}>"</span>
                    <span className="q-text-container">
                    {quote.quote.slice(0, quote.quote.length - write)}
                    </span>
                    <span className="q-marks" style={{color: "var(--"+project.name+")"}}>"</span>

                </div>
                <div className="q-source" style={{color: "var(--"+project.name+")", opacity: 0}}>
                    {quote.source}
                </div>

            </div>
    )
}

export default Quote