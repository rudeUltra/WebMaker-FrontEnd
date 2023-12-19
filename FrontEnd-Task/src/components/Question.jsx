import React from "react";
import { useState } from "react";
import add from '../assets/add.png'
function Question() {
    const [clicked,setClick]=useState(0);

    function pressed(){
        setClick(1);
    }
  return (

   

    <div className="container-fluid my-5 pt-3">
      <div className="p-5 text-center bg-light rounded-3">
        
        <h1 className="text-dark fw-bold"  style={{fontSize:'58px'}}>Frequently Asked Questions</h1>
        <p className="col-lg-8 mx-auto fs-5 text-dark">
        Everything you need to know about the product and billing.
        </p>
        <div className="container mt-5">
      <div className="d-flex flex-column">
        {/* First child div */}
        <div className="flex-child p-3 border mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">Is there a free trial available ?</div>
            <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><img src={add} style={{height:'20px'}}>

            </img></button>
          </div>

          <div class="collapse" id="collapseExample1">
            <div class="card card-body text-start">
            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </div>
          </div>

          
         
        </div>

        <div className="flex-child p-3 border mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">Can I change my plan later?</div>
            <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample1"><img src={add} style={{height:'20px'}}>

            </img></button>
          </div>

          <div class="collapse bg-transparent" id="collapseExample2">
            <div class="card card-body text-start">
            Maybe.🧐
            </div>
          </div>

          
         
        </div>

        <div className="flex-child p-3 border mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">What is your cancellation policy?</div>
            <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample1"><img src={add} style={{height:'20px'}}>

</img></button>
          </div>

          <div class="collapse bg-transparent" id="collapseExample3">
            <div class="card card-body text-start">
            No refunds 🤓
            </div>
          </div>

          
         
        </div>
        <div className="flex-child p-3 border mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">Can other info be added to an invoice?</div>
            <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample1"><img src={add} style={{height:'20px'}}>

</img></button>
          </div>

          <div class="collapse bg-transparent" id="collapseExample4">
            <div class="card card-body text-start">
            Yes i guess.🤪
            </div>
          </div>

          
         
        </div>
        <div className="flex-child p-3 border mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">How does biling work?</div>
            <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample1"><img src={add} style={{height:'20px'}}>

</img></button>
          </div>

          <div class="collapse bg-transparent" id="collapseExample5">
            <div class="card card-body text-start">
            We charge you money.💲
 
            </div>
          </div>

          
         
        </div>
        <div className="flex-child p-3 border mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold">How do I change my account email?</div>
            <button className="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample1"><img src={add} style={{height:'20px'}}>

</img></button>
          </div>

          <div class="collapse bg-transparent" id="collapseExample6">
            <div class="card card-body text-start">
            Click on change Email.✉️
            </div>
          </div>

          
         
        </div>
        
      </div>
    </div>
        

      </div>
    </div>
  );
}

export default Question;
