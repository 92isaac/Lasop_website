import React from 'react';
import {Accordion} from 'react-bootstrap'




const FaqEntry = (props) => {
  return <div>
    <Accordion.Item eventKey={props.eventKey}>
    <Accordion.Header>{props.question}</Accordion.Header>
    <Accordion.Body> 
      {props.answer}
    </Accordion.Body>
  </Accordion.Item>
  </div>;
};

export default FaqEntry;
