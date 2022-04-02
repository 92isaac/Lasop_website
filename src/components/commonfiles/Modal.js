import React from 'react'
import { useNavigate } from 'react-router-dom'



const Modal =(props)=>{

  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    alert('Application succsess; Press "OK" to return to the home page')
    navigate("/Apply", {replace: true});
  }


    return (<div>
    <button type="button" className={props.className} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">{props.btnName}</button>
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="exampleModalLabel">Preferred Location</h6>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Open this select menu</option>
                    <option value="1">Ogba1</option>
                    <option value="2">Ogba2</option>
                    <option value="3">Ogba3</option>
                </select>
              </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-outline-primary">Continue</button>
          </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
)}

export default Modal;