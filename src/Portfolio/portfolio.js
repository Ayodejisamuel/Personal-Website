import React, { useEffect } from 'react'
import './portfolio.css'
import academyui from '../Images/academyui.png'
import movieapp from '../Images/movieapp.png'
import quizapp from '../Images/quizapp.png'
import swissmark from '../Images/swissmark.jpg'
import weatherapp from '../Images/weatherapp.jpg'
import expertnaire from '../Images/expertnaire.png'
import 'boxicons/css/boxicons.min.css'
import ScrollReveal from 'scrollreveal'







const Portfolio = () => {

    useEffect(() => {

        ScrollReveal().reveal('.contactdesc, .contactinfo, .portinfo', {
            // reset: true,
            distance: '80px',
            duration: 2000,
            delay: 500,
            origin: 'top'
        });


        ScrollReveal().reveal('.works', {
            // reset: true,
            distance: '80px',
            duration: 2000,
            delay: 500,
            origin: 'bottom'
        });
    })

    return (

        <section id='portfolio'>
            <h1 id='contactdesc' className="contactdesc">Latest <span className='contactdescc'>Projects!</span> </h1>
            <h3 className="portinfo">Kindly find below my Rescent Projects built by utilizing amazing APis, html, css and Javascript using React as a frame work. I am commmited to bring my skills and experience to help grow buisinesses and create strong online presence.</h3>
            <div className='works'>
                <div className='portfolio-box'>
                    <img src={swissmark} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>SwissMark</h4>
                        <p>Interior Website</p>
                        <a href='https://ayodejisamuel.github.io/Swissmark/' target='_blank' ><i class='bx bx-link-external'></i></a>
                    </div>
                </div>


                <div className='portfolio-box'>
                    <img src={weatherapp} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>Web Design</h4>
                        <p>Weather-Website</p>
                        <a href='https://ayodejisamuel.github.io/react-weather-app/' target='_blank' ><i class='bx bx-link-external'></i></a>
                    </div>
                </div>


                <div className='portfolio-box'>
                    <img src={movieapp} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>Movie-app</h4>
                        <p>Movie-Website</p>
                        < a href='https://ayodejisamuel.github.io/Movie-App/' target='_blank' ><i class='bx bx-link-external'></i></a>
                    </div>
                </div>


                <div className='portfolio-box'>
                    <img src={academyui} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>Academy UI</h4>
                        <p>User Interface</p>
                        < a href='https://ayodejisamuel.github.io/Academy-UI/' target='_blank' ><i class='bx bx-link-external'></i></a>
                    </div>
                </div>


                <div className='portfolio-box'>
                    <img src={quizapp} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>Quiz-app</h4>
                        <p>Quiz-APP</p>
                        < a href='https://ayodejisamuel.github.io/Quiz-App/' target='_blank' ><i class='bx bx-link-external'></i></a>
                    </div>
                </div>

                <div className='portfolio-box'>
                    <img src={expertnaire} className='worksimg' />
                    <div className='portfolio-layer'>
                        <h4>Expertnaire</h4>
                        <p>Digital Marketing Website</p>
                        < a href='https://ayodejisamuel.github.io/Expertnaire/' target='_blank' ><i class='bx bx-link-external'></i></a>
                    </div>
                </div> 
            </div>

        </section>

    )
}

export default Portfolio;