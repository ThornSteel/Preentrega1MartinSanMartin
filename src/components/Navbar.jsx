import React from "react";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler order-2 order-md-1" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse order-3 order-md-2" id="navbarLeft">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link active" >
                  ¿Quienes somos?
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/productos"} className="nav-link" >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" >
                  Servicios
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="navbar-brand order-1 order-md-3" >
            Navbar
          </NavLink>
          <div className="collapse navbar-collapse order-4 order-4" id="navbarRight">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" >
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                  <CartWidget/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
