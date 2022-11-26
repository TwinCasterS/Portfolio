import React from 'react'
import './port.css'
import IMG1 from './../../assets/BitMeta.png'
import IMG2 from './../../assets/Enet888.png'
import IMG3 from './../../assets/jectjob.png'


const port = () => {
  return (
    <section id='port'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <container className="port__container">
        <article className='port__item'>
          <div className="port__item-img">
            <img className='imgport' src={IMG1} alt="" />
          </div>
          <h3>BitMeta <br/> Crypto Exchange Platform</h3>
        </article>
        <article className='port__item'>
          <div className="port__item-img">
            <img className='imgport' src={IMG2} alt="" />
          </div>
          <h3>EnET888 <br/> Online Shopping Store</h3> 
        </article>
        <article className='port__item'>
          <div className="port__item-img">
            <img className='imgport' src={IMG3} alt="" />
          </div>
          <h3>JectJobe <br/> Online Shopping Platform</h3>
        </article>
      </container>

    </section>
  )
}

export default port
