import React, {useState, useEffect} from 'react';

import './Atom8.css'

import HeaderProject from '../../components/HeaderProject/HeaderProject'
import CenteredTexts from '../../components/CenteredTexts/CenteredTexts'
import Integrations from '../../components/Integrations/Integrations'
import Process from '../../components/Process/Process'
import Quote from '../../components/Quote/Quote'
import MoreWork from '../../components/MoreWork/MoreWork'
import Contact from '../../components/Contact/Contact'
import AssetAndText from '../../components/AssetAndText/AssetAndText'

import {projects} from '../../Global'

const Atom8 = ({setView}) => {

    const project = projects[1]


    const texts = [[
        {title: "industry", des: "SAAS for e-commerces."},
        {title: "client", des: "This was actually tailor made for a startup of mine. Eventually it scaled into a SAAS."},
        {title: "duration", des: "Many sprints (and pivots). 1.5 years."},
    ],
    [
        {title: "challenge", des: "Deliver a universal yet suitable automated ERP. Most CRMs and ERPs are really hard to feed with data if one expects full use of the tool. I wanted to zero in the few metrics that can actually be leveraged to provide actionable insights."},
    ]
]

    const integrations = [
        {name:'mercadopago', des: 'automated data-entry from sales'},
        {name:'analytics', des: 'automated marketing KPIs from website traffic'},
        {name:'facebook ads', des: 'automated marketing KPIs from campaign performance'},
    ]

    const assets = [
        {
            asset:{
                src:"atom8/draft1.jpg"
            }, 
            text:{
                title: "drawing the line",
                description: "I reached an imperative need to better discern data in my ecommerce. There was little processing along with obnoxious data-entry processes."
            }
        },
        {
            asset:{
                src:"atom8/wireframe-2.svg"
            }, 
            text:{
                title: "drive influence",
                description: "I had recently watched Drive and fell in love with their use of contrasts. Its palette was soon poured into the initial prototypes of atom8's UI. It remains present to this day."
            }
        },
        {
            asset:{
                src:"atom8/asset-1.png"
            }, 
            text:{
                title: "modular approach",
                description: "One of the first approaches I had to a modular design system. Identified elements were abstracted into components and placed inside patterns that populate the UI of atom8."
            }
        }
    ]

    const process = {col1: "Atom8 automates the data-entry of ecommerces by integrating to the leading payments gateway in Argentina (MercadoPago). Its integration with analytics and the ads manager concatenates both sales, web and PPC information to display key KPIs and generate actionable metrics effortlessly.", col2: "The fact that atom8 emerged from an actual need lived in first person (being an e-commerce owner myself), helped to consistently align the project with realistic needs and expectations. Lack of deadlines and utility as the sole (initial) purpose allowed for proper project maturity time. Scaling it to a universal SAAS afterwards was quite smooth."}

    const quote = {quote: "Outsourcing repetitive tasks to atom8 allowed us to reconnect with the parts of our business we really enjoy doing.", source: "Marcelo Urrutia - atom8 user"}

    return(
            <div id="project-view-container">
                
                <HeaderProject project={project} />

                <CenteredTexts texts={texts[0]} id={1} />
                
                {/* Asset #1 */}
                <AssetAndText data={assets[0]} index={0} project={project} />
                
                <CenteredTexts texts={texts[1]} id={2} />


                {/* Asset #2 */}
                <AssetAndText data={assets[1]} index={1} project={project} />

                {/* Asset #2 */}
                <AssetAndText data={assets[2]} index={2} project={project} />

                <Integrations integrations={integrations} />
                <Process project={project} process={process} />

                <div className="big-section">
                    <div className="double-asset">
                        <div>
                            <img src="imgs/atom8/draft2.jpg" alt="" />
                        </div>
                        <div><img src="imgs/atom8/draft3.jpg" alt="" /></div>
                    </div>
                    <div className="single-asset">
                        <div><img src="imgs/atom8/dashboard.jpg" alt="" /></div>
                    </div>
                    <div className="double-asset">
                        <div>
                            <img src="imgs/atom8/finanzas.jpg" alt="" />
                            <img src="imgs/atom8/reportes.jpg" alt="" />
                        </div>
                        <div><img src="imgs/atom8/flujo.png" alt="" /></div>
                    </div>
     
                </div>

                <Quote quote={quote} project={project} />
                
                <MoreWork recommended={2} setView={setView} />

                {/* <Contact/> */}

            </div>
    )
}

export default Atom8