const { Pool } = require('pg');

const pool = new Pool({
    user: 'default',
    host: "ep-hidden-cherry-69366556-pooler.us-east-1.postgres.vercel-storage.com",
    database: 'verceldb',
    password: "qGha6oAfej3C",
    port: 5432,
    ssl: {rejectUnauthorized: false}
});
const listUsersQuery = `CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    lastname VARCHAR(50),
    notes TEXT
);`;

pool.query(listUsersQuery)
    .then(res => {
        console.log("Tabla creada");
        pool.end();
    })
    .catch(err => {
        console.error(err);
        pool.end();
    });