import React from "react";
import './Header.css'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
export default function Header() {
  return (
    <>
      <div className="container-fluid bg-dark py-3 sticky-top" id="header-cf">
        <div className="container">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="/">
              <h1>Genrative<span className="text-info">AI</span></h1>
            </a>
            
            <button className="navbar-toggler border border-white" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon text-white font-weight-bolder">
                <DensityMediumIcon></DensityMediumIcon>
              </span>
            </button>

            <div
              className="collapse navbar-collapse  header-nav" id="collapsibleNavbar"
            >
              <ul class="navbar-nav mr-auto d-flex justify-content-end">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Login</a>
                </li>
                <li className="nav-item">
                    <a href="nav-link">
                        <i class="fa-solid fa-moon py-3"></i>
                    </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
