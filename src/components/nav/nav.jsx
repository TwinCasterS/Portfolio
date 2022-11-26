import React from 'react'
import './nav.css'
import {GrContact} from 'react-icons/gr'
import {SiAboutdotme} from  'react-icons/si'
import {GiSkills, GiSmallFire} from 'react-icons/gi'
import {MdOutlineDesignServices,MdHome,MdPermContactCalendar} from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
  const [activeNav,setActive] = useState('#');
  return (
    <nav>
      <a href="#"  onClick={()=>setActive('#')} className={activeNav === '#' ? 'active' : ''}><MdHome/></a>
      <a href="#about"  onClick={()=>setActive('#about')} className={activeNav === '#about' ? 'active' : ''} ><SiAboutdotme/></a>   
      <a href="#exp"  onClick={()=>setActive('#exp')} className={activeNav === '#exp' ? 'active' : ''} ><GiSkills/></a>    
      <a href="#services"   onClick={()=>setActive('#services')} className={activeNav === '#services' ? 'active' : ''} ><MdOutlineDesignServices/></a>      
      <a href="#contact"  onClick={()=>setActive('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><MdPermContactCalendar/></a>
    </nav>
  )
}
export default Nav
