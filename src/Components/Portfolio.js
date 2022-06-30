import React from 'react'
import Img1 from '../Assets/portfolio1.jpg'
import Img2 from '../Assets/portfolio2.jpg'
import Img3 from '../Assets/portfolio3.jpg'
import Img4 from '../Assets/portfolio4.jpg'
import Img5 from '../Assets/portfolio5.jpg'
import Img6 from '../Assets/portfolio6.jpg'
import '../Components/Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My React Work</h5>
    <h2>Potfolio</h2>
    <div className='portfolio_container'>
        <article className='poerfolio_item'>
            <div className='portfolio_item_image'>
            <img src={Img1} alt=''/>
            </div>
            <h3>Portfolio Item Title </h3>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='poerfolio_item'>
            <div className='portfolio_item_image'>
            <img src={Img2} alt=''/>
            </div>
            <h3>Portfolio Item Title </h3>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='poerfolio_item'>
            <div className='portfolio_item_image'>
            <img src={Img3} alt=''/>
            </div>
            <h3>Portfolio Item Title </h3>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='poerfolio_item'>
            <div className='portfolio_item_image'>
            <img src={Img4} alt=''/>
            </div>
            <h3>Portfolio Item Title </h3>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='poerfolio_item'>
            <div className='portfolio_item_image'>
            <img src={Img5} alt=''/>
            </div>
            <h3>Portfolio Item Title </h3>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='poerfolio_item'>
            <div className='portfolio_item_image'>
            <img src={Img6} alt=''/>
            </div>
            <h3>Portfolio Item Title </h3>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
    </div>
    </section>
  )
}

export default Portfolio