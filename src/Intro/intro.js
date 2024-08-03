import React from 'react';
import './intro.css';
import Ayodeji from '../Images/Ayodeji.jpg';



const Intro = () => {

    return (
        <section id='intro'>
            <div class="intro-container">
                <div class="text-content">
                    <h3 class="hello">Hello,</h3>
                    <h2 class="Iam">I'm <span class="name">Ayodeji</span></h2>
                    <h2 class="frontend">Frontend Engineer</h2>
                    <strong>
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