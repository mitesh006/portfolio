import React from 'react'
import './card.css'

const Card = ({icon,metric,desc}) => {
    return (
        <div className='card'>
            
            {icon}
            <p className="card-metric">
                {metric}
            </p>

            <p className="card-desc">
                {desc}
            </p>
        </div>
    )
}

export default Card
