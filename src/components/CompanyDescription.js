import React from 'react'
import './CompanyDescription.css'
// import CompanyNav from './navbarfiles/CompanyNav'
import VID from '../videos/video-3.mp4'
import VideoPlayer from 'react-video-js-player'




function CompanyDecsription() {
  const VideoSrc=VID
  const poster='https://media.istockphoto.com/photos/child-typing-on-laptop-keyboard-picture-id1316182544?k=20&m=1316182544&s=612x612&w=0&h=z8eIfuk0o6zSpNl6x4njpJYSNqh4m9z8x9kVgz3YbL4='
  return (
    <div>
        
        <div className='wrap'>
            <div className='head'>
            <h2>The Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit vel felis nec posuere. Fusce ac suscipit nulla, sit amet feugiat nisl. Vestibulum vitae 
              vehicula enim. Vestibulum interdum tortor dapibus, sagittis metus a, euismod nisl. Proin tempor est vitae tortor tincidunt feugiat. Aenean volutpat turpis eget erat aliquam, vel lacinia dolor volutpat. Vivamus dictum </p>
            </div>
            {/* <video src='/videos/video-3.mp4'type='video/mp4' controls/> */}
             <VideoPlayer
             src={VideoSrc} poster={poster}
             playbackRates={[0.5,1,3.85,16]}
              className='video'/>

        </div>
    </div>
  )
}

export default CompanyDecsription