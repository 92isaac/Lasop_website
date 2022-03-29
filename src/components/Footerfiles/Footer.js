import React from 'react'
import './Footer.css'
import FOOTLOGO from '../../images/logo.png'
// import {Link}from 'react-router-dom'import 
import POL from '../../images/Polygon-1.png'
import LINE from '../../images/Line5.png'

function Footer() {
  return (
    <div>
        <div className='footer-grids'>
         <div className='block'>
         
            <div className='footer-grid1'>
                <a href='/'>
               <img src={FOOTLOGO} alt='' className='foot-img'/>
               </a>

               <p>At <span>LASOP</span>, we are not static but dynamic. We are evolving with latest trends in technology. We are determined to meet the demands of our students and making Nigeria the tech-hub of Africa and the world at large.</p>

               <a href="mailto:info@lasop.net" ><i className='fas fa-envelope'></i>info@lasop.net |</a>
               <br/>
               <a href="tel:+234 702 571 3326" target="_blank"><i className='fas fa-phone'></i>+234 702 571 3326 
 |              +234 807 402 4260</a>
               <br/>
               <a href="https://wa.me/7025713326" target="_blank"><i className="fa-brands fa-whatsapp-square"></i>+234 702 571 3326</a>
               <br/>
               <a href="https://www.facebook.com/lasopdotnet" target="_blank"><i className="fa-brands fa-facebook-square"></i>Facebook</a>
               <br/>
               <a href="https://www.instagram.com/lasopdotnet" target="_blank"><i className="fa-brands fa-instagram-square"></i>Instagram</a>
               <br/>
               <a href="https://twitter.com/Lasopdotnet" target="_blank"><i className="fa-brands fa-twitter-square"></i>Twitter</a>
               <br/>
               <a href="https://linkedin.com/company/lasopdotnet" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
          </div>

          <div className='mobile'>

            <div className='Footer-grid2'>
                <h5>Quick Links</h5>
                <a href='/blog'>Our Blog</a>
                <a href='/contact'>Contact Us</a>
                <a href='/FAQPage'>FAQ</a>

            </div>

            <div class="line">
                <img src={LINE} alt="" />
            </div>
            <div className='Footer-grid3'>
                <h5>About</h5>
                <a href='/company'>The Company</a>
                <a href='/team'>The Team</a>
                <a href='/mentor'> The Course Mentor</a>
                <a href='/director'>Non Executive Director</a>
          </div>
            

            </div>
            <div className='Footer-grid4'>
                <img src={POL} className='pol1' />
            </div>

        </div>
        <p className='copy'>&copy;2022 Lagos School of Programming|All Right Reserved</p>
    </div>
  )
}

export default Footer