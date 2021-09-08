import React, {useState, useEffect} from 'react';
import emailjs from "emailjs-com";

import './Contact.css'

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_22kiu6y', 'template_b7le0bo', e.target, 'user_F8IJ9927cSNZLuuxxzAcL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log('Va el error')
              console.log(error.text);
          });
          e.target.reset()
          sayThankYou()
          
      }

    function sayThankYou(){

        var inputs = document.querySelectorAll('#contact-form input, #contact-form textarea')
        console.log('Inuts: ', inputs)

        for(let i= 0; i<=inputs.length; i++){
            if(inputs[i] !== undefined){
                console.log('i: ', inputs[i])
                inputs[i].disabled = true
                inputs[i].style.opacity = .15
            }
        }

        document.querySelector('#contact-form .thank-you').classList.remove('hidden-down')

    }

    return(
            <div id="contact-container" className="big-section">

                <h3>Contact</h3>

                <form action="" id="contact-form" onSubmit={sendEmail}>

                    <div className="thank-you hidden-down">Thank you. I will try to get back to you in less than 24 hours :)</div>

                    <div className="inputs-row">

                        <input type="text" placeholder="name" name="name" autoComplete="no" />
                        <input type="text" placeholder="email" name="email" autoComplete="no" />
                        <input type="text" placeholder="phone" name="phone" autoComplete="no" />
                        

                    </div>
                        <textarea name="message" id="" cols="30" rows="10" autoComplete="no" placeholder="message" ></textarea>
                        <input type="submit" id="enviar" value="SEND" />
                </form>

            </div>
    )
}

export default Contact