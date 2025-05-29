const Task = require('../models/task.model');

/**
 * Obtiene todas las tareas de la base de datos.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 */
exports.getTasks = async (req, res) => {
  try {
    // Obtener todas las tareas de la base de datos
    const tasks = await Task.find();
    // Enviar las tareas como respuesta
    res.status(200).json(tasks);
  } catch (error) {
    // Manejar cualquier error que ocurra durante el proceso
    console.error('Error al obtener las tareas:', error);
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};