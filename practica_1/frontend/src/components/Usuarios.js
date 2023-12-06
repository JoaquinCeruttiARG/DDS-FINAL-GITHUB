import React, { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { usuariosServices } from '../services/usuario.service.js';
import ListadoUsuarios from './ListadoUsuarios';

const listaMock = [
    {
      "id": 1,
      "nombre": "Alice"
    },
    {
      "id": 2,
      "nombre": "Bob"
    },
    {
      "id": 3,
      "nombre": "Charlie"
    },
    {
      "id": 4,
      "nombre": "David"
    },
    {
      "id": 5,
      "nombre": "Eva"
    },
    {
      "id": 6,
      "nombre": "Frank"
    },
    {
      "id": 7,
      "nombre": "Gina"
    },
    {
      "id": 8,
      "nombre": "Hector"
    },
    {
      "id": 9,
      "nombre": "Irene"
    },
    {
      "id": 10,
      "nombre": "Jack"
    }
  ];



const Players = () => {
  const [lista, setLista] = useState(listaMock);

  const { register, handleSubmit } = useForm();
  const buscarUsuario = async (id, nombre) => {
    try{
      if (id !== "" && nombre !== ""){
      const response = await usuariosServices.findUsuarios(id, nombre)
      setLista(response)
      } else{
        alert(`Debe indicar id y nombre!`)
      }
    } catch {
      alert(`NO se pudieron encontrar los usuarios`)
    }
  }

useEffect(() =>{ 
  const traerUsuarios= async () => {
    const rdo = await usuariosServices.findUsuarios()
    setLista(rdo)
  }
  traerUsuarios()
}, [])

  const onSubmit = (data) => {
      console.log("Programar búsqueda y populado de la grilla");
      console.log(data)
      buscarUsuario(data.id, data.nombre)
  };

  return (
    <div className="container">
      <h3>Formulario de Búsqueda</h3>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3" style={ { display: 'flex' } }>
              <div style={ { flex: 1, 'margin-right': '20px' } }>
                <label className="form-label">ID</label>
                <input type="text" placeholder='id...' className="form-control" {...register('id')} />
              </div>
              <div style={ { flex: 1 } }>
                <label className="form-label">Nombre:</label>
                <input type="text" placeholder='Nombre...' className="form-control" {...register('nombre')} />
              </div>
            </div> 
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
          </form>
        </div>
      </div>
      <ListadoUsuarios lista={lista} />
    </div>
  );
};

export default Players;
