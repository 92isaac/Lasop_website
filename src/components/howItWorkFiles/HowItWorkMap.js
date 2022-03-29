import React from 'react'

const HowItWorkMap = (props) => {
  return (
    <div className="col-md-4 p-3">
         <img src={props.howItWorkImg} alt="how it work"/>
            <h3>{props.howItworkTitle}</h3>
            <p>{props.howItWorkMsg}</p>
    </div>
  )
}

export default HowItWorkMap