const express = require('express');
const { getTasks } = require('../controllers/tasks.controller');

const router = express.Router();

/**
 * @route GET /tareas
 * @description Obtiene todas las tareas
 * @access Public
 */
router.get('/', getTasks);

module.exports = router;