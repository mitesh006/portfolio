import React from 'react'
import './skills.css'
import Tech from '../../components/tech'
const Skill = () => {
  return (
    <section className="skills">
      <div className="skills-container">

        <p className='skills-title'>
          TECH STACK
        </p>
      
        <h2 className='skills-intro'>
          Technologies I work with
        </h2>
      
        <div className="stack">
          <Tech logo={'html'} text={'HTML'}/>
          <Tech logo={'css'} text={'CSS'}/>
          <Tech logo={'js'} text={'JS'}/>
          <Tech logo={'cpp'} text={'C++'}/>
          <Tech logo={'java'} text={'Java'}/>
          <Tech logo={'python'} text={'Python'}/>
          <Tech logo={'nodejs'} text={'NodeJs'}/>
          <Tech logo={'mongodb'} text={'MongoDB'}/>
          <Tech logo={'react'} text={'React'}/>
          <Tech logo={'postgres'} text={'SQL'}/>
          <Tech logo={'aws'} text={'AWS'}/>
          <Tech logo={'postman'} text={'Postman'}/>
          <Tech logo={'github'} text={'Git & Github'}/>
        </div>
      </div>
    </section>
  )
}

export default Skill
