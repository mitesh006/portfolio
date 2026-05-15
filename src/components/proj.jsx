import React from 'react'
import './proj.css'
import Anchor from './anchor'
import { LuGithub } from 'react-icons/lu'
import { ExternalLink } from 'lucide-react'

const Proj = ({image, title, desc, techs, links, }) => {
  return (
    <div className='proj-item'>
        <div className="item-image">
            <img src={image} alt="proj"/>
        </div>
        <div className="item-content">            
            <h4>
                {title}
            </h4>

            <p>
                {desc}
            </p>
            <div className="tech-stack">
                {techs?.map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
            <div className="visit">

                <Anchor 
                link={links?.github}
                className={'Code'}
                icon={<LuGithub size={14}/>}
                text={'Code'}
                />
                {links?.live && (
                    <Anchor 
                    link={links?.live}
                    className={'Link alt'}
                    icon={<ExternalLink size={14}/>}
                    text={'Visit'}
                    />               
                )}               
            </div>
        </div>
    </div>
  )
}

export default Proj
