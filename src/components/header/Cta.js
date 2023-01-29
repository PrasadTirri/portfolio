import React from 'react'
import CV from '../../assets/cv.pdf'
import './Header.css'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download</a>
        <a href="#context" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta