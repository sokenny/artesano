import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Home from './views/Home/Home'
import Atom8 from './views/Atom8/Atom8'
import MyTaggie from './views/MyTaggie/MyTaggie'
import Fluxq from './views/Fluxq/Fluxq'
import Path from './views/Path/Path'
import Nav from './components/Nav/Nav'

import Stackoverflow from './components/Stackoverflow/Stackoverflow'

import ScrollToTop from './ScrollToTop';

import './Global.css'

const App = () => {

    const history = useHistory()
    
    function render(){


        return <Router>

                    <ScrollToTop/>

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/atom8">
                            <Nav/>
                            <Atom8 />
                        </Route>
                        <Route path="/mytaggie">
                            <Nav/>
                            <MyTaggie />
                        </Route>
                        <Route path="/path">
                            <Nav/>
                            <Path />
                        </Route>
                        <Route path="/fluxq">
                            <Nav/>
                            <Fluxq />
                        </Route>
                        <Route path="/stackoverflow">
                            <Nav/>
                            <Stackoverflow />
                        </Route>
                    </Switch>

                </Router>

    }


    return (

            render()
            
    )

}   

export default App