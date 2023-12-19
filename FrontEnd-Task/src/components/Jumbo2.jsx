import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from '../assets/dp1.png'
import img1 from '../assets/logo1.png'

const JumbotronComponent2 = () => {
  return (
    <div className="my-5 d-none d-md-block" >
      <div className="p-5 text-center bg-body-tertiary" >
        <div className="container py-5 ">

        
        <div className="d-flex justify-content-center align-items-center pt-3 pb-4" >
          <img src={img1} alt="Image 3" style={{ width: '10vw', background:'transparent' }} />
          

         </div>
        
        
          <h1 className="text-body-emphasis fw-bold"  style={{fontSize:'48px'}}>We've been with unicraft to kick start every new project and can’t imagine working without it.</h1>
          
          <div className="d-flex justify-content-center align-items-center pt-3" >
          <img src={img2} alt="Image 3" style={{ width: '5vw', background:'transparent' }} />
          

    </div>
    <p className="mx-auto lead fw-bold pt-4">Candice Wu</p>
    <p className="mx-auto lead">Assitant Manager</p>

          
        </div>
      </div>
    </div>
  );
};

export default JumbotronComponent2;
