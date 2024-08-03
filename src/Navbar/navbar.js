import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll'

const Navbar = () => {

    const [mobMenu, setMobMenu] = useState(false);


    return (
        <section id='navbar'>

            <h2>Logo Image</h2>

            <div className='links'>

                <Link smooth={true} className='desktopLink' spy={true} offset={-2000} duration={500} activeClass="active" to="intro">Home</Link>

                {/* <Link smooth={true} spy={true} className='desktopLink' offset={-100} duration={500} activeClass="active" to="intro">About</Link> */}

                <Link smooth={true} spy={true} className='desktopLink' offset={-75} duration={500} activeClass="active" to="skill">About</Link>

                <Link smooth={true} spy={true} className='desktopLink' offset={-75} duration={500} activeClass="active" to="portfolio">Portfolio</Link>

            </div>
            <div >

                <Link className="contactbtn" smooth={true} spy={true} offset={-25} duration={500} activeClass="active" to="contact" >Contact Me</Link>
            </div>
            {/* Start of mobile Menu */}
            <h2 onClick={() => setMobMenu(!mobMenu)} className='mobMenu'>---</h2>
            <div className='navmenu' style={{ display: mobMenu ? 'flex' : 'none' }} >

                <Link onClick={() => setMobMenu(false)} smooth={true} className='mobLink' spy={true} offset={-2000} duration={500} activeClass="active" to="intro">Home</Link>

                {/* <Link onClick={() => setMobMenu(false)} smooth={true} spy={true} className='mobLink' offset={-100} duration={500} activeClass="active" to="intro">About</Link> */}

                <Link onClick={() => setMobMenu(false)} smooth={true} spy={true} className='mobLink' offset={-75} duration={500} activeClass="activ" to="skill">About</Link>

                <Link onClick={() => setMobMenu(false)} smooth={true} className='mobLink' spy={true} offset={-75} duration={500} activeClass="active" to="portfolio">Portfolio</Link>

                <Link onClick={() => setMobMenu(false)} smooth={true} className='mobLink' spy={true} offset={-25} duration={500} activeClass="active" to="contact">Contact Me </Link>
            </div>
        </section>

    )

}


export default Navbar;