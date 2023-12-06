// acceder a la base usando aa-sqlite
const db = require("aa-sqlite");

async function CrearBaseSiNoExiste() {

  // abrir base, si no existe el archivo/base lo crea
  await db.open(process.env.base);

  let existe = false;
  let res = null;
  existe = false;

  sql =
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'empresas'";
  res = await db.get(sql, []);
  if (res.contar > 0) existe = true;
  if (!existe) {
    await db.run(
      `CREATE TABLE empresas (
        IdEmpresa INTEGER PRIMARY KEY,
        RazonSocial TEXT,
        Rubro TEXT,
        CantidadEmpleados INTEGER
      );`
    );
    console.log("tabla empresas creada!");

    await db.run(
      `INSERT INTO empresas (IdEmpresa, RazonSocial, Rubro, CantidadEmpleados) VALUES
        (1, 'YPF S.A.', 'Energía', 22400),
        (2, 'Techint Group', 'Construcción', 100000),
        (3, 'Arcor S.A.I.C.', 'Alimentos', 20000),
        (4, 'MercadoLibre', 'Tecnología', 15000),
        (5, 'Grupo Clarín', 'Medios de comunicación', 9000),
        (6, 'Telecom Argentina', 'Telecomunicaciones', 16000),
        (7, 'YPF Luz', 'Energía', 300),
        (8, 'Globant', 'Tecnología', 15000),
        (9, 'Banco Santander Río', 'Servicios financieros', 7000),
        (10, 'Grupo Supervielle', 'Servicios financieros', 3500),
        (11, 'Banco Macro', 'Servicios financieros', 6000),
        (12, 'Despegar.com', 'Turismo y viajes', 4000),
        (13, 'IRSA Propiedades Comerciales', 'Bienes raíces', 5000),
        (14, 'Loma Negra C.I.A.S.A.', 'Construcción', 3800),
        (15, 'Molinos Río de la Plata', 'Alimentos', 4500),
        (16, 'Tenaris', 'Industria', 20000),
        (17, 'Pampa Energía', 'Energía', 4000),
        (18, 'Supercanal', 'Telecomunicaciones', 600),
        (19, 'Grupo Roggio', 'Servicios', 10000),
        (20, 'Siderar', 'Industria', 6000);`
    );
  }

  // cerrar la base
  db.close();
}

CrearBaseSiNoExiste();

module.exports =  CrearBaseSiNoExiste;
