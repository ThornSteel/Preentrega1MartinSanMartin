import React from 'react'

export const Itemlistcontainer = ({producto}) => {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 offset-md-2'>
                <img src={producto.imagen} alt={producto.nombre}  className='img-fluid'/>
                </div>
                <div className='col-md-4 text-center'>
                 <h1>{producto.nombre}</h1>
                 <h5>{producto.precio}</h5>
                 <p>{producto.descripcion}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
