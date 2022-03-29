import React from 'react';
import './Fullstack.css';
import FullstackNav from './FullstackNav';
import FullstackHero from './FullstackHero';
import HeroTextSection from './HeroTextSection';
import CourseStructure from './CourseStructure';
import Enterprises from './Enterprises';
import Framework from './Framework';



const Fullstack =()=>{
    return <div>
        <FullstackNav />
        <FullstackHero />
        <HeroTextSection />
        <CourseStructure />
        < Enterprises/>
        <Framework />
    </div>
}

export default Fullstack;