import React from "react";
import { Link } from "react-router-dom";

const Nav =()=> {
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
           <Link className="navbar-brand mx-3" to="/">
            NewsDose
           </Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-start mx-3" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  News
                </Link>
              </li>
              
              <li className="nav-item">
                 <Link className="nav-link" to="/health">
                  Health
                 </Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/sports">
                  Sports
                 </Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/entertainment">
                Entertainment
                 </Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/science">
                Science
                 </Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/business">
                  Business
                 </Link>
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/technology">
                Technology
                 </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  
}
export default Nav