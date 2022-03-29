import React, { useState } from 'react'
import './ContactNav.css'
import  Logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
import  ICON from '../../images/Icon1.png'
import  ICON1 from '../../images/Icon2.png'
import  ICON2 from '../../images/Icon3.png'
import  ICON3 from '../../images/Icon4.png'
import  ICON4 from '../../images/Icon.png'
import  ICON5 from '../../images/Icon5.png'
import  ICON6 from '../../images/Icon6.png'
import  ICON7 from '../../images/Icon7.png'
import  ICON8 from '../../images/Icon8.png'
import  ICON9 from '../../images/Icon9.png'

const ContactNav = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
 <div className={click ? "main-container" : ""}  onClick={()=>Close()}>

<nav className="navbar navbar-expand-lg " onClick={e => e.stopPropagation()}>
  <div className="container-fluid mx-5">
    <NavLink className="navbar-brand" to="/"> <img src={Logo} alt="logo" width="200" height="50"/> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto index" >
        <li className="nav-item"  >
          <NavLink to="/"  className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                onClick={click ? handleClick : null} aria-current="page" style={{color:'#ffffff'}}> Home </NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="Courses" className={({ isActive }) => (isActive ? 'active nav-link dropdown-toggle' : 'nav-link dropdown-toggle')}
                onClick={click ? handleClick : null}  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#ffffff'}}>
            Courses
          </NavLink>
          <ul className="dropdown-menu menu men " aria-labelledby="navbarDropdownMenuLink">
           <div  className="row">
             <span className='new'>We offer...</span>
             <div className="col-md-6">
             <li><NavLink to="/action" className="dropdown-item" > <img src={ICON4} alt='' className='icons'/>Full-Stack Development</NavLink></li>
             <li><NavLink to="/another" className="dropdown-item" > <img src={ICON5} alt='' className='icons'/>Frontend Web Development</NavLink></li>
             <li><NavLink to="/sometext" className="dropdown-item" ><img src={ICON6} alt='' className='icons'/>UI/UX Design</NavLink></li>
             </div>
             <div className="col-md-6">
             <li><NavLink to="/action" className="dropdown-item" ><img src={ICON7} alt='' className='icons'/>App Development</NavLink></li>
             <li><NavLink to="/another" className="dropdown-item" ><img src={ICON8} alt='' className='icons'/>Backend Web Development</NavLink></li>
             <li><NavLink to="/sometext" className="dropdown-item" ><img src={ICON9} alt='' className='icons'/>Machine Learning</NavLink></li>
             </div>
           </div>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="About-Us" className={({ isActive }) => (isActive ? 'active nav-link dropdown-toggle' : 'nav-link dropdown-toggle')}
                onClick={click ? handleClick : null}  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#ffffff'}}>
            About Us
          </NavLink>
          <ul className="dropdown-menu about" aria-labelledby="navbarDropdownMenuLink">
           <div  className="row">
             <label style={{color:'#11A3E3',marginLeft:'20px',marginBottom:'10px',fontWeight:'bolder',fontSize:'12px'}}>ABOUT US</label>
             <div className="col-md-6">
             <li><NavLink to="/company" className="dropdown-item" > <img src={ICON} alt='' className='icon'/>The Company</NavLink></li>
             <li><NavLink to="/team" className="dropdown-item" ><img src={ICON1} alt='' className='icon'/>The Team</NavLink></li>
             <li><NavLink to="/mentor" className="dropdown-item" ><img src={ICON2} alt='' className='icon'/>The Mentors</NavLink></li>
            <li><NavLink to="/director" className="dropdown-item" ><img src={ICON3} alt='' className='icon'/>Non-Executive Directors</NavLink></li>
             </div>
           </div>



          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                onClick={click ? handleClick : null} style={{color:'#ffffff'}}>Contact us  |</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}
                onClick={click ? handleClick : null} style={{color:'#ffffff'}} >  Blog</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default ContactNav