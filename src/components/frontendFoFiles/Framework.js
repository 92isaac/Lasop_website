import React from 'react'
import JavaScript from '../../images/JavaScript frameworks.png'
import Button from '../commonfiles/Button'


const Framework =()=>{
    return <div className="container-fluid">
            <div className="row ml-5">
                <div className="col-md-6">
                    <img src={JavaScript} alt="imagess" className="img-fluid" style={{marginLeft:'40px'}}/>
                </div>
                <div className="col-md-6 p-5 bg-dark">
                    <h3 className="text-light">BUILD YOUR CAREER</h3>
                    <p className="text-light">Our comprehensive Careers and Employability Service and in-house recruitment agency help find you work experience.</p>
                <Button 
                link='/'
                class="btn btn-outline-primary border-white text-white"
                btnName="Find Out more"
                />
                </div>
            </div>
    </div>
}

export default Framework;