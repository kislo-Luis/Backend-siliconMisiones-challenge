import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Alumno } from "../models/alumno.js";

export const Usuario = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    email: {
      type: DataTypes.STRING,
    },

    nickname: {
      type: DataTypes.STRING(50),
    },

    password: {
      type: DataTypes.STRING(50),
    },

    rol: {
      type: DataTypes.STRING(50),
    },
  },

  { timestamps: true }
);

Usuario.hasMany(Alumno, {
  foreignKey: "id_usuario",
  sourceKey: "id",
});

Alumno.belongsTo(Usuario, {
  foreignKey: "id_usuario",
  targetId: "id",
});
