import React from 'react'



const Card = (props) => {
    return (
        <div>
            <div className='skillBar'>
                <img className='skillimg' src={props.img} alt=''></img>
                <div className='skillBarText'>
                    <h2>{props.name}</h2>
                    <p className='skillpara'>{props.description}</p>
                </div>

            </div>

        </div>
    )
}


export default Card;