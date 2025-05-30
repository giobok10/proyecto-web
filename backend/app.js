require('dotenv').config({ path: '../.env' });

const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks.routes');
const connectDB = require('./database');

// Imprimir la URI para verificar
console.log('MongoDB URI:', process.env.MONGODB_URI);

connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/tareas', tasksRouter);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
