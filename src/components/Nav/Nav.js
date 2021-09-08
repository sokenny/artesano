import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


import './Nav.css'


const Nav = ({Nav, project}) => {

    

    return(
           
           <nav>
               <Link to={"/"}>
                    <div>artesano.dev</div>
               </Link>
           </nav>
    )
}

export default Nav