import React from "react";
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const FlexboxComponent = () => {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center gap-3 flex-wrap">
      <div className="flex-item p-3">
        <div className="container">
          <img src={img8} alt="Image 1" />
        </div>
      </div>
      <div className="flex-item p-3">
      <div className="container">
          <img src={img2} alt="Image 1" />
        </div>
      </div>
      <div className="flex-item p-3">
      <div className="container">
          <img src={img7} alt="Image 1" />
        </div>
      </div>
      <div className="flex-item p-3">
      <div className="container">
          <img src={img4} alt="Image 1" />
        </div>
      </div>
      <div className="flex-item p-3">
      <div className="container">
          <img src={img5} alt="Image 1" />
        </div>
      </div>
      <div className="flex-item p-3">
      <div className="container">
          <img src={img6} alt="Image 1" />
        </div>
      </div>
    </div>
  );
};

export default FlexboxComponent;
