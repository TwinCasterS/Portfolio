import React from 'react'
import './about.css'
import ME from '../../assets/My project-2.png'
import {FaMedal,FaUser} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="about-img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaMedal className='about__icon'/>
              <h5>Experience</h5>
              <small>Internship in SCB <br/> Developer</small>
            </article>
            <article className='about__card'>
              <FaUser className='about__icon'/>
              <h5>Study</h5>
              <small>KMUTNB Thailand 4th years</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>GPA</h5>
              <small>3.15</small>
            </article>
          </div>
          <p>Right now I'm study at KMUTNB (Kingmongkut Ubiversity of Technology North Bangkok). <br />I've interested at WebDevelopment with HTMl CSS JavaScript or Design Web with 
            FIGMA and I'm looking a place for Internship. </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
