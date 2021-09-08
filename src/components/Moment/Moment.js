import React, {useState, useEffect} from 'react';

import './Moment.css'

const Moment = ({index}) => {

    return(
            <div className="moment" style={{backgroundImage: "url('imgs/moments/moment"+index+".jpg')"}}>
                
            </div>

    )
}

export default Moment