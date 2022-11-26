import React from 'react'
import {FiLinkedin,FiGithub,FiDribbble} from 'react-icons/fi'


const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://linkedin.com" target="_blank"><FiLinkedin/></a>
        <a href="https://github.com" target="_blank"><FiGithub/></a>
        <a href="https://dribbble.com" target="_blank"><FiDribbble/></a>
      
    </div>
  )
}

export default HeaderSocial
