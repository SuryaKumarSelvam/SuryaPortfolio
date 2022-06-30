import Img1 from '../Assets/portfolio1.jpg'
import Img2 from '../Assets/portfolio2.jpg'
import Img3 from '../Assets/portfolio3.jpg'
import Img4 from '../Assets/portfolio4.jpg'
import '../Components/Testimonials.css'

import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Data = [
    {
        avatar : Img1,
        name:'Tina Snow',
        review:'orem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        avatar : Img2,
        name:'Shatta Wale',
        review:'orem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        avatar : Img3,
        name:'Kwame Depite',
        review:'orem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        avatar : Img4,
        name:'Nana Ama McBrown',
        review:'orem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
]

const Testimonials1 = ()=>{
    return(
        <section id=''>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='testimonials_container'
            
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
>
                {
                    Data.map(({avatar,name,review},index)=>{
                        return(
                            <SwiperSlide key={index} className='testimonial'>
                            <div className='clint_avatar'>
                            <img src={avatar} alt=''/>
                   
                            </div>
                            <h5>{name}</h5>
                            <small className='client_review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials1