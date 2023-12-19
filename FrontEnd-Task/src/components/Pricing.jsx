import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/Slider1.png'

import './Navbar.css';
import logo from '../assets/checked.png'
import logowhite from '../assets/check-white.png'
import logodull from '../assets/checked-grey.png';

const backgroundStyle={
    backgroundColor: '#cdc1ff',
backgroundImage: 'linear-gradient(316deg, #cdc1ff 0%, #e5d9f2 74%)'
}

const Pricing = () => {
  return (
    <div className="my-5">
      <div className="p-5 shadow-lg text-center bg-body-transparent" style={backgroundStyle} >
        <div className="container-fluid py-5 ">
        
          <h1 className="text-body-emphasis fw-bold"  style={{fontSize:'58px'}}>Pricing made for collaborative support.</h1>
          <p className="col-lg-8 mx-auto lead">
          Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.
          </p>

          <div className="d-flex flex-row justify-content-center align-items-center gap-5 flex-wrap">
          <div className="flex-item p-3" style={{width:'400px'}}>
      <div class="card text-start mb-3 shadow-lg">
       <div class="card-body">
    <h5 class="card-title fs-1">Freebie</h5>
    <p class="card-text ">Ideal for individuals who need quick access to basic features.</p>
    <p class="card-text fs-2 fw-b">$25.10/Month</p>
    <a href="#" class="btn btn-primary custom-button btn-lg mb-2 text-center" style={{width:'100%'}}>Buy Now</a>
    <div className="container pt-2">
    <img src={logo} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="fw-bold">20,000+ of PNG & SVG graphics</p>
    </div>
    <div className="container">
    <img src={logo} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="fw-bold">Access to 100 million stock images</p>
    </div>
    <div className="container">
    <img src={logodull} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="text-muted">Upload custom icons and fonts</p>
    </div>
    <div className="container">
    <img src={logodull} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="text-muted"> Unlimited Sharing</p>
    </div>
    <div className="container">
    <img src={logodull} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="text-muted">Upload graphics & video in up to 4k</p>
    </div>
    <div className="container">
    <img src={logodull} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="text-muted">Unlimited Projects</p>
    </div>
    <div className="container">
    <img src={logodull} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="text-muted">Instant Access to our design system</p>
    </div>
    <div className="container">
    <img src={logodull} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="text-muted">Create teams to collaborate on designs</p>
    </div>
    
      </div>
       </div>
      </div>
      <div className="flex-item p-3" style={{width:'400px'}}>
      <div class="card text-start text-bg-dark mb-3 shadow-lg">
       <div class="card-body">
    <h5 class="card-title fs-1">Professional</h5>
    <p class="card-text ">Ideal for individuals who who need advanced features and tools for client work.</p>
    <p class="card-text fs-2 fw-b">$25.10/Month</p>
    <a href="#" class="btn btn-primary btn-lg mb-2 text-center custom-button2" style={{width:'100%'}}>Buy Now</a>
    <div className="container pt-2">
    <img src={logowhite} className='float-start me-2' style={{height:'20px'}}></img>
    <p>20,000+ of PNG & SVG graphics</p>
    </div>
    <div className="container">
    <img src={logowhite} className='float-start me-2' style={{height:'20px'}}></img>
    <p>Access to 100 million stock images</p>
    </div>
    <div className="container">
    <img src={logowhite} className='float-start me-2' style={{height:'20px'}}></img>
    <p>Upload custom icons and fonts</p>
    </div>
    <div className="container">
    <img src={logowhite} className='float-start me-2' style={{height:'20px'}}></img>
    <p>Unlimited Sharing</p>
    </div>
    <div className="container">
    <img src={logowhite} className='float-start me-2' style={{height:'20px'}}></img>
    <p>Upload graphics & video in up to 4k</p>
    </div>
    <div className="container">
    <img src={logodull} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="textCol" >Unlimited Projects</p>
    </div>
    <div className="container">
    <img src={logodull} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="textCol">Instant Access to our design system</p>
    </div>
    <div className="container">
    <img src={logodull} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="textCol" >Create teams to collaborate on designs</p>
    </div>
      </div>
       </div>
      </div>
      <div className="flex-item p-3" style={{width:'400px'}}>
      <div class="card text-start mb-3 shadow-lg">
       <div class="card-body">
    <h5 class="card-title fs-1">Enterprise</h5>
    <p class="card-text ">Ideal for businesses who need personalized services and security for large teams.</p>
    <p class="card-text fs-2 fw-b">$25.10/Month</p>
    <a href="#" class="btn btn-primary custom-button btn-lg mb-2 text-center" style={{width:'100%'}}>Buy Now</a>
    <div className="container pt-2">
    <img src={logo} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="fw-bold">20,000+ of PNG & SVG graphics</p>
    </div>
    <div className="container">
    <img src={logo} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="fw-bold">Access to 100 million stock images</p>
    </div>
    <div className="container">
    <img src={logo} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="fw-bold">Upload custom icons and fonts</p>
    </div>
    <div className="container">
    <img src={logo} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="fw-bold" >Unlimited Sharing</p>
    </div>
    <div className="container">
    <img src={logo} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="fw-bold">Upload graphics & video in up to 4k</p>
    </div>
    <div className="container">
    <img src={logo} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="fw-bold">Unlimited Projects</p>
    </div>
    <div className="container">
    <img src={logo} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="fw-bold">Instant Access to our design system</p>
    </div>
    <div className="container">
    <img src={logo} className='float-start me-2' style={{height:'20px'}}></img>
    <p className="fw-bold">Create teams to collaborate on</p>
    </div>
      </div>
       </div>
      </div>
    
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;
