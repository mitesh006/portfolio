import React from 'react'
import {ArrowUpRight} from 'lucide-react'
import  './hero.css'
import Go from '../../components/links'
import Anchor from '../../components/anchor'
import Me from '../../assets/imgs/me.png'
import Logo from '../../assets/imgs/logo.png'
import { DownloadIcon } from 'lucide-react'

const Hero = () => {
  return (
    <section className="hero" id='Hero '>

      {/* Mobile-only top bar: Logo + Resume */}
      <div className="mobile-header">
        <img src={Logo} alt='Logo' className='mobile-logo' />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <p className='hero-title title'>Hi, I'm Mitesh Patil</p>

          <h1 className='hero-intro'>
          I build digital <br />
          <span>experiences </span>that<br />
          make an impact.
          </h1>
          
          <p className='hero-desc desc'>
          A passionate Full Stack Developer crafting
          modern web applications with clean code
          and creative design.
          </p>

          <div className="buttons">
            <Go 
            link={'Projects'}
            className={'Work alt'}
            text={'View My Work'}
            icon={<ArrowUpRight size={18}/>}
            />

            {/* Resume btn — hidden on desktop, shown on mobile beside above two */}
            <Anchor
              className={'heroMobileResumeBtn'}
              download={true}
              text={'Resume'}
              icon={<DownloadIcon size={18}/>}
              link={'/Mitesh Patil.pdf'}
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
