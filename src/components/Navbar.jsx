import React from "react";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container  col-8">
          <a className="navbar-brand" href="#">
            Legion
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ¿Quienes somos?
                </a>
              </li>
            </ul>
          </div>
        </div>
          <div className="container col-4 d-flex justify-content-end">
            <CartWidget />
          </div>
      </nav>
    </div>
  );
};
