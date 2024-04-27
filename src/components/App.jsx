import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Itemlistcontainer } from "./Itemlistcontainer";
import { Navbar } from "./Navbar";
import { Nosotros } from "./Nosotros";
import { Error } from "./Error";


export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Nosotros />} />
        <Route path={"/*"} element={<Error />} />
        <Route path={"/productos"} element={<Itemlistcontainer />} />
        <Route path={"/productos/:idCategoria"} element={<Itemlistcontainer />} />
      </Routes>
    </BrowserRouter>
  );
};
