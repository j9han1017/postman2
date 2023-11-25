const swaggerJsdoc = require('swagger-jsdoc');

// Configuración de Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Estudiantes',
      version: '1.0.0',
      description: 'Una API para gestionar estudiantes.',
    },
  },
  apis: ['expressFinal.js'], // Ruta al archivo principal de tu aplicación
};

const specs = swaggerJsdoc(options);

module.exports = specs;

  