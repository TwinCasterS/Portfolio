import React from 'react'
import './services.css'
import {FaCheck} from 'react-icons/fa'
const services = () => {
  return (
    <section id='services'>
      <h5>What I OFFER</h5>
      <h2>Services</h2>
      <div className="services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
           {/*-----UX/UI--------*/}
          <ul className='service__list'>
            <li>
              <FaCheck className='service_list-icon'/>
              <p>Design</p>
            </li>
            <li>
              <FaCheck className='service_list-icon'/>
              <p>Create from requirement</p>
            </li>
            <li>
              <FaCheck className='service_list-icon'/>
              <p>Create from scratch</p>
            </li>
          </ul>
           {/*-----END OF UX/UI--------*/}
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
           {/*-----WebDev--------*/}
          <ul className='service__list'>
            <li>
              <FaCheck className='service_list-icon'/>
              <p>Develop with team/solo</p>
            </li>
            <li>
              <FaCheck className='service_list-icon'/>
              <p>Develop from requirement</p>
            </li>
            <li>
              <FaCheck className='service_list-icon'/>
              <p>Develop from scratch</p>
            </li>
          </ul>
           {/*-----END OF WebDev--------*/}
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Database</h3>
          </div>
           {/*-----Database--------*/}
          <ul className='service__list'>
            <li>
              <FaCheck className='service_list-icon'/>
              <p>Design from requirement</p>
            </li>
            <li>
              <FaCheck className='service_list-icon'/>
              <p>Create</p>
            </li>
            <li>
              <FaCheck className='service_list-icon'/>
              <p>Deploy</p>
            </li>
          </ul>
           {/*-----END OF Database--------*/}
        </article>
      </div>

    </section>
  )
}

export default services
