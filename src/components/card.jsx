import React from 'react'
import './card.css'

const Card = ({icon,metric,desc}) => {
    return (
        <div className='card'>
            
            <div className="icon-wrapper">
            {icon}
            </div>
            <h2>
                {metric}
            </h2>

            <p>
                {desc}
            </p>
        </div>
    )
}

export default Card
