import React from "react";

export default function Navbar() {
  return (
    <div className="text-center">
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="row w-100 justify-content-between">
            <div className="col-auto">
              <a className="navbar-brand text-light" href="#">
                Start Bootstrap
              </a>
            </div>
            <div className="col-auto">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link active text-light" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

