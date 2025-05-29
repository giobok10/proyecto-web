# Documentación del Proyecto

## Paso 1: Configurar MongoDB Atlas
- **Descripción**: Crea una cuenta en MongoDB Atlas, configura el acceso a la base de datos y obtén la URI de conexión.
- **Capturas de pantalla**:
  - ![Creación del clúster](./documentation/Creacion-del-cluster.png)
  - ![Configuración del usuario parte 1](./documentation/Configuracion-usuario1.png)
  - ![Configuración del usuario parte 2](./documentation/Configuracion-usuario2.png)
  - ![URI de conexión](./documentation/URI-conexion.png)

## Paso 2: Instalar y Configurar MongoDB Compass
- **Descripción**: Descarga e instala MongoDB Compass y conéctate a MongoDB Atlas.
- **Capturas de pantalla**:
  - ![Conexión exitosa en MongoDB Compass](./documentation/conexion-mongodb-compas1.png)
  - ![Conexión exitosa en MongoDB Compass](./documentation/conexion-mongodb-compas2.png)

## Paso 3: Configurar el Proyecto en VS Code
- **Descripción**: Crea un nuevo proyecto en VS Code e instala las dependencias necesarias.
- **Capturas de pantalla**:
  - ![Instalación de dependencias](./documentation/instalacion-dependencias.png)

## Paso 4: Configurar la Conexión a MongoDB
- **Descripción**: Crea el archivo `.env` y el archivo `database.js` para configurar la conexión a MongoDB.
- **Capturas de pantalla**:
  - ![Archivo .env](./documentation/env.png)
  - ![Archivo database.js](./documentation/database-js.png)

## Paso 5: Definir el Modelo de Tarea
- **Descripción**: Crea el archivo `task.model.js` para definir el modelo de tarea.
- **Capturas de pantalla**:
  - ![Archivo task.model.js](./documentation/taskmodel-js.png)

## Paso 6: Inicializar el Repositorio en GitHub
- **Descripción**: Crea un nuevo repositorio en GitHub y configura Git en tu proyecto.
- **Comandos Git**: git init
                    git add .
                    git commit -m "Initial commit: Database setup and task model"
                    git branch -M main
                    git remote add origin URL_DEL_REPOSITORIO#cambiar esto con lo del repo
                    git push -u origin main
- **Capturas de pantalla**:
  - ![Creación del repositorio en GitHub](./documentation/creacion-repositorio.png)
  - ![Actualizar repositorio en GitHub](./documentation/git-actualizar.png)

## Paso 7: Probar la Conexión y el Modelo
- **Descripción**: Crea un archivo `test.js` y ejecútalo para probar la conexión y el modelo.
- **Capturas de pantalla**:
  - ![Resultado en Terminal](./documentation/test-1.png)
  - ![Tarea en MongoDB Compass](./documentation/reflejo-test-mongo.png)

## Paso 8: Implementar el Endpoint GET `/tareas`
- **Descripción**: Implementa el endpoint para obtener todas las tareas de la base de datos.
- **Capturas de pantalla**:
  - ![Archivo tasks.controller.js](./documentation/tasks-controller-js.png)
  - ![Archivo tasks.routes.js](./documentation/tasks-routes-js.png)
  - ![Archivo app.js](./documentation/app-js.png)
  - ![Prueba con Postman](./documentation/postman-get-tareas.png)
