import React from 'react'
import './portifolio.css'
import data from './portfolioData'

const Portifolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus trabalhos recentes</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio_container">
       {
        data.map(({id, image, title, github, link}) => {
          return(
            <article key={id} className='portfolio_items'>
              <div className='portfolio_item-image' >
                <img src={image} alt='img' />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta' >
                <a href={github} rel="noreferrer" className='btn' target='_blank'>GitHub</a>
                <a href={link} rel="noreferrer" className='btn btn-primary' target='_blank'>Link</a>
              </div>
            </article>
          )
        })
       }
      </div>

    </section>
  )
}

export default Portifolio
