import React from 'react'
import Button from '../commonfiles/Button'


const Faq =()=>{
    return (
        <div className="container-fluid p-3 bg-danger text-center faq-text">
            <div className="row mx-5">
                <div className="col-md-8">
                    <h6>Have some Questions on your mind, Visit our F.AQ Page for some answer.</h6>
                </div>
                <div className="col-md-4">
                <Button 
                link='/FAQPage'
                class="btn btn-light w-100"
                btnName="Go to FAQ &#8594;"
                />
                </div>
            </div>
        </div>
    )
}

export default Faq;