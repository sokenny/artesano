import React, {useState, useEffect} from 'react';

import './Moments.css'

import Moment from '../Moment/Moment';

const Moments = () => {

    const moments = [
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
        {img: 'moment1.jpg', description: 'Descripcion de prueba'},
    ]

    return(
            <div id="moments-container" className="big-section">
                
                <h3>Moments array</h3>

                <div id="array">

                    <div>

                    {moments.map((moment, index)=>
                        <Moment moment={moment} index={parseInt(index+1)} />
                        )}
                    </div>

                </div>

            </div>

    )
}

export default Moments