import React from 'react'
import './button.css'

const Button = ({text, icon, className}) => {
  return (
    <button className={`btn ${className}`}>
        {text}
        {icon}
        </button>
  )
}

export default Button