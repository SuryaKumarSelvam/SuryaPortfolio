import React from 'react'
import Btn from './Btn'
import Img from '../Assets/img.jpg'
import HeaderSocials from './HeaderSocials'
import '../Components/Header.css'


const Header = () => {
  return (
   <header>
       <div className='container header_container'>
        <div className='header_details'>
           <h5 className='header_name '>Hello I'm</h5>
           <h1 className='header_name'>Surya</h1>
           <h5 className='text-light'>Front End Developer</h5>
           <Btn/>
           </div>
           <HeaderSocials/>
          {/* <div className='img_header'>
           <img src={Img} alt="img" className='img_fr'/>
        </div>*/}
           <div className='scroll_down'>Scroll Down</div>
       </div>
   </header>
  )
}

export default Header