import React from 'react'
import './projects.css'
import {ArrowRight} from 'lucide-react'
import Proj from '../../components/proj'
import Snake from '../../assets/imgs/snake.png'
import Stock from '../../assets/imgs/stock.png'
import Airlines from '../../assets/imgs/airlines.png'

const Projects = () => {
  return (
    <section className="project-section" id='Projects'>
        <div className="project-container">

            <p className="proj-title title">
                FEATURED PROJECTS
            </p>
            <h2 className='proj-intro intro'>
                Some things I've built
            </h2>

            <div className="proj-cards">
                <Proj   
                    image={Snake}
                    title={'NEON SNAKE'}
                    desc={'A classic Snake Game built with JavaScript featuring smooth controls, score tracking and high score.'}
                    techs={['REACTJS','LOGIC']}
                    links={{
                        github: 'https://github.com/mitesh006/neon-snake',
                        live: 'https://neon-snake-tan.vercel.app/'
                    }}
                />
                <Proj   
                    image={Stock}
                    title={'STOCK GURU'}
                    desc={'A Stock Market Analyzer which analyze and predict stock prices, made for understanding backend, APIs, Auth Systems, Databases.'}
                    techs={['NODEJS','MONGODB','VANILLA','APIs']}
                    links={{
                        github: 'https://github.com/mitesh006/StockGuru',
                        live: 'https://stock-guru-neo.vercel.app/'
                    }}
                />
                <Proj   
                    image={Airlines}
                    title={'AIRLINES SYSTEM'}
                    desc={'A core terminal based project simulating airline booking system which uses core features of OOPS.'}
                    techs={['C++','LOGIC','FILESYSTEM','OOPS']}
                    links={{
                        github: 'https://github.com/mitesh006/Airlines_System'
                    }}
                />
            </div>  
        </div>
    </section>
  )
}


export default Projects
