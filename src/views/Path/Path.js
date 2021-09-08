import React, {useState, useEffect} from 'react';

import './Path.css'

import HeaderProject from '../../components/HeaderProject/HeaderProject'
import CenteredTexts from '../../components/CenteredTexts/CenteredTexts'
import MoreWork from '../../components/MoreWork/MoreWork'
import AssetAndText from '../../components/AssetAndText/AssetAndText'
import Process from '../../components/Process/Process'
import MultipleAssets from '../../components/MultipleAssets/MultipleAssets';
import Quote from '../../components/Quote/Quote';
import CenteredIcons from '../../components/CenteredIcons/CenteredIcons';
import Integrations from '../../components/Integrations/Integrations';


import {projects} from '../../Global'

const Path = ({setView}) => {

    const project = projects[2]

    const texts = [
        [{title: "industry", des: "Educational services."},
        {title: "client", des: "Path is an international examination board based in the United Kingdom."},
        {title: "duration", des: "3 sprints. 4 months."}],

        [{title: "challenge", des: "The task at hand consisted on developing an international examinations platform, in which users from a wide age range of 7 - 50 years old could engage with upon their first interaction with the app. The use of client resources had to be thouroughly optimized to allow any set of system specs properly run the exam."}],

        [{title: "#takeaway", des: "Illustrations can have a huge impact on the user experience and I will be highly considering them for future projects. The guideline to follow was, 'make them mystical'. I teamed up with Matias Delviso (illustrator) who understood the sought essence from start and delivered exceptional pieces."}],
    ]

    const assets = [
        {
            asset:{
                src:"path/napkin.jpg"
            }, 
            text:{
                title: "draw it up on a napkin!",
                description: "Quite literally, this was the approach. Wireframes provided by the client were abstracted into functional UI, preserving the initial essence."
            }
        },
    ]

    const process = {col1: "The platform allows Path to dynamically create online examination tables from their administration panel. Candidates are able to join real-time exams where their activity is monitored through JavaScript to ensure legitimate results. Auto-generated .pdfs are stored with each candidate's exam. Candidate acquisition is automated with dynamic generated payments that vary according to the exam and modules assigned.", col2: "This was my last project built in a PHP framework. I had the opportunity to bring in and coordinate 2 developers that worked in Laravel since authentication and exam security where our primary goal. By being consistent and setting the necessary rules from go-time, this platform has been succesfully augmented in 2021 to extend its set of capabilities. Building software in this particular industry was a true privilege. It was much more gratifying than I could have expected."}

    const quote = {quote: "It was like working with a friend. We understood each other very quickly, and his work's quality was excellent.", source: "Pablo Demarchi - Founder"}

    const icons =[
        {title: "didactic", des: "7 year olds can succesfully engage with it.", src: "didactic.png"},
        {title: "lightweight", des: "Required specs are minimum. This grants an inclusive educational platform.", src: "lightweight.png"},
        {title: "safe", des: "Mechanisms in place to ensure any exam input is legitimate.", src: "safe.png"},
    ]

    const integrations = [
        {name:'pagotic', des: 'dynamic user subscriptions'},
        {name:'mercadopago', des: 'dynamic user payments'},
    ]
    
    return(
            <div id="project-view-container">
                
                <HeaderProject project={project} />
                <CenteredTexts texts={texts[0]} id={1} />
                <AssetAndText data={assets[0]} index={0} project={project} />
                <CenteredTexts texts={texts[1]} id={2} />

                <CenteredIcons project={project} icons={icons} />

                <div className="big-section">
                    <div className="double-asset">
                            <div>
                                <img src="imgs/path/illus1.jpg" alt="" />
                            </div>
                            <div><img src="imgs/path/illus2.jpg" alt="" /></div>
                    </div>
                    <div className="single-asset">
                        <img src="imgs/path/illus3.jpg" alt="" />
                    </div>
                </div>

                <CenteredTexts texts={texts[2]} id={3} />
                {/* <AssetAndText data={assets[0]} index={0} project={project} /> */}
                
                <div className="big-section">

                <div className="double-asset">
                        <div>
                            <img src="imgs/path/placement1.jpg" alt="" />
                        </div>
                        <div><img src="imgs/path/placement2.jpg" alt="" /></div>
                </div>
                <div className="single-asset">
                    <img src="imgs/path/placement3.jpg" alt="" />
                </div>
                </div>

                <Integrations integrations={integrations} />

                <Process project={project} process={process} />

                <div className="big-section">
                    <div className="double-asset">
                        <div>
                            <img src="imgs/path/pathp0.jpg" alt="" />
                        </div>
                        <div><img src="imgs/path/pathp1.jpg" alt="" /></div>
                    </div>
                    <div className="double-asset">
                        <div>
                            <img src="imgs/path/pathp2.jpg" alt="" />
                        </div>
                        <div><img src="imgs/path/pathp3.jpg" alt="" /></div>
                    </div>
                    <div className="double-asset">
                        <div>
                            <img src="imgs/path/pathp4.jpg" alt="" />
                        </div>
                        <div><img src="imgs/path/pathp5.jpg" alt="" /></div>
                    </div>
                    <div className="single-asset">
                        <img src="imgs/path/exam1.2.jpg" alt="" />
                    </div>
                    
                </div>
                
                <Quote  project={project} quote={quote} />
                <MoreWork recommended={3} setView={setView} />
            </div>
    )
}

export default Path