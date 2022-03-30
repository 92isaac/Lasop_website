import React from 'react'
import './Team2.css'
import Dictionary from './Dictionary'
import Expert from './Expert'
import NavBar from './navbarfiles/NavBar'
import MAN from '../images/unsplash_RiDxDgHg7pw.png'


// const Career =(food) =>{
//     return  <Expert
//     key={food.careerName}
//     careerImg={food.careerImg}
//     careerName={food.careerName}
//     careerTitle={food.careerTitle}
    
    
//     />
// }

function Team2() {
  return (
    <div>
    
        <NavBar/>
        <div div className='all'>
         <div className='container'>
         <div className='row text-center pt-5'>
            <h2 className='header5'>The team</h2>
            <h3>Meet our team of experts</h3>
        
         
            <div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
          <img src={MAN} alt='man' className='man'/>
       
          <h5 className='bold'>Ajala Tumininu</h5>
          <h4 className='faint'>CEO & Founder</h4>
       </div>
        <div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
          <img src={MAN} alt='man' className='man'/>
       
          <h5 className='bold'>Ajala Tumininu</h5>
          <h4 className='faint'>CEO & Founder</h4>
       </div>
        <div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
          <img src={MAN}  alt='man' className='man'/>
       
          <h5 className='bold'>Ajala Tumininu</h5>
          <h4 className='faint'>CEO & Founder</h4>
       </div>
        <div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
          <img src={MAN}  alt='man' className='man'/>
       
          <h5 className='bold'>Ajala Tumininu</h5>
          <h4 className='faint'>CEO & Founder</h4>
       </div>
        <div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
          <img src={MAN}  alt='man' className='man'/>
       
          <h5 className='bold'>Ajala Tumininu</h5>
          <h4 className='faint'>CEO & Founder</h4>
       </div>
        <div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
          <img src={MAN}  alt='man' className='man'/>
       
          <h5 className='bold'>Ajala Tumininu</h5>
          <h4 className='faint'>CEO & Founder</h4>
       </div>
        <div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
          <img src={MAN}  alt='man' className='man'/>
          <h5 className='bold'>Ajala Tumininu</h5>
          <h4 className='faint'>CEO & Founder</h4>
       </div>
        <div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
          <img src={MAN}  alt='man' className='man'/>
       
          <h5 className='bold'>Ajala Tumininu</h5>
          <h4 className='faint'>CEO & Founder</h4>
       </div>
        
        
       </div>
    </div>
    </div>
    </div>
  )
}

export default Team2


// {
          
//   Dictionary.map(Career)
// }