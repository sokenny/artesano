import React, {useState, useEffect} from 'react';

import './Profile.css'

import Skill from '../Skill/Skill'

const Profile = () => {

    const skills = ['ReactJS', 'JavaScript', 'Python', 'NodeJS', 'PHP', 'MongoDB', 'MySQL']

    return(
            <div id="profile-container" className="big-section">

                {/* <div id="profile-img"></div> */}

                <div id="profile-info">
                    <div id="p-main-info">
                        <div className="p-pp">
                            <img src="imgs/juan.jpg" alt="" />
                        </div>
                        <div className="p-name-occupation">
                        <h1>Juan Chaher</h1>
                        <h2>Full stack web developer</h2>
                        </div>
                    </div>
                    <div id="p-des">
                        22 y/o. Based in Buenos Aires. I believe limitations grant commitments, and commitments deliver beautiful design systems, that scale. 
                    </div>
                    {/* <div id="p-skills">
                        {skills.map((skill)=>
                            <Skill skill={skill} />
                        )}
                    </div> */}
                </div>

            </div>
    )
}

export default Profile