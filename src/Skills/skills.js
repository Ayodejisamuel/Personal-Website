import React from 'react';
import './skills.css';
import  Ayodeji from '../Images/Ayodeji.jpg';
import Card from '../Card/Card';

const Skills = () => {

    return (
 <section id='skill'>

<h1 className="contactdesc">What I Do</h1>
<h3 className="portinfo">I am a skilled and passionate front-end engineer with experience in creating visualling appealing and user-friendly website. I have a strong understanding on design and a keen eye on details. I am proficient in HTML Css and JavaScript as well as Javascript Frameworks and CSS processors.</h3>

<div className='skillBars'>
    {/* <Card  img={Ayodeji} name="ReactJS" description="Javascript framework library for creating reuseable user-interfaces."/> */}

    <Card  img={Ayodeji} name="Responsive Design" description="UI/UX design this is the demo text"/>
    <Card  img={Ayodeji} name="Responsive Design" description="UI/UX design this is the demo text"/>
    <Card  img={Ayodeji} name="Responsive Design" description="UI/UX design this is the demo text"/>
    <Card  img={Ayodeji} name="Responsive Design" description="UI/UX design this is the demo text"/>

    <Card  img={Ayodeji} name="UI/UX Design" description="ui/ux design this is the demo text"/>

    <Card  img={Ayodeji} name="API Integration" description="ui/ux design this is the demo text"/>

    <Card  img={Ayodeji} name="Git/Version Control" description="ui/ux design this is the demo text"/>

</div>
</section>
    )
}

export default Skills;