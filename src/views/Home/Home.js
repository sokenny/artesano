import React, {useState, useEffect} from 'react';

import './Home.css'

import Profile from '../../components/Profile/Profile'
import Portfolio from '../../components/Portfolio/Portfolio'
import Contact from '../../components/Contact/Contact'
import Moments from '../../components/Moments/Moments'
import Nav from '../../components/Nav/Nav'

const Home = () => {

    return(
            <>
            <Nav/>
            <Profile/>
            <Portfolio />
            <Contact/>
            <Moments/>

            </>
    )
}

export default Home