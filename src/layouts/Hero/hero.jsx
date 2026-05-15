import React from 'react'
import {ArrowUpRight} from 'lucide-react'
import  './hero.css'
import Button from '../../components/button'
import Me from '../../assets/imgs/me.png'

const Hero = () => {
  return (
    <section className="hero" id='Hero'>
      <div className="hero-container">
        <div className="hero-content">
          <p className='hero-title title'>Hi, I'm Mitesh Patil</p>



          <h1 className='hero-intro'>
          I build digital <br />
          <span> experiences </span> that<br />
          make an impact.
          
          </h1>
          
          <p className='hero-desc desc '>
          A passionate Full Stack Developer crafting <br />
          modern web applications with clean code <br />
          and creative design.
          </p>

          <div className="buttons">
            <Button 
            className={'Work alt'}
            text={'View My Work'}
            icon={<ArrowUpRight size={18}/>}
            />

            <Button 
            className={'Contact'}
            text={'Contact Me'}
            icon={<ArrowUpRight size={18}/>}
            />

          </div>
        
        </div>

        <div className="hero-image">
            <img src={Me} className='me' alt="Me" />
        </div>

      </div>
    </section>
  )
}

export default Hero
