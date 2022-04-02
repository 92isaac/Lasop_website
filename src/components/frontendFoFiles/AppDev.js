import React from 'react'
import FullstackHero from './FullstackHero'
import FullstackNav from './FullstackNav'
import HeroTextSection from './HeroTextSection';
import CourseStructure from './CourseStructure';
import Enterprises from './Enterprises';
import Framework from './Framework';

const AppDev = () => {
  return (
    <div>
        <FullstackNav />
        <FullstackHero 
        title="App Development(IOS and HIOS)"
        />
        <HeroTextSection />
        <CourseStructure />
        < Enterprises/>
        <Framework />
    </div>
  )
}

export default AppDev