import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    link: 'https://www.youtube.com/watch?v=qnI0smkhrho'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    link: 'https://www.youtube.com/watch?v=qnI0smkhrho'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    link: 'https://www.youtube.com/watch?v=qnI0smkhrho'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    link: 'https://www.youtube.com/watch?v=qnI0smkhrho'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    link: 'https://www.youtube.com/watch?v=qnI0smkhrho'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    link: 'https://www.youtube.com/watch?v=qnI0smkhrho'
  }
];

const Portifolio = () => {
  return (
    <section id='portidolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
       {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className='portfolio_items'>
              <div className='portfolio_item-image' >
                <img src={image} alt='img' />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta' >
                <a href={github} rel="noreferrer" className='btn' target='_blank'>GitHub</a>
                <a href={demo} rel="noreferrer" className='btn btn-primary' target='_blank'>Link</a>
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
