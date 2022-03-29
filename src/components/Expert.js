import React from 'react'

function Expert(props) {
  return (
    <div>
    <img src={props.careerImg} alt=''className='immg'/>
<h5>{props.careerName}</h5>
<h4>{props.careerTitle}</h4>
</div>
  )
}

export default Expert