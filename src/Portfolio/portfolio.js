import React from 'react'
import  './portfolio.css'
import Ayodeji from '../Images/Ayodeji.jpg'
import weatherapp from '../Images/weatherapp.png'
import movieapp from '../Images/movieapp.png'
import swissmark from '../Images/swissmark.png'
import academyui from '../Images/academyui.png'
import todoapp from '../Images/todo-app (1).png'
import quizapp from '../Images/quizapp.png'


const Portfolio = ()  => {

    return (

        <section id='portfolio'>
             <h1 className="contactdesc">Portfolio</h1>
            <h3 className="portinfo">Kindly find below my Rescent Projects built by utilizing amazing APis, html, css and Javascript using React as a frame work. I am commmited to bring my skills and experience to help grow buisinesses and create strong online presence.</h3>
            <div className='works'>
                < a href='https://ayodejisamuel.github.io/Swissmark/' target='_blank' ><img src={swissmark}  className='worksimg'/></a>
                < a href='https://ayodejisamuel.github.io/react-weather-app/' target='_blank' > <img src={weatherapp} className='worksimg'/></a>
                < a href='https://ayodejisamuel.github.io/Movie-App/' target='_blank' ><img src={movieapp} className='worksimg'/></a>
                < a href='https://ayodejisamuel.github.io/TODO-APP/' target='_blank' ><img src={todoapp} className='worksimg'/></a>
                < a href='https://ayodejisamuel.github.io/Academy-UI/' target='_blank' ><img src={academyui} className='worksimg'/></a>
                < a href='' target='_blank' ><img src={quizapp} className='worksimg'/></a>
            </div>
           
        </section>
        
    )
}

export default Portfolio;