import React, {useState, useEffect} from 'react';
import './Apply.css'
import NavBar from '../navbarfiles/NavBar'
import { useNavigate } from 'react-router-dom'
import { db } from "../../firebase_Config";
import {collection, getDocs, addDoc } from "firebase/firestore";




// export const StudyContext = React.createContext()

const Apply = () => {

  const [message, setMessage] = useState({error: false, msg: ""})
  const [usersData, setUsersData]=useState({fName:"", lName:"", email:"", address:"", tell:"", amount:"", center:"", course:"", timeOfStudy:''})
  const [focus, setFocus] = useState(false)
	const navigate = useNavigate()

   const handleSubmit= async (e)=>{
	 e.preventDefault();
    if(usersData === ""){
      setMessage({error:false, msg: "All fields are mandatory!"});
      return;
    }
   await addDoc(usersCollectionRef, {usersData})

   alert('Application successfull; Press "OK" to return to the home page')
    navigate("/", {replace: true});
    console.log(usersData.course)
     setUsersData(usersData);
    }

    const handleFocus =(e)=>{
      setFocus(true);
    };


    const usersCollectionRef = collection(db, 'user')
    useEffect(() =>{
      const getUsers = async () =>{
        const data = await getDocs(usersCollectionRef)
        console.log(data)
      };
        getUsers()

    }, []);

  return ( <div>
    <NavBar/>

    <div className="application-container py-5">
  <form onSubmit={handleSubmit} className="application-form">
    <input type="text" name="fName" onChange={e=> setUsersData({...usersData, fName:e.target.value})}  value={usersData.fName} placeholder="FirstName" pattern='^[A-Za-z]{3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
    <span>Input a valid firstname</span>

    <input type="text" name="lName" onChange={e=> setUsersData({...usersData, lName:e.target.value})}  value={usersData.lName} placeholder="LastName" pattern='^[A-Za-z]{3,15}' onBlur={handleFocus} required focus={focus.toString()}/>
        <span>this field is required</span>

    <input type="Email" name="email" onChange={e=> setUsersData({...usersData, email:e.target.value})}  value={usersData.email} placeholder="Email" onBlur={handleFocus} required focus={focus.toString()}/>
    <span>input a valid email account</span>

    <input type="address" name="address" onChange={e=> setUsersData({...usersData, address:e.target.value})}  value={usersData.address} placeholder="address" onBlur={handleFocus} focus={focus.toString()}/>
    <span> this field is required</span>

    <input type="tel" name="phoneNumber" onChange={e=> setUsersData({...usersData, tell:e.target.value})}  value={usersData.tell} placeholder="Phone-number" onBlur={handleFocus} required focus={focus.toString()}/>
    <span>input a valid phone number</span>

    <input type="text" name="amount"  placeholder="amount" value={usersData.amount} onChange={e=> setUsersData({...usersData, amount:e.target.value})} onBlur={handleFocus} required focus={focus.toString()}  />
    <span>input a valid phone number</span>


    {/* choose a course */}

    <label name="Course">Center:
    <select name="Course" id="Course-select" value={usersData.center} onChange={e=> setUsersData({...usersData, center:e.target.value})}>
    <option value="Frontend Development">Iju</option>
    <option value="Backend Development">Ogba</option>
    <option value="Fullstack Developement" >Ogba2</option>
    </select> </label>

    <label name="Course">Course:
    <select name="Course" id="Course-select" value={usersData.course} onChange={e=> setUsersData({...usersData, course:e.target.value})}>
    <option value="Frontend Development">Frontend Development</option>
    <option value="Backend Development">Backend Development</option>
    <option value="Fullstack Developement" >Fullstack Developement</option>
    <option value="UI/UX Course">UI/UX Course</option>
    <option value="App Development(IOS and HIOS)">App Development(IOS and HIOS)</option>
    <option value="Machine Learning">Machine Learning</option>
    </select> </label>
    <br/>


    <label name="Course">Mode of study:
    <select name="Course" id="Course-select" value={usersData.timeOfStudy} onChange={e=> setUsersData({...usersData, timeOfStudy:e.target.value})}>
    <option value="Frontend Development">Weekday</option>
    <option value="Backend Development">Weekend</option>
    </select> </label>
    <br/>
    	<button className="application-button" type='submit'>Submit</button>
  </form>
  </div>

  </div>
  )
}

export default Apply;




