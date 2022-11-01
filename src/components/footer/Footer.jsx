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
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
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
