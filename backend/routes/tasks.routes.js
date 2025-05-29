const express = require('express');
const { getTasks, createTask } = require('../controllers/tasks.controller');

const router = express.Router();

// GET /tareas
router.get('/', getTasks);

// POST /tareas
router.post('/', createTask);

module.exports = router;
