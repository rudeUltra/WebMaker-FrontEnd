import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

import img1 from '../assets/dmo1.png';
import img2 from '../assets/dmo2.png';
import img3 from '../assets/dmo3.png';

const ResponsiveComponent = () => {
  return (
    <div>
     <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
      <div className="flex-item p-3 d-none d-md-block" style={{ width: '33vw' }}>
        <img src={img1} alt="Image 1" style={{ width: '100%' }} />
      </div>
      <div className="flex-item p-3 d-none d-md-block" style={{ width: '33vw' }}>
        <img src={img2} alt="Image 2" style={{ width: '100%' }} />
      </div>
      <div className="flex-item p-3 d-none d-md-block" style={{ width: '33vw' }}>
        <img src={img3} alt="Image 3" style={{ width: '100%' }} />
      </div>
      {/* Add more divs for additional images if needed */}
    </div>

    <div className="d-flex justify-content-center align-items-center pt-3 pb-1">
      <button className="btn btn-secondary btn-lg custom-button">View Recent Work</button>
    </div>



    </div>
   
  );
};

export default ResponsiveComponent;
