import React from 'react';
import Video from '../commonfiles/Video';
import Button from '../commonfiles/Button';
import Modal from '../commonfiles/Modal';


const FullstackHero =(props)=>{
    return (<div className="container-fluid fullstackhero">
        <div className="row mx-5">
            <div className="col-md-6">
            <h3>{props.title}</h3>
            <table>
                <thead>
                    <tr>
                        <td width="120" className="paddingLeft">Year of Entry</td>
                        <td>2022</td>
                    </tr>
                    <tr>
                        <td width="120" className="paddingLeft">Start Date</td>
                        <td>September 2022</td>
                    </tr>
                    <tr>
                        <td width="120" className="paddingLeft"> Location</td>
                        <td>Lagos State</td>
                    </tr>
                    <tr>
                        <td width="120" className="paddingLeft">Duration</td>
                        <td>One year full-time or two years part-time</td>
                    </tr>
                    <tr>
                        <td width="120" className="paddingLeft">Attendance</td>
                        <td>Four to five afternoons/evenings a week full-time or two to three evenings a week part-time, September to August</td>
                    </tr>
                </thead>
            </table>

            <div className="row justify-content-md-center mt-5">
                <div className="col-md-6 ">

                    <Button 
                        class="white_button"
                        btnName="Apply Now: Weekday"
                        link="/apply"
                    />
                </div>
                <div className="col-md-6 ">


                <Button
                    class="blue_button"
                    btnName="Apply Now: Weekend"
                    link="/apply"

                    />
                </div>
            </div>
            </div>
            <div className="col-md-6">
            <Video 
            source=""
            type="video/mp4"
            />
             </div>
        </div>
    </div>)
}
export default FullstackHero;