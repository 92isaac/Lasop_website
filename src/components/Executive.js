import React from 'react'
import './Executive.css'
import EXE from '../images/unsplash_RiDxDgHg7pw.png'
import NavBar from './navbarfiles/NavBar'

function Executive() {
  return (
    <div className='ground'>
        <NavBar/>
        <div className='director'>
            <h5>The Non Executive Director</h5>
            <h1>Meet the Man</h1>

        </div>

        <div className='general'>

        <div className='man'>
            <img src={EXE} alt='' className='' />
        </div>
        <div className='desc'>
            <h6>The Non-Executive Director</h6>
            <h3>Mattie Hodkiewicz</h3>
            <p>Sagittis venenatis, proin eu molestie sit quis vulputate. Augue in malesuada curabitur eu felis proin ac etiam enim. Velit mauris, magna congue sed. Nulla viverra sapien tincidunt tincidunt semper risus. Cras id lobortis lectus at morbi urna tellus eu posuere. Consequat vitae risus ipsum, quam faucibus. Nam eget gravida nunc, eget laoreet urna lobortis ultricies. Id elit, eget dapibus ac, facilisis interdum vel morbi. Posuere et elementum tortor viverra penatibus sit.</p>
            <p>Sagittis venenatis, proin eu molestie sit quis vulputate. Augue in malesuada curabitur eu felis proin ac etiam enim. Velit mauris, magna congue sed. Nulla viverra sapien tincidunt tincidunt semper risus. Cras id lobortis lectus at morbi urna tellus eu posuere. Consequat vitae risus ipsum, quam faucibus. Nam eget gravida nunc, eget laoreet urna lobortis ultricies. Id elit, eget dapibus ac, facilisis interdum vel morbi. Posuere et elementum tortor viverra penatibus sit.</p>
            <p>Sagittis venenatis, proin eu molestie sit quis vulputate. Augue in malesuada curabitur eu felis proin ac etiam enim. Velit mauris, magna congue sed. Nulla viverra sapien tincidunt tincidunt semper risus. Cras id lobortis lectus at morbi urna tellus eu posuere. Consequat vitae risus ipsum, quam faucibus. Nam eget gravida nunc, eget laoreet urna lobortis ultricies. Id elit, eget dapibus ac, facilisis interdum vel morbi. Posuere et elementum tortor viverra penatibus sit.</p>
            <p>Sagittis venenatis, proin eu molestie sit quis vulputate. Augue in malesuada curabitur eu felis proin ac etiam enim. Velit mauris, magna congue sed. Nulla viverra sapien tincidunt tincidunt semper risus. Cras id lobortis lectus at morbi urna tellus eu posuere. Consequat vitae risus ipsum, quam faucibus. Nam eget gravida nunc, eget laoreet urna lobortis ultricies. Id elit, eget dapibus ac, facilisis interdum vel morbi. Posuere et elementum tortor viverra penatibus sit.</p>

        </div>
        </div>

    </div>
  )
}

export default Executive