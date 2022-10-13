const { Client } = require('pg');

const client = new Client({
    user: 'chbyiyvpixlzez',
    host: 'ec2-34-236-215-156.compute-1.amazonaws.com',
    database: 'd44nd3kpidbi5r',
    password: '5b961ee894b0d83e8254d99a023484edb893aac3ec1d10f1bbdb67d0d5e69713',
    port: 5432,
});

module.exports = client;    
