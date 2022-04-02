import React from 'react'
import FullstackHero from './FullstackHero'
import FullstackNav from './FullstackNav'
import HeroTextSection from './HeroTextSection';
import CourseStructure from './CourseStructure';
import Enterprises from './Enterprises';
import Framework from './Framework';

const MachineLearning = () => {
  return (
    <div>
        <FullstackNav />
        <FullstackHero 
        title="Machine Learning"
        />
        <HeroTextSection />
        <CourseStructure />
        < Enterprises/>
        <Framework />
    </div>
  )
}

export default MachineLearning