# Microservicio - FastAPI & Mongo - Comentarios

Este proyecto es un microservicio de comentarios construido con FastAPI y MongoDB.

## Requisitos

- Python 3.7+
- MongoDB
- pip (Python package installer)

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```
2. Crea un entorno virtual:
    ```sh
    python3 -m venv venv
    ```
3. Activa el entorno virtual:
   ```sh
   venv\Scripts\activate
   ```

4. Instala las dependencias:
   ```sh
   pip install -r requirements.txt
   ```
   
## Configuración

Asegúrate de que MongoDB esté corriendo en localhost en el puerto 27017. Puedes cambiar la configuración de la base de datos en el archivo db.py.

## Ejecución
Para iniciar el servidor FastAPI, ejecuta:
   ```sh
   uvicorn main:app --reload
   ```
El servidor estará disponible en http://127.0.0.1:8000.

Endpoints
Obtener todos los comentarios
- URL: /comments
- Método: GET
- Descripción: Retorna todos los comentarios.

Obtener un comentario por ID
- URL: /comments/{comment_id}
- Método: GET
- Descripción: Retorna un comentario específico por su ID.

Crear un nuevo comentario
- URL: /comments
- Método: POST
- Descripción: Crea un nuevo comentario.

Actualizar un comentario
- URL: /comments/{comment_id}
- Método: PUT
- Descripción: Actualiza un comentario existente.

Eliminar un comentario
- URL: /comments/{comment_id}
- Método: DELETE
- Descripción: Elimina un comentario por su ID.

Estructura del Proyecto
- main.py: Punto de entrada de la aplicación.
- app/docs.py: Metadatos de la API.
- app/config/db.py: Configuración de la base de datos.
- app/models/comment.py: Modelo de datos para los comentarios.
- app/schemas/comment.py: Esquemas para serializar y deserializar comentarios.
- app/routes/comments.py: Rutas de la API para manejar comentarios.