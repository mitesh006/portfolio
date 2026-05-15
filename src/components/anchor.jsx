import React from 'react'
import './anchor.css'

const Anchor = ({text, icon, className, link, download=false}) => {
  return (
    <a 
    href={link} 
    download={download}
    className={`btn ${className}`}
    target="_blank"
    rel="noopener noreferrer"
    >
        {text}
        {icon}
    </a>
  )
}

export default Anchor