const Task = require('../models/task.model');

// Función para obtener tareas
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};

// Función para crear una tarea
exports.createTask = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ error: 'El título es obligatorio' });
    }

    const newTask = new Task({
      title: req.body.title,
      description: req.body.description || '',
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};
