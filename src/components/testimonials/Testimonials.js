import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  
  {
    avatar:AVTR1,
    name:'Prasad Tirri',
    review:'My name is Prasad and i am a Decent Boy',
  },
  {
    avatar:AVTR2,
    name:'Prasad DecentBoy',
    review:'My name is Prasad and i am a Decent Boy',
  },
  {
    avatar:AVTR3,
    name:'Prasad Gadu',
    review:'My name is Prasad and i am a Decent Boy',
  },
  {
    avatar:AVTR4,
    name:'Prasad Perfect',
    review:'My name is Prasad and i am a Decent Boy',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({avatar, name, review}, index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar}alt="" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          
        </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials