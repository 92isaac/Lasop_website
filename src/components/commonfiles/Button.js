import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) =>{
    return <button className={props.class}> <Link to={props.link} className="nav-link">
        {props.btnName}
        </Link></button>
}


export default Button;