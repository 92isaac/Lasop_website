import React from 'react';
import "./Fullstack.css"
import { StackNavbar } from './StackNavbar';


const CourseStructure =()=>{

    return <>
    <div className="container">
        <div className="row mt-5">
            <div className="col">
                <p className="text-center">Courses</p>
                <h3 className="text-center"> Structure</h3>
                <p>Core modules reinforce economic theory with practical application. They include preliminary courses in mathematical and statistical techniques, which take place in September and have to be passed in order to progress to the course.</p>

                <p>Options provide specialised modules with current themes. Option module availability varies across years.</p>
            </div>
        </div>

<StackNavbar />

  
</div>
</>
}

export default CourseStructure;