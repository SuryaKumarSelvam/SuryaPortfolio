import React from 'react'
import Img from '../Assets/img.jpg'
import '../Components/About.css'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_img'>
             <img src={Img} alt='img'/>
          </div>

        </div>
        <div className='about_content'>
       <div className='about_cards'>
         <article className='about_card'>
           <FaAward className='about_icon'/>
           <h5>Experience</h5>
           <small>Fresher</small>
         </article>
         <article className='about_card'>
           <FiUser className='about_icon'/>
           <h5>Clints</h5>
           <small>Fresher</small>
         </article>
         <article className='about_card'>
           <VscFolderLibrary className='about_icon'/>
           <h5>Projects</h5>
           <small>Fresher</small>
         </article>
       </div>
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin orci at justo sollicitudin 
       maximus scelerisque. Integer vitae mauris lacus. Quisque scelerisque nisl leo
       Cras et magna fermentum, pellentesque libero sed, sollicitudin enim. Integer urna nisi, pharetra non egestas ut, varius a massa.
       </p>
       <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
       
    </section>
  )
}

export default About