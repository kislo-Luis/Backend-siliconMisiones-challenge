import * as dotenv from "dotenv";
dotenv.config();
import Sequelize from "sequelize";
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
