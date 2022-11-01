import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { MdMiscellaneousServices } from 'react-icons/md'
import { MdOutlineMessage } from 'react-icons/md'


const Nav = () => {
  const [activeNow, setActive] = useState('#home')

  return (
    <nav>
      <a href='#home' onClick={() => setActive('#home')} className={activeNow === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActive('#about')} className={activeNow === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActive('#experience')} className={activeNow === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#services' onClick={() => setActive('#services')} className={activeNow === '#services' ? 'active' : ''}><MdMiscellaneousServices /></a>
      <a href='#contact' onClick={() => setActive('#contact')} className={activeNow === '#contact' ? 'active' : ''}><MdOutlineMessage /></a>
    </nav>
  )
}

export default Nav
