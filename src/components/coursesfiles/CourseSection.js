import React from 'react'
import './Course.css'
import FemaleDev from '../../images/woman-in-tech (1).png'
import CourseProFile from './CourseProFile'
import coursedic from './coursedic'


const courseMap = (course) =>{
    return <CourseProFile
    key={course.courseTitle}
    courseImg={course.courseImg}
    courseTitle={course.courseTitle}
    courseDesc={course.courseDesc}
    courseLink={course.courseLink}
    courseLinkTitle={course.courseLinkTitle}
    />
}

const CourseSection = () => {
  return (
    <div className="container-fluid pt-5">
        <div className="row bg-blue">
            <div className="col-md-4">
                <img src={FemaleDev} alt="woman in tech"  className="img-fluid bg-light" />
            </div>
            <div className="col-md-8">
                <div className="row web-logo">
                    {coursedic.map(courseMap)}
                </div>

            </div>

        </div>

    </div>
  )
}

export default CourseSection