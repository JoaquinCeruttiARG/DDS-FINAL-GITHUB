import {config} from "../config";
import httpService from "./http.services"

const urlResource = config.urlResourceVehiculos;

async function findVehiculos(marca, from, to) {
  const resp = await httpService.get(urlResource, {
    params: {marca, from, to},
  });
  return resp.data;
}

export const vehiculosServices = {
    findVehiculos
};

