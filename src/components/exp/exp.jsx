import React from 'react'
import'./exp.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const exp = () => {
  return (
    <section id='exp'>
      <h5>Skill that </h5>
      <h2>I HAVE</h2>

<div className="container exp__container">
  <div className="exp__frontend">
    <h3>Frontend Development</h3>
    <div className="exp__content">
      <article className='exp__detail'>
        <BsFillCheckCircleFill class='exp__detail-icon'/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'>lvl 4 out of 5</small>
        </div>
      </article>
      <article className='exp__detail'>
        <BsFillCheckCircleFill class='exp__detail-icon'/>
        <div>
          <h4>CSS</h4>
          <small className='text-light'>lvl 3 out of 5</small>
        </div>
      </article>
      <article className='exp__detail'>
        <BsFillCheckCircleFill class='exp__detail-icon'/>
        <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>lvl 4 out of 5</small>
        </div>
      </article>
      <article className='exp__detail'>
        <BsFillCheckCircleFill class='exp__detail-icon'/>
       <div> 
          <h4>REACT</h4>
          <small className='text-light'>lvl 3 out of 5</small>
        </div>
      </article>
      <article className='exp__detail'>
        <BsFillCheckCircleFill class='exp__detail-icon'/>
        <div>
          <h4>NEXT</h4>
          <small className='text-light'>lvl 2 out of 5</small>
        </div>
      </article>
      <article className='exp__detail'>
        <BsFillCheckCircleFill class='exp__detail-icon'/>
        <div>
        <h4>FIGMA</h4>
        <small className='text-light'>lvl 4 out of 5</small>
        </div>
      </article>
      
    </div>
  </div>
  <div className="exp__backend">
    <h3>Backend Development</h3>
    <div className="exp__content">
  <article className='exp__detail'>
        <BsFillCheckCircleFill class='exp__detail-icon'/>
        <div>
          <h4>PHP</h4>
          <small className='text-light'>lvl 3 out of 5</small>
        </div>
      </article>
      <article className='exp__detail'>
        <BsFillCheckCircleFill class='exp__detail-icon'/>
        <div>
          <h4>NodeJS</h4>
          <small className='text-light'>lvl 3 out of 5</small>
        </div>
      </article>
      <article className='exp__detail'>
        <BsFillCheckCircleFill class='exp__detail-icon'/>
        <div>
          <h4>MongoDB</h4>
          <small className='text-light'>lvl 3 out of 5</small>
        </div>
      </article>
      <article className='exp__detail'>
        <BsFillCheckCircleFill class='exp__detail-icon'/>
        <div>
          <h4>MySQL</h4>
          <small className='text-light'>lvl 3 out of 5</small>
        </div>
      </article>
      <article className='exp__detail'>
        <BsFillCheckCircleFill class='exp__detail-icon' />
        <div>
          <h4>FireBASE</h4>
          <small className='text-light'>lvl 2 out of 5</small>
        </div>
      </article>
      </div>
  </div>
</div>

    </section>
  )
}

export default exp
