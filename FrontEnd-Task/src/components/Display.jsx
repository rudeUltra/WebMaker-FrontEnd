import React from "react";

function Display() {
  return (
    <div className="container-fluid my-5" style={{fontFamily:'Satoshi-Variable'}}>
      <div className="p-5 text-center bg-transparent rounded-3">
        
        <h1 className="text-dark fw-bold" style={{fontSize:'72px'}}>Elevate Your Presence with <br></br> Seamless Design and Innovation.</h1>
        <p className="col-lg-8 mx-auto  text-dark" style={{fontSize:'20px'}}>
        From strategic planning to digital presence, we're your dedicated partner in achieving solo success.
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          
          <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill bg-dark" type="button">
            View Pricing
          </button>
        </div>

        <p className="">Trusted by 250+ companies</p>
      </div>
    </div>
  );
}

export default Display;
