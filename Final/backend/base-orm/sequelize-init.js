// configurar ORM sequelize
const { Sequelize, DataTypes } = require("sequelize");
//const sequelize = new Sequelize("sqlite:" + process.env.base );
const sequelize = new Sequelize("sqlite:" + process.env.base);

const articulos = sequelize.define(
  "articulos",
  {
    IdArticulo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nombre es requerido",
        },
        len: {
          args: [5, 60],
          msg: "Nombre debe ser tipo carateres, entre 5 y 60 de longitud",
        },
      },
      unique: {
        args: true,
        msg: "este Nombre ya existe en la tabla!",
      },
    },
    Precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Precio es requerido",
        }
      }
    },
    CodigoDeBarra: {
      type: DataTypes.STRING(13),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Codigo De Barra es requerido",
        },
        is: {
          args: ["^[0-9]{13}$", "i"],
          msg: "Codigo de Barra debe ser numerico de 13 digitos",
        },
      },
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Stock es requerido",
        }
      }
    },
    FechaAlta: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Fecha Alta es requerido",
        }
      }
    },
    Activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Activo es requerido",
        }
      }
    },
  }
);

const empresas = sequelize.define(
  "empresas",
  {
    IdEmpresa: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    RazonSocial: {
      type: DataTypes.STRING,
    },
    Rubro: {
      type: DataTypes.STRING,
    },
    CantidadEmpleados: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'empresas',
    timestamps: false
});


module.exports = {
  sequelize,
  articulos,
  empresas,
};
