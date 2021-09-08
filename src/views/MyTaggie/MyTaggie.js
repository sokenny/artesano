import React, {useState, useEffect} from 'react';

import './MyTaggie.css'

import HeaderProject from '../../components/HeaderProject/HeaderProject'
import CenteredTexts from '../../components/CenteredTexts/CenteredTexts'
import Integrations from '../../components/Integrations/Integrations'
import Process from '../../components/Process/Process'
import Quote from '../../components/Quote/Quote'
import MoreWork from '../../components/MoreWork/MoreWork'
import Contact from '../../components/Contact/Contact'
import AssetAndText from '../../components/AssetAndText/AssetAndText'
import CenteredIcons from '../../components/CenteredIcons/CenteredIcons'

import {projects} from '../../Global'

const MyTaggie = ({setView}) => {

    const project = projects[0]

    const texts = [
        {title: "industry", des: "Project management software."},
        {title: "client", des: "Adrian Alvarado, a Mexico based entrepreneur & arquitect."},
        {title: "duration", des: "7 sprints. 9 months."}
    ]

    const integrations = [
        {name:'google-auth', des: 'user creation and authentication'},
        {name:'paypal', des: 'dynamic user subscriptions'},
        // {name:'facebook ads', des: 'descripción de la importancia de esta integración'},
    ]

    const assets = [
        {
            asset:{
                src:"mytaggie/wire-components.svg"
            }, 
            text:{
                title: "wireframes",
                description: "The wide collection of functional components in the UI required an extensive wireframing phase."
            }
        },
        {
            asset:{
                src:"mytaggie/components.png"
            }, 
            text:{
                title: "functional components",
                description: "With colors and design guidelines in place, components succesfully merged with the playful tone across taggie's brand image."

            }
        },
        {
            asset:{
                src:"mytaggie/taggie-demo.gif"
            }, 
            text:{
                title: "left and right connects",
                description: "An overview of both ends of the platform in action. The result is a stunningly fast canvas for streaming ideas."
            }
        }
    ]

    const icons =[
        {title: "multimedia", des: "Work with images, videos and .pdf files.", src: "multimedia.png"},
        {title: "validate", des: "Share project related polls for feedback.", src: "valida.png"},
        {title: "collaborate", des: "Take on team projects collaboratively.", src: "colabora.png"},
    ]

    const process = {col1: "Taggie allows users to create projects and share them with friends and co-workers. It is equiped with an integrated chat and user generated polls among many other features that allow collaborative work.", col2: "It was the most robust front-end project I had the opprtunity to engage with. The high dimension of nested components displayed the importance of working with a deliberate modular design system."}

    const quote = {quote: "Juan went above and beyond in terms of quality. The webapp's functionality is top-notch.", source: "Adrian Alvarado - CEO"}

    return(
            <div id="project-view-container">
                
                <HeaderProject project={project} />
                <CenteredTexts texts={texts} id={1} />
                
                {/* Asset #1 */}
                <AssetAndText data={assets[0]} index={0} project={project} />

                {/* Asset #2 */}
                <AssetAndText data={assets[1]} index={1} project={project} />

                <CenteredIcons icons={icons} project={project} />

                {/* Asset #2 */}
                <AssetAndText data={assets[2]} index={2} project={project} />


                <Integrations integrations={integrations} />
                <Process project={project} process={process} />

                <div className="big-section">
                    {/* <div className="double-asset">
                        <div>
                            <img src="imgs/mytaggie/finanzas.jpg" alt="" />
                            <img src="imgs/mytaggie/reportes.jpg" alt="" />
                        </div>
                        <div><img src="imgs/mytaggie/drafts.jpg" alt="" /></div>
                    </div> */}
                    {/* <div className="double-asset">
                        <div><img src="imgs/taggie/reportes.jpg" alt="" /></div>
                        <div><img src="imgs/taggie/" alt="" /></div>
                    </div> */}

                    <div className="single-asset">
                        <img src="imgs/mytaggie/drafts-1.jpeg" alt="" />
                    </div>

                    <div className="single-asset">
                        <img src="imgs/mytaggie/dashboard.jpg" alt="" />
                    </div>

                    <div className="single-asset">
                        <img src="imgs/mytaggie/presentation.jpg" alt="" />
                    </div>
                    
                    <div className="single-asset">
                        <img src="imgs/mytaggie/components-2.png" alt="" />
                    </div>
                </div>

                <Quote quote={quote} project={project} />
                
                <MoreWork recommended={1} setView={setView} />

            </div>
    )
}

export default MyTaggie