import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <h1>Error pagina no encontrada</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sunt.</p>
            <Link to={"/"} className="btn btn-danger">Volver al inicio</Link>
          </div>
        </div>
      </div>
    </>
  );
};
