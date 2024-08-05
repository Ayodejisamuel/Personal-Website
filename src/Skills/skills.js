import React, { useEffect } from 'react';
import './skills.css';
import  Ayodeji from '../Images/Ayodeji.jpg';
import academyui from '../Images/academyui.png'
import swissmark from '../Images/swissmark.png'
import weatherapp from '../Images/weatherapp.png'
import movieapp from '../Images/movieapp.png'
import quizapp from '../Images/quizapp.png'
import Card from '../Card/Card';
import ScrollReveal from 'scrollreveal';

const Skills = () => {

    useEffect(() => {
        
        ScrollReveal().reveal('.skillBars',  {
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 500,
            origin: 'bottom'
        });
        
    }, [])

    return (
 <section id='skill'>

<h1  className="contactdesc">What I Do</h1> 
 <h3 className="portinfo">I am a skilled and passionate front-end engineer with experience in creating visualling appealing and user-friendly website. I have a strong understanding on design and a keen eye on details. I am proficient in HTML CSS and JavaScript, React, NextJs as well as Javascript Frameworks and CSS pre-processors.</h3>

<div className='skillBars'>
    {/* <Card  img={Ayodeji} name="ReactJS" description="Javascript framework library for creating reuseable user-interfaces."/> */}

    <Card  img={swissmark} name="Responsive Design" description="SwissMark"/>
    <Card  img={academyui} name="UI/UX Design" description="Academy UI"/>
    <Card  img={movieapp} name="API Integration" description="Movie App"/>
    <Card  img={weatherapp} name="Git/Version Control" description="Weather App"/>

    {/* <Card  img={Ayodeji} name="State Management" description="Academy UI"/> */}

    <Card  img={quizapp} name="JavaScript" description="Todo-App"/>

    {/* <Card  img={quizapp} name="JavaScript" description="Quiz App"/> */}

</div>
</section>
    )
}

export default Skills;