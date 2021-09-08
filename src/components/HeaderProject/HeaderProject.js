import React, {useState, useEffect} from 'react';

import './HeaderProject.css'

import Skill from '../Skill/Skill'
import { parseImgName, projects, typeWriter } from '../../Global';


const HeaderProject = ({project}) => {

    const write = 6;
    const [curSlide, setCurSlide] = useState(0)

    var timeout1;
    var timeout2;

    useEffect(()=>{

        // if(project.header_asset.length>1){
        //     interal_id = window.setInterval(changeSlide, 2000);
        // }

        var description = document.getElementById('h-p-description')
        var img_container = document.getElementById('h-img-container')

        typeWriter(description, project.description.slice(-write))
        description.classList.remove('hidden-down')
        timeout1 = setTimeout(() => {
            img_container.classList.remove('hidden-down')
            timeout2 = setTimeout(() => {
                document.getElementById('h-skills').style.opacity = 1
            }, 750);
        }, 250);

        return () => {
            clearTimeout(timeout1)
            clearTimeout(timeout2)
        }

    }, [])

    function changeSlide(){

        var num = parseInt(curSlide + 1)

        if(curSlide<project.header_asset.length - 1){
            setCurSlide(num)
        }else{
            setCurSlide(0)
        }

    }

    useEffect(()=>{
        setTimeout(() => {
            changeSlide()
        }, 3200);
    })


    return(
            <div id="header-project-container" className="big-section">

                <div id="h-text-container">
                    <h1 style={{color: "var(--"+project.name+")", backgroundColor: "var(--"+project.name+")", backgroundImage: "linear-gradient(180deg, var(--"+parseImgName(project.name)+"-light), var(--"+parseImgName(project.name)+"-dark))"}}>{project.name}</h1>
                    <h2 id="h-p-description" className="hidden-down">{project.description.slice(0, project.description.length - write)}</h2>
                </div>

                <div id="h-img-container" className="hidden-down">
                    {/* <div id="h-img"></div> */}
                    {/* <img src={"imgs/"+parseImgName(project.name)+"/"+project.header_asset[curSlide]} alt="" id="h-img" /> */}
                    <div style={{backgroundImage: "url('imgs/"+parseImgName(project.name)+"/"+project.header_asset[curSlide]+"')"}}>
                        <img src={"imgs/"+parseImgName(project.name)+"/"+project.header_asset[curSlide]} alt="" />
                    </div>
                </div>
                
                <div id="h-skills" style={{opacity: 0}}>
                    {project.skills.map((skill)=>
                        <Skill skill={skill} />
                    )}
                </div>

            </div>
    )
}

export default HeaderProject