import React from 'react'
import './Herosection.css'
import HeroImg from '../../images/heroimage.png'
import Lasop from '../../images/Lasop.png'

const Herosection = () =>{
    return(
        <div className="container-fluid pt-5 hero">
            <div className="row">
                <div className="col-md-7 col-sm-12 px-5">
                    <h1 className="pt-5"> <span className="h1-at" >At</span> <span className="h1-lasop" >Lasop, <br/></span> we are not <span className="h1-static" >static</span> but <br/> <span className="h1-dynamic" >dynamic.</span></h1>

                    <div>
                        <p>lorem JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change</p>
                    </div>

                    <i className="fa-solid fa-computer-mouse-scrollwheel"></i>

                </div>
                <div className="col-md-5 col-sm-12">
                    <img src={HeroImg} alt="heroimage" className="img-fluid" />
                </div>
                <div className="lasop"> <img src={Lasop} alt="" /> </div>
            </div>

        </div>
    )
}

export default Herosection;