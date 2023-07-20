import { Usuario } from "../models/usuario.js";
//import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  //let password = bcrypt.hashSync((req.body.password), 10);
  console.log("body", req);
  
  const { email, nickname, password, rol } = req.body;

  try {
    // Buscar el usuario por nickname en la base de datos
    const usuario = await Usuario.findOne({
      where: {
        nickname,
        password,
      },

    });

    // Si el usuario no existe, devolver un error
    // if (!usuario) {
    //   console.log('entre a no hay usuarios')
    //   return res.status(401).json({
    //     mensaje: "Usuario o contraseña incorrectos",
    //   });
    // }

    // // Si el usuario existe, comparar la contraseña
    // //const esPasswordValida = bcrypt.compareSync(password, Usuario.password);

    // if(!password==Usuario.password){
    //   // Si la contraseña no es válida, devolver un error
    //   return res.status(401).json({
    //     mensaje: "Usuario o contraseña incorrectos",
    //   });
    // }
    const token = jwt.sign(
      {
        nickname: usuario.nickname,
        email:usuario.email,
        rol: usuario.rol,     
      },
      "secreto",
      { expiresIn: 60 }
    );
    res.json({
      token,
    });
    console.log(token)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
