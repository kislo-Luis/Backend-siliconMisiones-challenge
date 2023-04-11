import { Curso } from "../models/curso.js";

export const getCursos = async (req, res) => {
  try {
    const Cursos = await Curso.findAll();
    res.json(Cursos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const curso = await Curso.findOne({
      where: { id },
    });
    res.send(curso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCurso = async (req, res) => {
  const { nombre, descripcion, imagen, anio, activo } = req.body;
  try {
    const newCurso = await Curso.create({
      nombre,
      descripcion,
      imagen,
      anio,
      activo,
    });
    res.json(newCurso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCurso = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, imagen, anio, activo } = req.body;
    const curso = await Curso.findByPk(id);
    curso.nombre = nombre;
    curso.descripcion = descripcion;
    curso.imagen = imagen;
    curso.anio = anio;
    curso.activo = activo;
    await curso.save();
    res.send(curso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCurso = async (req, res) => {
  try {
    const { id } = req.params;
    await Curso.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
