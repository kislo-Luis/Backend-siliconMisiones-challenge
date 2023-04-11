import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Alumno = sequelize.define(
  "alumnos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: {
      type: DataTypes.STRING,
    },

    apellido: {
      type: DataTypes.STRING,
    },

    dni: {
      type: DataTypes.STRING(10),
    },
  },
  { timestamps: false }
);
