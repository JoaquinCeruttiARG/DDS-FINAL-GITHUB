import React from 'react';

const ListadoPlayers = ({ lista }) => {
  
  console.log(lista);
  console.log(typeof lista);
  return (
    <div className="container mt-3">
      <h3>Jugadores</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            
            <th>Número</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Apodo</th>
            <th>IpAddress</th>
            <th>Edad</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
        {lista && lista.map((jugador)=> {
          return (
            <>
            <tr key={jugador.id}>
            <td>{jugador.id}</td>
            <td>{jugador.full_name}</td>
            <td>{jugador.email}</td>
            <td>{jugador.nickname}</td>
            <td>{jugador.ip_address}</td>
            <td>{jugador.age}</td>
            <td><img src={jugador.avatar} alt="Not found" style={{ width: '40px', height: '40px' }}></img></td>
            </tr>  
            </>
          )
        })}
          
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPlayers;
