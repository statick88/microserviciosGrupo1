# Microservicio de Autenticación con JWT y MongoDB

Este proyecto es un microservicio de autenticación utilizando JSON Web Tokens (JWT) y MongoDB para almacenar usuarios. Está construido con Node.js y Express.

## Requisitos

- Docker
- Node.js (versión 12 o superior)
- npm (versión 6 o superior)

## Instalación con Docker-compose

1. Asegúrate de tener Docker instalado en tu máquina. Puedes descargarlo desde [Docker](https://www.docker.com/get-started).

2. Clona este repositorio en tu máquina local:

```sh
git clone https://github.com/tu-usuario/microservicio-auth.git
cd microservicio-auth
```

3. Para iniciar el proyecto con docker-compose corremos los siguientes comandos.

```
docker-compose build
docker-compose up
```

4. Para detener el contenedor creado usamos el comando
```
docker-compose down
```


## Instalación con Node.js

### Paso 1: Configurar MongoDB con Docker

1. Asegúrate de tener Docker instalado en tu máquina. Puedes descargarlo desde [Docker](https://www.docker.com/get-started).

2. Abre una terminal y ejecuta el siguiente comando para iniciar un contenedor de MongoDB:

    ```sh
    docker run --name mongoAuthService -d -p 27017:27017 mongo
    ```

   Esto hará que MongoDB se ejecute en el puerto `27017` de tu máquina local.

### Paso 2: Clonar el Repositorio

Clona este repositorio en tu máquina local:

```sh
git clone https://github.com/tu-usuario/microservicio-auth.git
cd microservicio-auth
```

### Paso 3: Instalar Dependencias

Instala las dependencias necesarias usando npm:

```
npm install
```

### Paso 4: Ejecutar el Servidor

Inicia el servidor:

```
npm start
```

El servidor debería estar ejecutándose en http://localhost:3120.


## Uso

Puedes probar los endpoints usando Thunder Client o cualquier otra herramienta de tu elección.

### Registro
- Método: POST

- URL: http://localhost:3120/api/auth/register

- Cuerpo (JSON):

```
{
    "username": "your_username",
    "password": "your_password"
}
```


### Inicio de Sesión
- Método: POST

- URL: http://localhost:3120/api/auth/login

- Cuerpo (JSON):

```
{
    "username": "your_username",
    "password": "your_password"
}
```

### Ruta Protegida
- Método: GET

- URL: http://localhost:3120/protected

- Headers:

```
Authorization: Bearer your_jwt_token
```
Reemplaza your_jwt_token con el token que obtuviste al iniciar sesión.
