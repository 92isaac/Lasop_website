import React from 'react'
import MAN from '../images/unsplash_RiDxDgHg7pw.png'
import './Mentors.css'
import Dictionary1 from './Dictionary1'
import Expert from './Expert'
import NavBar from './navbarfiles/NavBar'


const Career =(food) =>{
    return  <Expert
    key={food.careerName}
    careerImg={food.careerImg}
    careerName={food.careerName}
    careerTitle={food.careerTitle}
    
    
    />
}

function Mentors() {
  return (
    <div className='all'>
        <NavBar/>
         <div className='had'>
            <h5>The course mentors</h5>
            <h3>Meet our team of experts</h3>
        </div>

        <div className='bod'>
            {/* <div>
                <img src={MAN} alt=''className=''/>
           <h5>Renee Kling</h5>
           <h4>CEO and founder</h4>
            </div> */}
        {
            Dictionary1.map(Career)
        }
       </div>
    </div>
  )
}

export default Mentors