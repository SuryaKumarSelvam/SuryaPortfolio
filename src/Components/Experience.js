import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import '../Components/Experience.css'

const Experience = () => {
  return (
    <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Skillsets</h2>
        <div className='container experience_container'>
             <div className='experience_frontend'>
                 <h3>Frontend Development</h3>
                 <div className='experience_content'>
                     <article className='experience_details'>
                         <BsPatchCheckFill className='icon'/>
                         <div>
                         <h4>HTML</h4>
                         <small className='text-light'>Fresher</small>
                         </div>
                     </article>
                     <article className='experience_details'>
                         <BsPatchCheckFill className='icon'/>
                         <div>
                         <h4>CSS</h4>
                         <small className='text-light'>Fresher</small>
                         </div>
                     </article>
                     <article className='experience_details'>
                         <BsPatchCheckFill className='icon'/>
                         <div>
                         <h4>Java Script</h4>
                         <small className='text-light'>Fresher</small>
                         </div>
                     </article>
                     <article className='experience_details'>
                         <BsPatchCheckFill className='icon'/>
                         <div>
                         <h4>Bootstrap</h4>
                         <small className='text-light'>Fresher</small>
                         </div>
                     </article>
                     <article className='experience_details'>
                         <BsPatchCheckFill className='icon'/>
                         <div>
                         <h4>React Js</h4>
                         <small className='text-light'>Fresher</small>
                         </div>
                     </article>

                 </div>
             </div>
             <div className='experience_frontend'>
                 <h3>Backend Development</h3>
                 <div className='experience_content'>
                     <article className='experience_details'>
                         <BsPatchCheckFill className='icon'/>
                         <div>
                         <h4>Python</h4>
                         <small className='text-light'>Basics</small>
                         </div>
                     </article>
                     

                 </div>
             </div>
        </div>
    </section>
    
  )
}

export default Experience