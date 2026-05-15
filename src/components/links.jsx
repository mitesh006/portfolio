import React from 'react'
import './anchor.css'
import './button.css'
import { Link } from 'react-scroll'

const Go = ({text, icon, className, link, download=false}) => {
  return (
    <Link
    className={`btn ${className}`}
    to={link} 
    smooth={true} duration={500}
    >
        {text}
        {icon}
    </Link>
  )
}

export default Go
