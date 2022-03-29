import React from 'react'
import { Link } from 'react-router-dom'


const CourseProFile = (props) => {
  return (
    <div className="col-md-6 text-left course">
         <img src={props.courseImg} alt="" />
        <h4>{props.courseTitle}</h4>
        <p>{props.courseDesc}</p>
        <Link to={props.courseLink}>{props.courseLinkTitle}</Link>
    </div>
  )
}

export default CourseProFile;