import React from 'react'
import ReactDOM from 'react-dom/client'
import {Navbar}from "./components/Navbar"
import { Itemlistcontainer } from './components/Itemlistcontainer'

let detalle = {nombre:"Notebook",precio:"1.099.850",descripcion:"Notebook Gamer Lenovo Legion 5 15ACH6A WQHD 2K 15.6 R5 5600H 16GB (2x8GB) 512GB SSD NVME RX6600M 8GB W11 165Hz Silver",imagen:"https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38593_Notebook_Gamer_Lenovo_Legion_5_15ACH6A_WQHD_2K_15.6__R5_5600H_16GB__2x8GB__512GB_SSD_NVME_RX6600M_8GB_W11_165Hz_Silver_107e6074-grn.jpg" }

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <Itemlistcontainer  producto={detalle}/>
  </>,

)
