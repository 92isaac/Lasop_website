import React, {useState} from 'react';
import './Apply.css'
import { useNavigate } from 'react-router-dom'
import ChoseCourse from '../appFormfiles/ChoseCourse';
import Lecturetime from '../appFormfiles/Lecturetime';
// import { db } from "../firebasefile/firebase_config";
// import {collection, getDoc, addDoc } from "firebase/firestore";




// export const StudyContext = React.createContext()

const Apply = () => {

  const [usersData, setUsersData]=useState({fName:"", oName:"", lName:"", email:"", address:"", tell:""})

  const [focus, setFocus] = useState(false)

	const navigate = useNavigate()

   const handleSubmit=(e)=>{
	 e.preventDefault();

   alert('Application succsess; Press "OK" to return to the home page')
    navigate("/", {replace: true});
    setUsersData(usersData);
    }

    const handleFocus =(e)=>{
      setFocus(true);
    };

  return (
    <div className="application-container">
  <form onSubmit={handleSubmit} className="application-form">
    <input type="text" name="fName" onChange={e=> setUsersData({fName:e.target.value})}  value={usersData.fName} placeholder="FirstName" pattern='^[A-Za-z]{3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
    <span>Input a valid firstname</span>

    <input type="text" name="oName" onChange={e=> setUsersData({oName:e.target.value})}  value={usersData.oName} placeholder="Other Name" pattern='^[A-Za-z]{3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
    <span>this field is required</span>

    <input type="text" name="lName" onChange={e=> setUsersData({lName:e.target.value})}  value={usersData.lName} placeholder="LastName" pattern='^[A-Za-z]{3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
        <span>this field is required</span>

    <input type="Email" name="email" onChange={e=> setUsersData({email:e.target.value})}  value={usersData.email} placeholder="Email" onBlur={handleFocus} required focus={focus.toString()}/>
    <span>input a valid email account</span>

    <input type="address" name="address" onChange={e=> setUsersData({address:e.target.value})}  value={usersData.address} placeholder="address" onBlur={handleFocus} focus={focus.toString()}/>
    <span> this field is required</span>

    <input type="tel" name="phoneNumber" onChange={e=> setUsersData({tell:e.target.value})}  value={usersData.tell} placeholder="Phone-number" onBlur={handleFocus} required focus={focus.toString()}/>
    <span>input a valid phone number</span>

    <ChoseCourse/>
    <br/>
    <Lecturetime/>
    <br/>
    	<button className="application-button" type='submit'>Submit</button>
  </form>
  </div>
  )
}

export default Apply;




