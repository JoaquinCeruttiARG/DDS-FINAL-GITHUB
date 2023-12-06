const urlServidor = "http://localhost:3001";

//el recurso que trae la peticiones
const urlResourceVehiculos = urlServidor + "/api/vehiculos";
const urlResourceUsuarios = urlServidor + "/api/usuarios";

//se exportan para libre uso
export const config = {
  urlResourceVehiculos,
  urlResourceUsuarios
};
