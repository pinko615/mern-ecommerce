import React from 'react'
import { Carousel } from 'antd'
import slide1 from './header1.jpg'

function MainSlide() {
    return (
        <div>
         <Carousel autoplay>
      <div>
        <img src={slide1} style={{ width:'100%' }} />
      </div>
      <div>
      <img src={slide1} style={{ width:'100%' }} />
      </div>
      <div>
      <img src={slide1} style={{ width:'100%' }} />
      </div>
    </Carousel>,   
        </div>
    )
}

export default MainSlide