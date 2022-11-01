import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/alissonrhonorato/' target='_blanck'><BsLinkedin/></a>
      <a href='https://github.com/alissonrh' target='_blanck'><BsGithub /></a>
      <a href='https://www.instagram.com/alissonhonoratoo/' target='_blanck'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial