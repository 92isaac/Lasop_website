import React from 'react'
import Button from '../commonfiles/Button';




const Enterprises =()=>{
    return <div class="container-fluid">
        <div class="row mx-5">
            <div class="col">
                <h3>Entry Requirement</h3>
                <p>
                At least a second-class honours degree (2:2), or its equivalent, in either a directly relevant or a highly quantitative subject, or the Birkbeck Graduate Diploma in Economics.
                </p>
                <p>
                Non-EU students are encouraged to submit GRE or GMAT results. In some cases, the admissions tutor may request these results in order to make a decision on your application. In that case, you should upload your score report to the online application system as if it were an additional transcript page.
                </p>
                <p>
                Demonstrable qualities, such as good time management and the ability to cope under pressure, are vital.
                </p>
                <p>
                Applications are reviewed on their individual merits and your professional qualifications and/or relevant work experience will be taken into consideration positively. We actively support and encourage applications from mature learners.
                </p>
                <p>
                On your application form, please list all your relevant qualifications and experience, including those you expect to achieve.
                </p>
                <p>
                Apply now to secure your place. The earlier you apply, the sooner your application can be considered and you can enrol. You do not need to have completed your current qualification to start your application.
                </p>

                <h3>English Language Requirement</h3>


                <p>
                If English is not your first language or you have not previously studied in English, the requirement for this programme is the equivalent of an International English Language Testing System (IELTS Academic Test) score of 6.5, with not less than 6.0 in each of the sub-tests.
                </p>

                <p>
                If you don't meet the minimum IELTS requirement, we offer pre-sessional English courses and foundation programmes to help you improve your English language skills and get your place at Birkbeck.
                </p>

                <p>
                Visit the International section of our website to find out more about our English language entry requirements and relevant requirements by country.
                </p>

            <h3>Visa Requirement</h3>

<p>
If you are not from the UK and you do not already have residency here, you may need to apply for a visa.
</p>
<ul>
    <label>
The visa you apply for varies according to the length of your course:
    </label>
    <li>
Courses of more than six months' duration: Student visa
    </li>
    <li>
Courses of less than six months' duration: Standard Visitor visa
    </li>
</ul>
<p>
International students who require a Student visa should apply for our full-time courses as these qualify for Student visa sponsorship. If you are living in the UK on a Student visa, you will not be eligible to enrol as a student on Birkbeck's part-time courses (with the exception of some modules).
</p>
<p>
For full information, read our visa information for international students page.
</p>
            {/* <div className="">
                <Button 
                link='/'
                class="btn btn-light"
                btnName="Apply Now: Weekday"
                />
                </div>
                <div className="">
                <Button 
                link='/'
                class="btn btn-blue border-white text-light"
                btnName="Apply Now: Weekend"
                />
                </div> */}

<div className="row mt-5">
                <div className="col-md-3">

                    <Button 
                        class="white_button"
                        btnName="Apply Now: Weekday"
                        link="/apply"
                    />
                </div>
                <div className="col-md-3 ">


                <Button
                    class="blue_button"
                    btnName="Apply Now: Weekend"
                    link="/apply"

                    />
                </div>
            </div>
            </div>
        </div>
    </div>
}


export default Enterprises