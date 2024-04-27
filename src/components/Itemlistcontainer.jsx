import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

export const Itemlistcontainer = () => {
  const arrayProductos = [
    { id: 1, nombre: "Notebook Gamer Lenovo Legion 5 15ACH6A WQHD 2K 15.6 R5 5600H 16GB (2x8GB) 512GB SSD NVME RX6600M 8GB W11 165Hz Silver", precio: 1.119, img: "../../public/producto1.jpg", categoria: "Notebook" },
    { id: 2, nombre: "Procesador Intel Core i5 14400F 4.7GHz Turbo Socket 1700 Raptor Lake", precio: 309.9, img: "../../public/producto2.jpg", categoria: "Procesador" },
    { id: 3, nombre: "Memoria Team DDR5 64GB (2x32GB) 6000Mhz T-CREATE EXPERT CL34 Black", precio: 279.9, img: "../../public/producto3.jpg", categoria: "Ram" },
    { id: 4, nombre: "Placa de Video XFX Radeon RX 580 8GB GDDR5 GTS 2048SP", precio: 185.4, img: "../../public/producto4.jpg", categoria: "PlacaVideo" },
    { id: 5, nombre: "Fuente Cougar 750W 80 Plus Gold GEC750", precio: 123.55, img: "../../public/producto5.jpg", categoria: "Fuente" },
  ];

  const [productos, setProductos] = useState([arrayProductos]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      const productosFiltrados = idCategoria ? arrayProductos.filter((item) => item.categoria === idCategoria) : arrayProductos;

      if (productosFiltrados.length > 0){
        resolve(productosFiltrados);
        
      }else {
        reject("Error al filtrar producto")
      }
    });

    promesa
      .then((resultado) => {
        setProductos(resultado);
      })
      .catch((error) => {
        console.error("Error al filtrar productos:", error);
      });
  }, [idCategoria]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos"}>
                  Todos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos/Notebook"}>
                  Notebook
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos/Procesador"}>
                  Procesador
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos/Ram"}>
                  Ram
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos/PlacaVideo"}>
                  Placavideo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/productos/Fuente"}>
                  Fuente
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row  d-flex justify-content-center gap-3">
            {productos.map((item) => (
              <div className="card" key={item.id} style={{ width: "18rem" }}>
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">{item.nombre}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
