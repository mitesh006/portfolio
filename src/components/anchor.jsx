import React from 'react'
import './anchor.css'
import './button.css'

const Anchor = ({text, icon, className, link, download=false}) => {
  return (
    <a 
    href={link} 
    download={download}
    className={`btn ${className}`}
    rel="noopener noreferrer"
    >
        {text}
        {icon}
    </a>
  )
}

export default Anchor