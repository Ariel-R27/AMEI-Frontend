# Usamos la imagen de Node.js para construir la aplicación
FROM node:20 AS build

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el código fuente
COPY . .

# Creamos la versión de producción de la app Angular
RUN npm run build --prod

# Usamos la imagen base de Node.js para ejecutar la aplicación
FROM node:20

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos los archivos construidos desde la etapa anterior
COPY --from=build /app/dist/EM-Frontend/browser /app

# Exponemos el puerto donde la aplicación estará disponible
EXPOSE 4200

# Comando para ejecutar la aplicación con un servidor HTTP en Node.js
CMD ["npx", "http-server", ".", "-p", "4200"]