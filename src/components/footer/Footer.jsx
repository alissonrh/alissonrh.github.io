import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer_logo'>ARH</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>Sobre</a></li>
        <li><a href='#experience'>Experiência</a></li>
        <li><a href='#portfolio'>Portfólio</a></li>
        <li><a href='#contact'>Contato</a></li>
      </ul>

      <div className="footer_socials">
      <a href='https://www.linkedin.com/in/alissonrhonorato/' target='_blanck'><BsLinkedin/></a>
      <a href='https://github.com/alissonrh' target='_blanck'><BsGithub /></a>
      <a href='https://www.instagram.com/alissonhonoratoo/' target='_blanck'><BsInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;  Alisson Rech Honorato</small>
      </div>
    </footer>
  )
}

export default Footer
