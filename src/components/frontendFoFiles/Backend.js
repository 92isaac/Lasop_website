import React from 'react'
import './Fullstack.css';
import FullstackHero from './FullstackHero';
import FullstackNav from './FullstackNav';
import HeroTextSection from './HeroTextSection';
import CourseStructure from './CourseStructure';
import Enterprises from './Enterprises';
import Framework from './Framework';


const Backend = () => {
  return (
    <div>
        <FullstackNav />
        <FullstackHero 
        title='Backend Web Development'
        />
        <HeroTextSection />
        <CourseStructure />
        < Enterprises/>
        <Framework />
    </div>
  )
}

export default Backend