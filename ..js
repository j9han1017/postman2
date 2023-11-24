const { Pool } = require('pg');
const express = require('express');
const app = express();app.use(express.json());
const port = 3000;
const contraseña = 101706
const pool = new Pool({
  user: 'default',
  host: "ep-hidden-cherry-69366556-pooler.us-east-1.postgres.vercel-storage.com",
  database: 'verceldb',
  password: "qGha6oAfej3C",
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

// Middleware para verificar la API key
const verificarApiKey = (req, res, next) => {
  const apiKey = req.get('x-api-key'); // Suponiendo que la clave se pasa en el encabezado 'contraseña'

  // Verificar si la clave de API es válida (puedes implementar tu propia lógica aquí)
  if (apiKey === contraseña) {
    next(); // Continuar con la siguiente función en la cadena de middleware
  } else {
    res.status(401).send('Acceso no autorizado');
  }
};

// Aplicar el middleware a todas las rutas que requieren la API key
app.use('/students', verificarApiKey);

// Resto de tu código

app.get('/students', function (req, res) {
  const listUsersQuery = `SELECT * FROM students;`;

  pool.query(listUsersQuery)
    .then(res2 => {
      console.log("List students: ", res2.rows);
      res.send(res2.rows)
    })
    .catch(err => {
      console.error(err);
      res.send("Hubo un error")
    });
});

// Resto de tus rutas

app.listen(port, () => console.log(`The app is running`));
