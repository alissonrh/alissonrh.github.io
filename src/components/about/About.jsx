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
            Olá! Me chamo Alisson Rech Honorato, sou desenvolvedor full stack com maior foco em front-end. Sou apaixonado por tecnologia, inovação e por soluções tecnologicas que realmente fazem a diferença na vida das pessoas.
            <br />
            <br />
            Gosto de escrever códigos limpos, interfaces bem pensadas e de aprender constantemente. Estou sempre buscando evoluir como desenvolvedor, estudando também back-end com Node.js, arquitetura de software e boas práticas para aplicações escaláveis e performáticas.
            <br />
            <br />
            Meu objetivo? Me tornar um profissional cada vez mais completo, atuando em projetos que possomos crescer juntos.
          </p>
          <CTA />
        </div>
      </div>
    </section>
  )
}

export default About