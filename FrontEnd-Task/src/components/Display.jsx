import React from "react";

function Display() {
  return (
    <div className="container-fluid my-5">
      <div className="p-5 text-center bg-light rounded-3">
        
        <h1 className="text-dark fs-1 fw-bold">Elevate Your Presence with Seamless Design and Innovation.</h1>
        <p className="col-lg-8 mx-auto fs-5 text-dark">
        From strategic planning to digital presence, we're your dedicated partner in achieving solo success.
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          
          <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill bg-dark" type="button">
            Secondary link
          </button>
        </div>
      </div>
    </div>
  );
}

export default Display;
