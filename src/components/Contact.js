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
         <form onSubmit={handleSubmit}>
            <h3>Drop Us A Line</h3>
            <div className='row pt-5 mx-auto'>
              
              <div className='col-sm-12 col-md-6 col-lg-6 pb-3 '>
                <input type="text" className="form-control" placeholder="Your Name..." name="name" value={contact.name} onChange={(e)=>setContact({...contact, name:e.target.value})}/>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-6'>
                <input type="email" className="form-control" placeholder="Your Email Address..." name="email" value={contact.email} onChange={(e)=>setContact({ ...contact, email:e.target.value})} />
              </div>
            </div>
            <div className='row pt-5 mx-auto'>
              <div className='col-sm-12 col-md-6 col-lg-6 pb-3 '>
                <input type="text" className="form-control" placeholder="subject matter..." name="subject" value={contact.subject} onChange={(e)=>setContact({ ...contact, subject:e.target.value})} />
              </div>

              <div className='col-sm-12 col-md-6 col-lg-6'>
                <input type="text" className="form-control" placeholder="Your phone-number..." name="tell" value={contact.tell} onChange={(e)=>setContact({ ...contact, tell:e.target.value})} />
              </div>
            </div>
            {/* <div className='col-sm-12 col-md-6 col-lg-6'> */}
             <textarea className="form-control" id="" cols="70" rows="8" placeholder="Your message" name="message" value={contact.message} onChange={(e)=>setContact({ ...contact, message:e.target.value})} ></textarea>
            {/* </div> */}
              <div className="mt-5">
            <button className="btn btn-outline-primary">Send Message</button>
              </div>
            </form>
         </div>
           
         <div className='col-sm-12 col-md-6
           
          col-lg-6 second'>
            <div className='first'>
            <h2>Get In Touch With Us</h2>
            <p><i className="fa-solid fa-location-dot"></i>NO 114,IJU ROAD, OPP LG SHOWROOM, BY CHURCH<span> BUS STOP, AGEGE, LAGOS STATE.</span></p>

            <Link to="tel:+234 702 571 3326" target="_blank"><i className='fas fa-phone'></i>+234 702 571 3326 
               </Link>
               <br/>
            <Link to="tel:+234 807 402 4260" target="_blank" className='anchor'>+234 807 402 4260
               </Link>
               <br/>

            <Link to="mailto:info@lasop.net" ><i className='fas fa-envelope'></i>info@lasop.net </Link>
             <div className='row pt-5 mx-auto switch'>
                 <div className='col-sm-12 col-md-6 col-lg-6'>
                 <p className='faq'>Need Help?<span className='pipe'>|</span><span className='goto'> Go to FAQ</span></p>
                 
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