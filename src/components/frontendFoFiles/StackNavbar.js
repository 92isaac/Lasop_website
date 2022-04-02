import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const StackNavbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



  return (
<div className="row">
    <div className="col">
      <ul className="d-flex justify-content-center align-item-center">
        <li className="nav-li">
         <Link className={({ isActive }) => (isActive ? 'container li a activ' : 'nav-lin')} onClick={click ? handleClick : null} aria-current="page" to="/fullstack">Active</Link>
        </li>
       <li className="nav-li">
         <Link className={({ isActive }) => (isActive ? ' activ' : 'nav-lin')} onClick={click ? handleClick : null} to="/fee">Fee</Link>
        </li>
       <li className="nav-li">
        <Link className={({ isActive }) => (isActive ? ' activ' : 'nav-lin')} onClick={click ? handleClick : null} to="/teaching">Teaching and Accessment</Link>
       </li>
       <li className="nav-li">
        <Link className={({ isActive }) => (isActive ? ' activ' : 'nav-lin')} onClick={click ? handleClick : null} to="/career">Careeer</Link>
       </li>
      </ul>
    </div>

  </div>

  )
}
