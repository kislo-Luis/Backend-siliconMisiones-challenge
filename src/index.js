import * as dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { sequelize } from "./database/database.js";
// import {Usuario} from './models/usuario.js';
// import bcrypt from  'bcrypt';

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.PORT);
   // Crear un usuario de prueba

   // si 

// Usuario.create({
//   email: 'docente@docente.com',
//   nickname: 'docente@docente.com',
//   password: bcrypt.hashSync('password123', 10),
//   rol: 'docente',
// });
    console.log("server run on port " + process.env.PORT);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
main();
