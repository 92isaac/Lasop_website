import React from 'react';
import './Faq.css'
import NavBar from '../navbarfiles/NavBar'
import {Accordion} from 'react-bootstrap'
import FaqEntry from './FaqEntry';
import faquestion from './faquestions'

const fQuestion=(fquest)=>{
  return <FaqEntry 
  key={fquest.question}
  eventKey={fquest.eventKey}
  question={fquest.question}
  answer={fquest.answer}
  />
}

const FAQ = () => {
  return <div className="faq_body"> 
  < NavBar/>
  <div className="container text-center faq_container">
    <h6>Launch your career in Tech:</h6>
    <h4>Frequently Asked Questions</h4>
  <div className='row justify-content-center align-item-center'>
    <Accordion className=" col-md-9 accordion">
      {faquestion.map(fQuestion)}
      </Accordion>
  </div>
  </div>
  </div>;
};

export default FAQ;
