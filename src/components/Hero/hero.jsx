import React from 'react'
import {ArrowUpRight} from 'lucide-react'
import  './hero.css'

const Hero = () => {
  return (
    <section className="Hero">
        <p>Hi, I'm Mitesh Patil</p>
        
        <h1>I build digital </h1>
        <h1>experiences</h1>
        <h1>that make an impact.</h1>
        
        <p>A passionate Full Stack Developer crafting <br />
        modern web applications with clean code <br />
        and creative design</p>

        <h1>I build</h1>
        <button className="Work">View My Work<ArrowUpRight size={18}/></button>
        <button className="Contact">Contact Me<ArrowUpRight size={18}/></button>
    </section>
  )
}

export default Hero
