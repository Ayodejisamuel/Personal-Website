import React, { useEffect } from 'react';
import './skills.css';
import  Ayodeji from '../Images/Ayodeji.jpg';
import portfolio1 from '../Images/portfolio1.jpg'
import portfolio2 from '../Images/portfolio2.jpg'
import portfolio3 from '../Images/portfolio3.jpg'
import portfolio4 from '../Images/portfolio4.jpg'
import portfolio5 from '../Images/portfolio5.jpg'
import portfolio6 from '../Images/portfolio6.jpg'
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

    <Card  img={portfolio1} name="Responsive Design" description="SwissMark"/>
    <Card  img={portfolio2} name="UI/UX Design" description="Academy UI"/>
    <Card  img={portfolio3} name="API Integration" description="Movie App"/>
    {/* <Card  img={portfolio4} name="Git/Version Control" description="Weather App"/> */}

    {/* <Card  img={Ayodeji} name="State Management" description="Academy UI"/> */}

    {/* <Card  img={portfolio5} name="JavaScript" description="Todo-App"/> */}

    {/* <Card  img={quizapp} name="JavaScript" description="Quiz App"/> */}

</div>
</section>
    )
}

export default Skills;