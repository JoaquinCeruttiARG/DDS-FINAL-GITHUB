import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import ListadoEmpresas from './ListadoEmpresas'
import { empresasService } from '../services/empresas.service';

const Empresas = () => {
  const { register, handleSubmit } = useForm();
  
  const [lista, setLista] = useState(null);

  const onSubmit = async (data) => {
    try {
      data = await empresasService.Buscar(data.RazonSocial, data.Rubro)
      setLista(data);
      console.log(data)

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
     <h1>Empresas</h1>
     <hr />
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">RazonSocial:</label>
              <input type="text" className="form-control" {...register('RazonSocial')} />
            </div>
            <div className="mb-3">
              <label className="form-label">Rubro:</label>
              <input type="text" className="form-control" {...register('Rubro')} />
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
      {lista && <ListadoEmpresas lista={lista} />}
    </div>
  );
};

export default Empresas;
