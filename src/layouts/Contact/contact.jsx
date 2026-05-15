import React from 'react'
import './contact.css'
import { LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu'
import { TfiEmail } from 'react-icons/tfi'
const Contact = () => {
  return (
    <footer className="contact-section" id='Contact'>
        <div className="contact-content">
            <div className="name">
                © 2026 Mitesh Patil
            </div>

            <div className="links">
                <a className='link' href="https://github.com/mitesh006" target='_blank' rel="noopener noreferrer"><LuGithub/></a>
                <a className='link' href="https://www.linkedin.com/in/mitesh-patil-673923330/" target='_blank' rel="noopener noreferrer"><LuLinkedin/></a>
                <a className='link' href="https://www.instagram.com/mitesh._.06/" target='_blank' rel="noopener noreferrer"><LuInstagram/></a>
                <a className='link' href="mailto:mapatilk101@gmail.com" rel="noopener noreferrer"><TfiEmail/></a>
            </div>

        </div>
    </footer>
  )
}

export default Contact
