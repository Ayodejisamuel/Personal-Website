import React, { useEffect } from 'react'
import './portfolio.css'
import Ayodeji from '../Images/Ayodeji.jpg'
import portfolio1 from '../Images/portfolio1.jpg'
import portfolio2 from '../Images/portfolio2.jpg'
import portfolio3 from '../Images/portfolio3.jpg'
import portfolio4 from '../Images/portfolio4.jpg'
import portfolio5 from '../Images/portfolio5.jpg'
import portfolio6 from '../Images/portfolio6.jpg'

import ScrollReveal from 'scrollreveal'


const Portfolio = () => {




    useEffect(() => {

        ScrollReveal().reveal('.contactdesc, .contactinfo, .portinfo', {
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 500,
            origin: 'top'
        });


        ScrollReveal().reveal('.works', {
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 500,
            origin: 'bottom'
        });
    })

    return (

        <section id='portfolio'>
            <h1 className="contactdesc">Portfolio</h1>
            <h3 className="portinfo">Kindly find below my Rescent Projects built by utilizing amazing APis, html, css and Javascript using React as a frame work. I am commmited to bring my skills and experience to help grow buisinesses and create strong online presence.</h3>
            <div className='works'>
                <div className='portfolio-box'>
                    <img src={portfolio1} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>SwissMark</h4>
                        <p>Interior Website</p>
                        <a href='https://ayodejisamuel.github.io/Swissmark/' target='_blank' ></a>
                    </div>
                </div>

                <div className='portfolio-box'>
                <img src={portfolio2} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Weather-Website</p>
                        <a  href='https://ayodejisamuel.github.io/react-weather-app/' target='_blank' ></a>
                    </div>
                </div>

                <div className='portfolio-box'>
                <img src={portfolio3} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>Movie-app</h4>
                        <p>Movie-Website</p>
                        < a href='https://ayodejisamuel.github.io/Movie-App/' target='_blank' ></a>
                    </div>
                </div>

                <div className='portfolio-box'>
                <img src={portfolio4} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>Movie-app</h4>
                        <p>Movie-Website</p>
                        < a href='https://ayodejisamuel.github.io/Movie-App/' target='_blank' ></a>
                    </div>
                </div>

                <div className='portfolio-box'>
                <img src={portfolio5} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>Todo-app</h4>
                        <p>Task-Manager</p>
                        < a href='https://ayodejisamuel.github.io/TODO-APP/' target='_blank' ></a>
                    </div>
                </div>

                <div className='portfolio-box'>
                <img src={portfolio6} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>JavaScript</h4>
                        <p>Calculator</p>
                        < a href='https://ayodejisamuel.github.io/Movie-App/' target='_blank' ></a>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Portfolio;