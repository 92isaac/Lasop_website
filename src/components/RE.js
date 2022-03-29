import React from 'react'

function RE(props) {
  return (
    <div className='grid'>
                <img src={props.img} alt='' className='immg'/>
                <h3>{props.faq}</h3>
                <h5>{props.faqans}</h5>
            </div>
  )
}

export default RE