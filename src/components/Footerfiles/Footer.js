import React from 'react'
import './Footer.css'
import FOOTLOGO from '../../images/logo.png'
import {Link} from 'react-router-dom'
import POL from '../../images/Polygon-1.png'
import LINE from '../../images/Line5.png'

function Footer() {
  return (
    <>
        <div className='footer-grids'>
         <div className='block'>
         
            <div className='footer-grid1'>
                <Link to='/'>
               <img src={FOOTLOGO} alt='' className='foot-img'/>
               </Link>

               <p>At <span>LASOP</span>, we are not static but dynamic. We are evolving with latest trends in technology. We are determined to meet the demands of our students and making Nigeria the tech-hub of Africa and the world at large.</p>

               <Link to="mailto:info@lasop.net" ><i className='fas fa-envelope'></i>info@lasop.net |</Link>
               <br/>
               <Link to="tel:+234 702 571 3326" target="_blank"><i className='fas fa-phone'></i>+234 702 571 3326 
 |              +234 807 402 4260</Link>
               <br/>
               <Link to="https://wa.me/7025713326" target="_blank"><i className="fa-brands fa-whatsapp-square"></i>+234 702 571 3326</Link>
               <br/>
               <Link to="https://www.facebook.com/lasopdotnet" target="_blank"><i className="fa-brands fa-facebook-square"></i>Facebook</Link>
               <br/>
               <Link to="https://www.instagram.com/lasopdotnet" target="_blank"><i className="fa-brands fa-instagram-square"></i>Instagram</Link>
               <br/>
               <Link to="https://twitter.com/Lasopdotnet" target="_blank"><i className="fa-brands fa-twitter-square"></i>Twitter</Link>
               <br/>
               <Link to="https://linkedin.com/company/lasopdotnet" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</Link>
            </div>
          </div>

          <div className='mobile'>

            <div className='Footer-grid2'>
                <h5>Quick Links</h5>
                <Link to='/blog'>Our Blog</Link>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/FAQPage'>FAQ</Link>

            </div>

            <div className="line">
                <img src={LINE} alt="" />
            </div>
            <div className='Footer-grid3'>
                <h5>About</h5>
                <Link to='/company'>The Company</Link>
                <Link to='/team'>The Team</Link>
                <Link to='/mentor'> The Course Mentor</Link>
                <Link to='/director'>Non Executive Director</Link>
          </div>
            

            </div>
            <div className='Footer-grid4'>
                <img src={POL} className='pol1' alt="pol" />
            </div>

        </div>
        <p className='copy'>&copy;2022 Lagos School of Programming|All Right Reserved</p>
    </>
  )
}

export default Footer