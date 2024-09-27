import React from "react";
import './Header.css'
export default function Header() {
  return (
    <>
      <div className="container-fluid bg-dark py-3 sticky-top" id="header-cf">
        <div className="container">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="/">
              <h1>Genrative<span className="text-info">AI</span></h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse d-flex"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mr-auto">
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
