# Utiliza una imagen base de OpenJDK 17
FROM openjdk:17-jdk-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo JAR generado al contenedor
COPY target/post-microservice-0.0.1-SNAPSHOT.jar post-microservice.jar

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "post-microservice.jar"]
