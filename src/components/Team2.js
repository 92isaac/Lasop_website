import React from 'react'
import './Team2.css'
import Dictionary from './Dictionary'
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

function Team2() {
  return (
    <div className='all'>
        <NavBar/>
         <div className='had'>
            <h5>The team</h5>
            <h3>Meet our team of experts</h3>
        </div>

        <div className='bod'>
        {
            Dictionary.map(Career)
        }
       </div>
    </div>
  )
}

export default Team2