import React from 'react'
import FullstackHero from './FullstackHero'
import FullstackNav from './FullstackNav'
import HeroTextSection from './HeroTextSection';
import CourseStructure from './CourseStructure';
import Enterprises from './Enterprises';
import Framework from './Framework';

const UiUx = () => {
  return (
    <div>
        <FullstackNav />
        <FullstackHero title="UI/UX Design" />
        <HeroTextSection />
        <CourseStructure />
        < Enterprises/>
        <Framework />
    </div>
  )
}

export default UiUx