import {config} from '../config'
import httpService from './http.service'

const urlResource = config.urlResourceEmpresas

async function Buscar(RazonSocial, Rubro){
    try{
        const response = await httpService.get(urlResource, {
            params: { RazonSocial, Rubro},
        });

        return response.data;

    }catch(error){
        console.error('Error al realizar la búsqueda:', error.message);
        throw error; 


    }
}

export const empresasService = {
    Buscar,
};
