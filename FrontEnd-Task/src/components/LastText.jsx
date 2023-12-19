import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

const backgroundStyle={
    backgroundColor: '#cdc1ff',
backgroundImage: 'linear-gradient(316deg, #cdc1ff 0%, #e5d9f2 74%)'
}

const Last = () => {
  return (
    <div className="my-5" >
      <div className="p-5 text-center bg-body-transparent" style={backgroundStyle}>
        <div className="container py-5 ">
        
          <h1 className="text-body-emphasis fw-bold  pb-2"  style={{fontSize:'72px'}}>No long-term contracts</h1>
          <h1 className="text-body-emphasis fw-bold  pb-2"  style={{fontSize:'72px'}}>No catches. Simple.</h1>
          <p className="col-lg-8 mx-auto lead">
            Start your 30 day trial cancel anytime.
          </p>

          <div className="d-flex justify-content-center align-items-center pt-3 pb-1">
      <button className="btn btn-secondary btn-lg custom-button3">Contact us</button>
    </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Last;
