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
    <div className="container-fluid pt-5 m-0 coursesection">
        <div className="row bg-blue">
            <div className="col-md-4 p-0 imade">
                <img src={FemaleDev} alt="woman in tech"  className="img-fluid w-100 " />
            </div>
            <div className="col-md-8">
                <div className="row web-logo p-4">
                    {coursedic.map(courseMap)}
                </div>

            </div>

        </div>

    </div>
  )
}

export default CourseSection