import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG9 from '../../assets/portfolio7.png'
import API from '../../assets/api.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Trybe Futebol Clube',
    github: 'https://github.com/alissonrh/tfc',
    link: 'https://tfc-vercel.vercel.app/leaderboard',
    type: 'fullstack'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Wallet',
    github: 'https://github.com/alissonrh/wallet',
    link: 'https://wallet-alissonrh.vercel.app/',
    type: 'frontend'
  },
  {
    id: 3,
    image: API,
    title: 'Blog API',
    github: 'https://github.com/alissonrh/blog-api',
    link: '',
    type: 'backend'
  },
  {
    id: 4,
    image: IMG3,
    title: 'Shopping Cart',
    github: 'https://github.com/alissonrh/shopping-cart',
    link: 'https://alissonrh.github.io/shopping-cart/',
    type: 'frontend'
  },
  {
    id: 5,
    image: API,
    title: 'Store Manager',
    github: 'https://github.com/alissonrh/store-manager',
    link: '',
    type: 'backend'
  },
  {
    id: 6,
    image: IMG4,
    title: 'React Map App',
    github: 'https://github.com/alissonrh/map-app',
    link: 'https://react-map-alisson.netlify.app/',
    type: 'fullstack'
  },
  {
    id: 7,
    image: IMG5,
    title: 'App de Delivery',
    github: 'https://github.com/alissonrh/project-delivery-app',
    link: '',
    type: 'fullstack'
  },
  {
    id: 8,
    image: IMG6,
    title: 'Projeto Solar System',
    github: 'https://github.com/alissonrh/solar-system',
    link: 'https://alissonrh.github.io/solar-system/',
    type: 'frontend'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Projeto Solar System',
    github: 'https://github.com/alissonrh/starwars-planets-search',
    link: 'https://starwars-planets-search-alissonrh.vercel.app/',
    type: 'frontend'
  },
  {
    id: 10,
    image: API,
    title: 'Car Shop TS',
    github: 'https://github.com/alissonrh/car-shop-ts',
    link: '',
    type: 'backend'
  },
];

export default data