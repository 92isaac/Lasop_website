import React from 'react'
import howitworkdic from './howitworkdic'
import HowItWorkMap from './HowItWorkMap'

const HowItworkControl =(work, index )=>{
  return <HowItWorkMap 
  key={index}
  howItWorkImg={work.howItWorkImg}
  howItworkTitle={work.howItworkTitle}
  howItWorkMsg={work.howItWorkMsg}

  
  />
}

const HowItWork = () => {
  return (
    <div className="constainer text-center pt-5">
        <h1 className="text-center pt-3">How it works</h1>
        <div className="row mx-5">
               {howitworkdic.map(HowItworkControl)}
        </div>
    </div>
  )
}

export default HowItWork