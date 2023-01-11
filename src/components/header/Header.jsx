import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <div className="hello_container">
          <h3>Olá, eu sou o</h3>
          <h1>Alisson Rech Honorato</h1>
          <h2 className="text-light">Desenvolvedor Full Stack</h2>
        </div>
        <HeaderSocial />
        <div className="me_container">
          <div className='me'>
            <img src={ME} alt='me' />
          </div>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header
