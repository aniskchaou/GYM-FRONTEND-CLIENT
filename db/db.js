const { Client } = require('pg');

/* const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'gym',
    password: 'admin',
    port: 5432,
}); */
const client = new Client({
    user: 'chbyiyvpixlzez',
    host: 'ec2-34-236-215-156.compute-1.amazonaws.com',
    database: 'd44nd3kpidbi5r',
    password: '5b961ee894b0d83e8254d99a023484edb893aac3ec1d10f1bbdb67d0d5e69713',
    port: 5432,
});
/*
client.connect();

const queryCreateDb = `
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    email varchar,
    firstname varchar,
    mobile varchar,
    city varchar
);
`;

client
    .query(queryCreateDb)
    .then(res => {
        console.log('Table is successfully created');
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        initDb()
      
    });

function initDb()
{
    queryInsertDb=`INSERT INTO employees (email, firstname,mobile,city)
    VALUES ('jerry@example.com','Jerry','0768759898','Lyon'),('george@example.com','George','0665876','Paris');`;
        client.query(queryInsertDb).catch(err => {
            console.error(err);
        });
}    
*/
module.exports = client;    
