import React from 'react'
import  './portfolio.css'
import Ayodeji from '../Images/Ayodeji.jpg'
 


const Portfolio = ()  => {

    return (

        <section id='portfolio'>
             <h1 className="contactdesc">Portfolio</h1>
            <h3 className="portinfo">Kindly find below my Rescent Projects built by utilizing amazing APis, html, css and Javascript using React as a frame work. I am commmited to bring my skills and experience to help grow buisinesses and create strong online presence.</h3>
            <div className='works'>
                < a href='' target='_blank' ><img src={Ayodeji}  className='worksimg'/></a>
                < a href='' target='_blank' > <img src={Ayodeji} className='worksimg'/></a>
                < a href='' target='_blank' ><img src={Ayodeji} className='worksimg'/></a>
                < a href='' target='_blank' ><img src={Ayodeji} className='worksimg'/></a>
                < a href='' target='_blank' ><img src={Ayodeji} className='worksimg'/></a>
                < a href='' target='_blank' ><img src={Ayodeji} className='worksimg'/></a>
            </div>
           
        </section>
        
    )
}

export default Portfolio;