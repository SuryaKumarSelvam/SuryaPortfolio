import React from 'react'
import '../Components/Testimonials.css'
import AVT from '../Assets/img.jpg'
import IMG1 from '../Assets/portfolio1.jpg'
import IMG2 from '../Assets/portfolio2.jpg'
import IMG3 from '../Assets/portfolio3.jpg'


const Testimonials = () => {
  return (
    <section id='section'>
        <h5>Review From Client</h5>
        <h2>Testimonials</h2>
        <div className='testimonials_container'>
            <article className='testimonial'>
                <div className='clint_avatar'>
                   <img src={AVT} alt=''/>
                   
                </div>
                <h5>Ernest Achiever</h5>
                   <small className='client_review'>orem ipsum dolor sit amet, consectetur adipiscing elit.</small>
            </article>
            <article className='testimonial'>
                <div className='clint_avatar'>
                   <img src={IMG1} alt=''/>
                   
                </div>
                <h5>Ernest Achiever</h5>
                   <small className='client_review'>orem ipsum dolor sit amet, consectetur adipiscing elit.</small>
            </article>
            <article className='testimonial'>
                <div className='clint_avatar'>
                   <img src={IMG2} alt=''/>
                   
                </div>
                <h5>Ernest Achiever</h5>
                   <small className='client_review'>orem ipsum dolor sit amet, consectetur adipiscing elit.</small>
            </article>
            <article className='testimonial'>
                <div className='clint_avatar'>
                   <img src={IMG3} alt=''/>
                   
                </div>
                <h5>Ernest Achiever</h5>
                   <small className='client_review'>orem ipsum dolor sit amet, consectetur adipiscing elit.</small>
            </article>
            
        </div>
    </section>
  )
}

export default Testimonials