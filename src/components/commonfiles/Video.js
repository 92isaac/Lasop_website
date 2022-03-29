import React from 'react'
// import VideoAdvert from '../'

const Video =(props)=>{
    return <video autoPlay controls >
        <source src={props.source} type={props.type}/>
    </video>
}

export default Video;