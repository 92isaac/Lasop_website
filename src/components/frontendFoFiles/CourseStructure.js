import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'


const CourseStructure =()=>{
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


    return <div className="container">
        <div className="row mt-5">
            <div className="col">
                <p className="text-center">Courses</p>
                <h3 className="text-center"> Structure</h3>
                <p>Core modules reinforce economic theory with practical application. They include preliminary courses in mathematical and statistical techniques, which take place in September and have to be passed in order to progress to the course.</p>

                <p>Options provide specialised modules with current themes. Option module availability varies across years.</p>
            </div>
        </div>



        <div className="row">
            <div className="col">
            <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className={({ isActive }) => (isActive ? 'nav-link active nounderline' : 'nav-link nounderline')} onClick={click ? handleClick : null} aria-current="page" href="/">Active</a>
  </li>
  <li className="nav-item">
    <a className={({ isActive }) => (isActive ? 'nav-link active nounderline' : 'nav-link nounderline')} onClick={click ? handleClick : null} href="/link">Link</a>
  </li>
  <li className="nav-item">
    <a className={({ isActive }) => (isActive ? 'nav-link active nounderline' : 'nav-link nounderline')} onClick={click ? handleClick : null} href="/link">Link</a>
  </li>
  <li className="nav-item">
    <a className={({ isActive }) => (isActive ? 'nav-link active nounderline' : 'nav-link nounderline')} onClick={click ? handleClick : null} href="/link">Disabled</a>
  </li>
</ul>
            </div>

        </div>

    </div>
}

export default CourseStructure;