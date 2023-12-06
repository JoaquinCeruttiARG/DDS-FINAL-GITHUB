import React, { useForm } from 'react-hook-form';
import { useEffect, useState} from 'react';
import { playerServices } from '../services/players.services';
import ListadoPlayers from './ListadoPlayers';
import axios from 'axios';

const listaMock = [
  // {
  //   "id": 382,
  //   "fullName": "Philis Tomadoni",
  //   "email": "ptomadonial@mashable.com",
  //   "nickname": "ptomadonial",
  //   "ipAddress": "153.99.122.48",
  //   "age": 47,
  //   "avatar": "https://robohash.org/veleosperferendis.png?size=50x50&set=set1"
  // },
  // {
  //   "id": 808,
  //   "fullName": "Phillie Mourge",
  //   "email": "pmourgemf@ehow.com",
  //   "nickname": "pmourgemf",
  //   "ipAddress": "174.27.209.125",
  //   "age": 42,
  //   "avatar": "https://robohash.org/doloremquisreprehenderit.png?size=50x50&set=set1"
  // },
  // {
  //   "id": 542,
  //   "fullName": "Phillis Anscott",
  //   "email": "panscottf1@about.com",
  //   "nickname": "panscottf1",
  //   "ipAddress": "12.34.93.248",
  //   "age": 13,
  //   "avatar": "https://robohash.org/accusamusdistinctiosit.png?size=50x50&set=set1"
  // }
];

const Players = () => {
  const [lista, setLista] = useState(listaMock);

  const { register, handleSubmit } = useForm();

  const buscarPlayer = async (filtro,orden) => {
    try{
      const response = await playerServices.findPlayers(filtro, orden)
      setLista(response)

    } catch {
      alert(`Couldn't find players`)
    }
  }
  const onSubmit = (data) => {
    buscarPlayer(data.filtro, data.orden)
    console.log("Programar búsqueda y populado de la grilla");

  };

  useEffect(() => {
    const traerJugadores = async () => {
      const rdo = await axios.get("http://localhost:3001/api/players")
      setLista(rdo.data)
      return rdo.data
    }
    traerJugadores()
  }, []);

  return (
    <div className="container">
      <h1>Formulario de Búsqueda</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Filtro:</label>
              <input type="text" className="form-control" {...register('filtro')} />
            </div>
            <div className="mb-3">
              <label className="form-label">Orden:</label>
              <select className="form-select" {...register('orden')}>
                <option value="full_name">Nombre</option>
                <option value="nickname">Apodo</option>
                <option value="email">Email</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
      <ListadoPlayers lista={lista} />
    </div>
  );
};

export default Players;



/* 

AXIOS:
Axios es una biblioteca popular de JavaScript utilizada para hacer solicitudes HTTP desde el navegador o desde Node.js. 
Proporciona una forma simple y fácil de realizar solicitudes a servidores web.
Una de las razones de su popularidad es su sintaxis simple y su capacidad para manejar solicitudes tanto a nivel de 
navegador como en entornos de servidor con Node.js. Puede realizar solicitudes GET, POST, PUT, DELETE, entre otras, y 
manejar respuestas de manera eficiente.


REACT:
React es una biblioteca de JavaScript desarrollada por Facebook que se utiliza para construir interfaces 
de usuario interactivas y reactivas. Se centra en la creación de componentes reutilizables que representan 
diferentes partes de la interfaz de usuario.

*/