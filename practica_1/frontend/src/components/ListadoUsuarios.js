import React from 'react';

const ListadoUsuarios = ({ lista }) => {

  return (
    <div className="container mt-3">
      <h3>Listado de Usuarios</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          { lista !== undefined && lista.length > 0 ?
            lista.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
              </tr>
            )) :
            <tr key={'0'}>
                <td></td>
                <td></td>
            </tr>  
        }
        </tbody>
      </table>
    </div>
  );
};

export default ListadoUsuarios;
