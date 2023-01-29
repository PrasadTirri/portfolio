import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookmarkPlusFill} from 'react-icons/bs'
import {BiServer} from 'react-icons/bi'
import {MdContactPage} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")} className={activeNav==="#" ? 'active' :''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav==="#about" ? 'active' :''}> <AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav==="#experience" ? 'active' :''}><BsFillBookmarkPlusFill /></a>
      <a href="#services" onClick={()=> setActiveNav("#services")} className={activeNav==="#services" ? 'active' :''}><BiServer /></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav==="#contact" ? 'active' :''}> < MdContactPage /></a>
    </nav>
  )
}

export default Nav