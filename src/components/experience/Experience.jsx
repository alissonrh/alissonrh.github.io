import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Experiência</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Front-end</h3>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <img alt="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="Angular" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
                <h4>Angular</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="RxJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg" />
                <h4>RxJS</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <h4>React</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="Tailwind CSS" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" />
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="Figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                <h4>Figma</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Back-end</h3>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <img alt="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                <h4>Python</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="Django" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                <h4>Django</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                <h4>Node.js</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                <h4>Docker</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <img alt="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                <h4>MongoDB</h4>
              </div>
            </article>
          </div>
        </div>
      </div>

      <h3 className='frase'>Conheça todas as minhas habilidades acessando meu <a href='https://github.com/alissonrh' target='_blank' rel='noopener noreferrer'>GitHub</a></h3>
    </section>
  )
}

export default Experience;
