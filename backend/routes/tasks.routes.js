const express = require('express');
const { getTasks, createTask, updateTask } = require('../controllers/tasks.controller');

const router = express.Router();

// GET /tareas
router.get('/', getTasks);

// POST /tareas
router.post('/', createTask);

// PUT /tareas/:id
router.put('/:id', updateTask);

module.exports = router;
