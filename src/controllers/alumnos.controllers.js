import { Alumno } from "../models/alumno.js";

export const getAlumnos = async (req, res) => {
  try {
    const Alumnos = await Alumno.findAll();
    res.json(Alumnos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await Alumno.findOne({
      where: {
        id,
      },
    });

    res.send(alumno);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, dni } = req.body;
    const alumno = await Alumno.findByPk(id);
    alumno.nombre = nombre;
    alumno.apellido = apellido;
    alumno.dni = dni;
    await alumno.save();
    res.send(alumno);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAlumno = async (req, res) => {
  const { nombre, apellido, dni, id_usuario } = req.body;
  try {
    const newAlumno = await Alumno.create({
      nombre,
      apellido,
      dni,
      id_usuario,
    });
    res.json(newAlumno);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    await Alumno.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
