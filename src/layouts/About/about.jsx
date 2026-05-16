import React from 'react'
import './about.css'
import Card from '../../components/card'
import {Coffee, Infinity, Code, Cpu, Notebook} from 'lucide-react'

const About = () => {
  return (
    <section className='about-me' id='About'>
        <div className="about-container">

            <div className="about-content">
                <p className="about-title title">
                    ABOUT ME
                </p>

                <h2 className='about-intro intro'>
                    Turning ideas into <br />
                    real world solutions.
                </h2>

                <p className="about-desc desc ">
                    I love building interactive, scalable and 
                    beautiful web applications. I enjoy solving
                    problems and learning new technologies.
                </p>
            </div>
            
            <div className="about-cards">
                <Card
                icon={<Notebook stroke='#a1a1aa' strokeWidth={1}/>}
                metric={'7.48'}
                desc={'CGPA'}
                />
                <Card
                icon={<Cpu stroke='#a1a1aa' strokeWidth={1}/>}
                metric={'10+'}
                desc={'Technologies'}
                />
                <Card
                icon={<Code stroke='#a1a1aa' strokeWidth={1}/>}
                metric={'8+'}
                desc={'Projects'}
                />
                <Card
                icon={<Coffee stroke='#a1a1aa' strokeWidth={1}/>}
                metric={<Infinity strokeWidth={1}/>}
                desc={'Cups of Coffee'}
                />
            </div>
        </div>
    </section>
  )
}

export default About
