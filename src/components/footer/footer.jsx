import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram ,AiFillTwitterCircle} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>THANK YOU</a>

      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exp">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#port">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="mailto:s6203051623048@email.kmutnb.ac.th"><BsFacebook/></a>
        <a href="mailto:s6203051623048@email.kmutnb.ac.th"><AiFillInstagram/></a>
        <a href="mailto:s6203051623048@email.kmutnb.ac.th"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;TwinCasterS. All right reserved</small>
      </div>
    </footer>
  )
}

export default footer
