import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Curso = sequelize.define(
  "cursos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: {
      type: DataTypes.STRING,
    },

    descripcion: {
      type: DataTypes.STRING(1000),
    },

    imagen: {
      type: DataTypes.STRING(1000),
    },

    anio: {
      type: DataTypes.INTEGER,
    },

    activo: {
      type: DataTypes.BOOLEAN,
    },
  },
  { timestamps: false }
);
