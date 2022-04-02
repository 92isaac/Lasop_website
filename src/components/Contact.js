import React, { useState, useEffect } from 'react'
import './Contact.css'
import ContactNav from './navbarfiles/ContactNav'
import STR from '../images/stroke.png'
import { db } from "../firebase_Config";
import {collection, getDocs, addDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom'

function Contact() {



  
  const [contact, setContact] = useState({name:"", email:"", subject:"", tell:"", message:""})
  const [message, setMessage] = useState({error: false, msg: ""})
	const navigate = useNavigate()


  
  const handleSubmit= async (e)=>{
    e.preventDefault();
     if(contact === ""){
       setMessage({error:false, msg: "All fields are mandatory!"});
       return;
     }
    await addDoc(usersCollectionRef, {contact})
    
 
    alert('Message sent successfully')
     navigate("/contact", {replace: true});
     console.log(contact.course)
      setContact(contact);
     }
 
 
     const usersCollectionRef = collection(db, 'contact_Us')
     useEffect(() =>{
       const getUsers = async () =>{
         const data = await getDocs(usersCollectionRef)
         console.log(data)
         // setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
       };
         getUsers()
 
     }, []);

  return (
    <div>
     <ContactNav/>
     <div className='change'>
     <div className= 'container-fluid'>
       <div className='row pt-5 mx-auto switch'>
         <div className='col-sm-12 col-md-6 col-lg-6'>
            <h3>Drop Us A Line</h3>
            <div className='row mt-5 mx-auto'>
              <div className='col-sm-12 col-md-6 col-lg-6 mb-3 closest '>
                <input type="text" className="form-control" placeholder="Your Name..." name="name" value={contact.name} onChange={(e)=>setContact({...contact, name:e.target.value})} style={{height:'35px'}}/>
              </div>
          
              <div className='col-sm-12 col-md-6 col-lg-6 closer'>
                <input type="email" className="form-control" placeholder="Your Email Address..." name="email"  value={contact.email} onChange={(e)=>setContact({ ...contact, email:e.target.value})} style={{height:'35px'}}/>
              </div>
            </div>
            <div className='row mt-5 mx-auto '>
              <div className='col-sm-12 col-md-6 col-lg-6 mb-3 close '>
                <input type="text" className="form-control" placeholder="Subject matter..." name="subject" value={contact.subject} onChange={(e)=>setContact({ ...contact, subject:e.target.value})} style={{height:'35px'}}/>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-6'>
              <input type="email" className="form-control" placeholder="Your Phone Number..." name="tell"  value={contact.tell} onChange={(e)=>setContact({ ...contact, tell:e.target.value})} style={{height:'35px'}}/>
              </div>
            </div>
            {/* <div className='col-sm-12 col-md-6 col-lg-6'> */}
             <textarea className="form-control" id="" cols="70" rows="8" placeholder="Your message" name="message" value={contact.message} onChange={(e)=>setContact({ ...contact, message:e.target.value})}></textarea>
            {/* </div> */}
            <div className='row'>
              <div className='col-sm-12 col-md-6 col-lg-6 mx-auto mt-5'>
                <button type='button' className='btn btn-outline-primary send'>Send Message</button>

              </div>
            </div>
         </div>
           
         <div className='col-sm-12 col-md-6
           
          col-lg-6 second'>
            <div className='first'>
            <h2>Get In Touch With Us</h2>
            <p><i class="fa-solid fa-location-dot"></i>NO 114,IJU ROAD, OPP LG SHOWROOM, BY CHURCH<span> BUS STOP, AGEGE, LAGOS STATE.</span></p>

            <a href="tel:+234 702 571 3326" target="_blank"><i className='fas fa-phone'></i>+234 702 571 3326 
               </a>
               <br/>
            <a href="tel:+234 807 402 4260" target="_blank" className='anchor'>+234 807 402 4260
               </a>
               <br/>

            <a href="mailto:info@lasop.net" ><i className='fas fa-envelope'></i>info@lasop.net </a>
             <div className='row pt-5 mx-auto switch'>
                 <div className='col-sm-12 col-md-6 col-lg-6'>
                 <p className='faq'>Need Help?<span className='pipe'>|</span><a href='FAQPage' className='goto'> Go to FAQ</a></p>
                 
                </div>
                 <div className='col-sm-12 col-md-6 col-lg-6'>
                
                 <img src={STR} alt='' className='stroke'/>
                </div>
            </div>

           
            </div>

            
              
          </div>

       </div>

     </div>
     </div>
    </div>
  )
}

export default Contact