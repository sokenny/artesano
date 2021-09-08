import React, {useState, useEffect} from 'react';

import './Fluxq.css'

import HeaderProject from '../../components/HeaderProject/HeaderProject'
import CenteredTexts from '../../components/CenteredTexts/CenteredTexts'
import MoreWork from '../../components/MoreWork/MoreWork'
import AssetAndText from '../../components/AssetAndText/AssetAndText'
import Process from '../../components/Process/Process'
import MultipleAssets from '../../components/MultipleAssets/MultipleAssets';
import Quote from '../../components/Quote/Quote';
import CenteredIcons from '../../components/CenteredIcons/CenteredIcons';


import {projects} from '../../Global'

const Fluxq = ({setView}) => {

    const project = projects[3]

    const texts = [
        {title: "industry", des: "Health and personal care stores."},
        {title: "client", des: "Flux-q is a software company that focuses on client-flow management inside stores."},
        {title: "duration", des: "6 sprints. 6 months."},
    ]

    const assets = [
        {
            asset:{
                src:"fluxq/fluxq-wireframe.svg"
            }, 
            text:{
                title: "multi-device",
                description: "The UI would be present in client's devices, receptionist's computers, and the store's own totem module. It became clear that aesthetics would have to prioritize fluidity."
            }
        },
        {
            asset:{
                src:"fluxq/fluxq-t-1.jpg"
            }, 
            text:{
                title: "wireframe",
                description: "Nubi is a fintech company that joined forces with PayPal."
            }
        },
    ]

    const process = {col1: "The end-product was an array of web-apps that address different parts of Fluxq's business. Clients can create tickets through QR scanning or by submitting their information inside the store's endpoint. Receptionists can manage client flow through their very own panel. Business owners are able to access real time data about their different store's queues, productivity and efficiency.", col2: "It was the first time providig commercial software, to another software company. Having to maintain fluent communication to properly integrate the new web applications to their Java API was a challenge and a formative experience. From re-thinking the UI of their backoffice systems to re assembling the user experience for ticket generation, I enjoyed every bit of the process."}

    const multiple_assets = [
        {
            src: ['fluxq-t-1.jpg', 'fluxq-t-2.jpg']
        },
        {
            src: ['fluxq-t-3.jpg', 'fluxq-t-4.jpg', 'fluxq-t-5.jpg', 'fluxq-t-6.jpg', 'fluxq-t-7.jpg']
        },
        {
            src: ['fluxq-t-8.jpg']
        }
    ]

    const quote = {quote: "He not only exceeded expectations on a technical level but also in his communication capacities.", source: "David Bavaro - CTO"}

    const icons =[
        {title: "generate", des: "Easily create queue tickets.", src: "create.png"},
        {title: "manage", des: "Manage in-store client flow.", src: "manage.png"},
        {title: "monitor", des: "Monitore multiple chains of commerces remotely.", src: "monitor.png"},
    ]
    
    return(
            <div id="project-view-container">
                
                <HeaderProject project={project} />
                <CenteredTexts texts={texts} />
                <AssetAndText data={assets[0]} index={0} project={project} />
                <MultipleAssets project={project} assets={multiple_assets} />
                <CenteredIcons project={project} icons={icons} />
                <Process project={project} process={process} />

                <div className="big-section">
                <div className="single-asset">
                        <img src="imgs/fluxq/drafts.jpg" alt="" />
                    </div>
                    <div className="double-asset">
                        <div>
                            {/* <img src="imgs/atom8/finanzas.jpg" alt="" /> */}
                            <img src="imgs/fluxq/fluxq-t-1.jpg" alt="" />
                        </div>
                        <div><img src="imgs/atom8/flujo.png" alt="" /></div>
                    </div>
                    
                </div>
                
                <Quote  project={project} quote={quote} />
                <MoreWork recommended={0} setView={setView} />
            </div>
    )
}

export default Fluxq