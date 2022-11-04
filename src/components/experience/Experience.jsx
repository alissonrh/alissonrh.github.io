import React from 'react';
import './experience.css';
import { BiCheckDouble } from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experiência</h2>
     
      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Desenvolvimento Front End</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiCheckDouble className="detais-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckDouble className="detais-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckDouble className="detais-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Linguagem</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckDouble className="detais-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Freamework</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckDouble className="detais-icon" />
              <div>
                <h4>React</h4>
                <small className='text-light'>Freamework</small>
              </div>
            </article>
          </div>
        </div>
        {/*  <--  end --> */}
        <div className="experience_backend">
          <h3>Desenvolvimento Back End</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiCheckDouble className='detais-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckDouble className='detais-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Banco de dados não-relacional</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckDouble className='detais-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Banco de dados relacional</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckDouble className='detais-icon' />
              <div>
                <h4>Express.js</h4>
                <small className='text-light'>framework para Node.js</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckDouble className="detais-icon" />
              <div>
                <h4>Sequelize</h4>
                <small className='text-light'>Object-relational mapping (ORM)</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckDouble className="detais-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Linguagem</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <h3 className='frase'>Conheça todas minhas ferramentas acessando meu <a href='https://github.com/alissonrh' target='_blanck'>GitHub</a></h3>
    </section>
  )
}

export default Experience