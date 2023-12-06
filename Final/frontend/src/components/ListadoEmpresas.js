import React from 'react';

const ListadoEmpresas = ({ lista }) => {
  
  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>IdEmpresa</th>
            <th>RazonSocial</th>
            <th>Rubro</th>
            <th>CantidadEmpleados</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
             <tr key={item.IdEmpresa}>
              <td>{item.IdEmpresa}</td>
              <td>{item.RazonSocial}</td>
              <td>{item.Rubro}</td>
              <td>{item.CantidadEmpleados}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoEmpresas;
