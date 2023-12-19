import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/Slider1.png'

const JumbotronComponent1 = () => {
  return (
    <div className="my-5 d-none d-xl-block" >
      <div className="p-5 text-center bg-body-transparent" >
        <div className="container py-5 ">
        
          <h1 className="text-body-emphasis fw-bold "  style={{fontSize:'48px'}}>How it Works</h1>
          <p className="col-lg-8 mx-auto lead">
          Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.
          </p>
          <div className="d-flex justify-content-center align-items-center pt-3" >
          <img src={img1} alt="Image 3"  />
    </div>

          
        </div>
      </div>
    </div>
  );
};

export default JumbotronComponent1;
