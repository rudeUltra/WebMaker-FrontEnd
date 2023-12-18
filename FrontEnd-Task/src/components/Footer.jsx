import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import twitter from '../assets/twitter.png'
import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'

const backgroundStyle={
    backgroundColor: '#cdc1ff',
backgroundImage: 'linear-gradient(316deg, #cdc1ff 0%, #e5d9f2 74%)'
}

const FooterComponent = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex flex-column align-items-center">
          {/* Replace with your H1 content */}
          <h1 className="mb-0 text-body-primary align-self-start pb-5">Unicraft</h1>
          {/* Replace with your P content */}
          <p className="mb-md-0 text-body-secondary align-self-start pb-1">Design amazing digital experiences that
create more happy in the world.</p>
          <p className="mb-3 text-body-secondary align-self-start text-muted">© 2077 Untitled UI. All rights reserved.</p>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-end">
          
          <ul className="nav list-unstyled d-flex pt-5">
            <li className="ms-3"><a className="text-body-secondary" href="#"><img src={twitter} style={{height:'35px'}}></img></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><img src={linkedin} style={{height:'35px'}}></img></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><img src={facebook} style={{height:'35px'}}></img></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><img src={github} style={{height:'35px'}}></img></a></li>
            
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
