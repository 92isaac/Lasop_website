import React from 'react'
import NavBar from '../navbarfiles/NavBar'
import Herosection from '../herofiles/Herosection'
import HowItWork from '../howItWorkFiles/HowItWork'
import CourseSection from '../coursesfiles/CourseSection'
import Faq from '../faqfiles/Faq'


const Home = () =>{
    return (
        <div>
            <NavBar/>
            <Herosection/>
            <HowItWork/>
            <CourseSection />
            <Faq />
        </div>
    )
}

export default Home