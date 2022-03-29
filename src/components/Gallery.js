import React from 'react'
import './Gallery.css'
import GAL1 from '../images/1.png'
import GAL2 from '../images/2.png'
import GAL3 from '../images/3.png'
import GAL4 from '../images/4.png'
import GAL5 from '../images/5.png'
import GAL6 from '../images/6.png'
import GAL7 from '../images/7.png'
import GAL8 from '../images/8.png'


function Gallery() {
  return (
    <div>
       <div className='gallery-text'>
         <p>Our gallery</p>
         <h2>Events and Workshops</h2>
       </div>
           
       <div className='gallery-grid'>
            <img src={GAL1} alt='' className='gallery-img'/>
           <img src={GAL2} alt='' className='gallery-img'/>
           <img src={GAL3} alt='' className='gallery-img'/>
           <img src={GAL4} alt='' className='gallery-img'/>
           <img src={GAL5} alt='' className='gallery-img'/>
           <img src={GAL6} alt='' className='gallery-img'/>
           <img src={GAL7} alt='' className='gallery-img'/>
           <img src={GAL8} alt='' className='gallery-img'/>

       </div>

    </div>
  )
}

export default Gallery