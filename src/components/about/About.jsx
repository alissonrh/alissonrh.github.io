import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import CTA from '../header/CTA'

const About = () => {
  return (
    <section id='about'>
      <h5>Conheça</h5>
      <h2>Sobre Mim</h2>

      <div className="container about_container" >
        <div className="about_me">
          <div className='about_me-image'>
            <img src={ME} alt='me' />
          </div>

        </div>
        <div className="about_content">
          <p>
            Formado em Geologia pela Federal de Santa Catarina, durante a graduação, em projetos de iniciação cientifica que fui pesquisador, atuei na vertente das geotecnologias e tive a oportunidade de me aproximar do segmento tecnológico e me apaixonei por programação!
            <br />
            <br />
            Hoje sou Desenvolvedor de Software Web, sou programador Full Stack, desenvolvo aplicações com React e Node.js. Busco aplicar a minha formação em Desenvolvimento de Software Web Full Stack, com o meu conhecimento em pesquisa e trabalho em grupo, para agregar valor a equipe que faço parte.
          </p>
          <CTA />
        </div>
      </div>
    </section>
  )
}

export default About