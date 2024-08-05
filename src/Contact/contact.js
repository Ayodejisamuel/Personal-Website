import  {useEffect, useRef} from "react";
import React from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import { Link } from "react-scroll";
import ScrollReveal from "scrollreveal";


const Contact = () => {

    useEffect(() => {
        
        ScrollReveal().reveal('#contact form',  {
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 500,
            origin: 'bottom'
        });
        
    })

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hvj3j8i', 'template_7sescoo', form.current, 'KFdIe9DJKYtA8W65w')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
              alert("Email Sent!")
          }, (error) => {
              console.log(error.text);
          });

        }
    return (
    <section id="contact">
        <div>
            <h1 className="contactdesc">Contact Me</h1>
            <h3 className="contactinfo">Please fill out the form below to discuss any work opportunities.</h3>
            <form  className="contactform" ref={form} onSubmit={sendEmail}>
                
                <input type="text" name="from_name" className="text" placeholder=" Your Name" />
                <input type="email" name="from_email" className="email" placeholder="Your Email" />
                <textarea name="message" className="msg" placeholder="Your Message" rows="5"></textarea><br />
                <button type="submit" value="Send" className="submitbtn">Submit</button>

            </form>

            <div className="linkcontainer">
            
            <Link className="footerlink">Github</Link>
            <Link className="footerlink" >Twiter</Link>
            <Link className="footerlink">Linkedln</Link>
           
            </div>
        </div>
    </section >
    )
}



export default Contact