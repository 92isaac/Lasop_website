import React,{useEffect} from 'react'
import './Flutterwave.css'
import { NavLink } from 'react-router-dom'
import $ from "jquery";
import {findDomNode} from 'react-dom'
// import NavBar from '../components/navbarfiles/NavBar'

    


$('#but').hide()
$('#bet').on( 'click', function(){
    $('#but').show()
})
function Success() {
  useEffect=(() =>{
    
  })


    
    const refreshPage = ()=>{
        window.location.reload();
     }
    
    
  return (
    <div> 
        {/* <NavBar/> */}
        <div className='alls'>

      
<div className='container'>
  <div className='row justify-content-center align-item-center pt-5'>
  <div className='col-sm-12 col-md-12 col-lg-12 mx-auto text-center '>

    
    <h3 >Congratulation!</h3>
    <p>You have just completed the first phase of your application into Lagos School of Programming Limited</p>
    <p>Press the button for data review before proceeding to payment</p>
 


<button className='btn btn-primary mr-3' id='bet' onClick={refreshPage} >Refresh to load Data</button>
<NavLink to='/flutterwave'>
<button className='btn btn-outline-primary ml-5 shift' id='but'>Proceed to payment</button>
</NavLink>

</div>
</div>
</div>
</div>
    </div>
  )
}

export default Success