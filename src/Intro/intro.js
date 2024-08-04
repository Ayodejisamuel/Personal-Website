import React, { useEffect } from 'react';
import './intro.css';
import Ayodeji from '../Images/Ayodeji.jpg';
import Typed from 'typed.js'



const Intro = () => {

    useEffect(() => {
        const typed = new Typed('.frontend', {
            strings: ['Frontend Developer', 'Web Designer', 'Backend Developer'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        });
    return () => {
        typed.destroy()
    }
    },[] )
   
    return (
        <section id='intro'>
            <div class="intro-container">
                <div class="text-content">
                    <h3 class="hello">Hello,</h3>
                    <h2 class="Iam">I'm <span class="name">Ayodeji</span></h2>        <span className='andspan'>And i'm a </span><span class="frontend"></span><strong>
                        <p class="introparag">I specialise  in creating visually appealing, responsive, and user-friendly websites.</p>
                    </strong>
                </div>
                <div class="image-container">
                    <img src={Ayodeji} alt="BackgroundImage" />
                </div>
            </div>

        </section>


    )
}

export default Intro;