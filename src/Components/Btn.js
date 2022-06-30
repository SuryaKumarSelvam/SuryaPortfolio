import React from 'react'
import CV from '../Assets/Surya Kumar cv.pdf'

const Btn = () => {
  return (
    <div className='btn_main'>
        <a href={CV} className='btn' target="-blank">Download CV</a>
        <a href='#Contact' className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default Btn