import React from 'react'
import { Carousel, Button } from 'antd'
import slide1 from './header1.jpg'

function MainSlide() {
    return (
    //     <div>
    //      <Carousel autoplay>
    //   <div>
    //     <img src={slide1} style={{ width:'100%' }} />
    //   </div>
    //   <div>
    //   <img src={slide1} style={{ width:'100%' }} />
    //   </div>
    //   <div>
    //   <img src={slide1} style={{ width:'100%' }} />
    //   </div>
    // </Carousel>,   
    //     </div>
          <div className="background" style={{ borderRadius:'20px',  display:'flex', flexDirection:'column', justifyContent:'center', fontFamily:'Catamaran' }}>
            <div style={{ width:'90%', margin:'auto' }}>
              <h1 style={{ color:'white', fontSize:'36px', fontWeight:'600', marginTop:'50px' }}>
                Don't be a tourist, be a traveler
              </h1>
              <p style={{ color:'white', fontSize:'16px', fontWeight:'600', maxWidth:'50%' }}>
                Discover can be your best resource for finding great travel deals and cheap flights to your favorite destinations around the world.
                If you're looking for affordable airfare or vacation packages you cand find it all here!
              </p>
              <Button size="large" style={{ backgroundColor:'#6420F7', color:'white', border:'none', fontWeight:'600' }}>Book your next trip</Button>
            </div>
            
          </div>
    )
}

export default MainSlide