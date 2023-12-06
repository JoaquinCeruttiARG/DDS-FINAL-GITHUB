import {config} from "../config";
import httpService from "./http.services"

const urlResource = config.urlResourceUsuarios;

async function findUsuarios(id, nombre) {
  const resp = await httpService.get(urlResource, {
    params: {id, nombre},
  });
  return resp.data;
}

export const usuariosServices = {
    findUsuarios
};

