import {config} from "../config";
import httpService from "./http.services"

const urlResource = config.urlResourcePlayers;

async function findPlayers(filtro, orden) {
  const resp = await httpService.get(urlResource, {
    params: {filtro, orden},
  });
  return resp.data;
}

export const playerServices = {
    findPlayers
};
