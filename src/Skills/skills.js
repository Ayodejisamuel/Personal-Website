import React from 'react';
import './skills.css';
import  Ayodeji from '../Images/Ayodeji.jpg';
import academyui from '../Images/academyui.png'
import Card from '../Card/Card';

const Skills = () => {

    return (
 <section id='skill'>

<h1 className="contactdesc">What I Do</h1> 
 <h3 className="portinfo">I am a skilled and passionate front-end engineer with experience in creating visualling appealing and user-friendly website. I have a strong understanding on design and a keen eye on details. I am proficient in HTML CSS and JavaScript, React, NextJs as well as Javascript Frameworks and CSS pre-processors.</h3>

<div className='skillBars'>
    {/* <Card  img={Ayodeji} name="ReactJS" description="Javascript framework library for creating reuseable user-interfaces."/> */}

    <Card  img={Ayodeji} name="Responsive Design" description="SwissMark"/>
    <Card  img={academyui} name="UI/UX Design" description="Academy UI"/>
    <Card  img={Ayodeji} name="API Integration" description="Movie App"/>
    <Card  img={Ayodeji} name="Git/Version Control" description="Weather App"/>

    <Card  img={Ayodeji} name="State Management" description="Academy UI"/>

    <Card  img={Ayodeji} name="JavaScript" description="Todo-App"/>

    <Card  img={Ayodeji} name="JavaScript" description="Quiz App"/>

</div>
</section>
    )
}

export default Skills;