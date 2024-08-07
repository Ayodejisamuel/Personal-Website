import React, { useEffect, useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import ScrollReveal from "scrollreveal";
import 'boxicons/css/boxicons.min.css'; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_83lfa9b', 'template_7sescoo', form.current, 'Rclnwr9dQXGg57995')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert("Email Sent!");
      }, (error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    ScrollReveal().reveal('#contact form', {
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 500,
      origin: 'bottom'
    });
  }, []);

  return (
    <section id="contact">
      <div>
        <h1 className="contactdesc">Contact <span className="contactdescc">Me!</span></h1>
        <h3 className="contactinfo">Please fill out the form below to discuss any work opportunities.</h3>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" className="text" placeholder="Your Name" required />
          <input type="email" name="from_email" className="email" placeholder="Your Email" required />
          <textarea name="message" className="msg" placeholder="Your Message" rows="5" required></textarea><br />
          <button type="submit" value="Send" className="submitbtn">Submit</button>
        </form>
        <div className="linkcontainer">
        <a href="https://wa.link/h0nwi2" target="_blank"><box-icon className='whatsapp' type="logo" name="whatsapp"></box-icon></a>
          <a href="github.com/Ayodejisamuel/" target="_blank"><box-icon type="logo" name="github"></box-icon></a>
          <a href="https://www.linkedin.com/in/ayodeji-faleye-0b683016a/" target="_blank"><box-icon type="logo" name="linkedin-square"></box-icon></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
