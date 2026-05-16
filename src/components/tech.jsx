import React from 'react'
import './tech.css'

const Tech = ({logo, text}) => {
  return (
    <div className='tech-item'>
      <img src={`https://skillicons.dev/icons?i=${logo}&theme=dark`} alt={logo}/>
      <span>
        {text}    
      </span>
    </div>
  )
}

export default Tech
