import React from 'react'
import './Header.css'


const Header = (props) => {

    return (

       <div>
        <h1 className='heading'>{props.heading}</h1>
       </div> 
       
    )
}



export default Header;