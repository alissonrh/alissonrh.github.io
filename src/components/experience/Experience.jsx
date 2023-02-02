import React from 'react';
import './experience.css';
/* import { BiCheckDouble } from 'react-icons/bi' */

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experiência</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Desenvolvimento Front End</h3>
          <div className="experience_content">
            <article className="experience_details">
              {/*          <BiCheckDouble className="detais-icon" /> */}
              <div>
                <img align="center" alt="HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"></img>
                <h4 align="center" >HTML</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img align="center" alt="CSS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"></img>
                <h4 align="center" >CSS</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img align="center" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"></img>
                <h4 align="center" >JavaScript</h4>
              </div>

            </article>
            <article className="experience_details">
              <div>
                <img align="center" alt="TAILWIND" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"></img>
                <h4 align="center" >Tailwind</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img align="center" alt="REACT" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></img>
                <h4 align="center" >React</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img align="center" alt="REDUX" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"></img>
                <h4 align="center" >Redux</h4>
              </div>
            </article>
          </div>
        </div>
        {/*  <--  end --> */}
        <div className="experience_backend">
          <h3>Desenvolvimento Back End</h3>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <img align="center" alt="NODE" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"></img>
                <h4 align="center" >Node.js</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img align="center" alt="express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                <h4 align="center">Express.js</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img align="center" alt="mongodb" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />

                <h4 align="center" >MongoDB</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>

                <img align="center" alt="mysql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />

                <h4 align="center">MySQL</h4>
              </div>
            </article>

            <article className="experience_details">
              <div>
                <img align="center" alt="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" />
                <h4 align="center" >Docker</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>

                <img lign="center" alt="typescrpit" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />

                <h4 align="center" >TypeScript</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>

                <img lign="center" alt="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />

                <h4 align="center" >Python</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
      <h3 className='frase'>Conheça todas as minhas habilidades acessando meu <a href='https://github.com/alissonrh' target='_blanck'>GitHub</a></h3>
    </section>
  )
}

export default Experience
/* https://devicon.dev/ */