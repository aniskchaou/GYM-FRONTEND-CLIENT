

module.exports = {
    HOST: "ec2-52-4-87-74.compute-1.amazonaws.com",
    USER: "ejfxcyzjjxneud",
    PASSWORD: "ef0cf8ac6f12f6ed4ead19e35a6f1f88a3e3e1e4e60d213f30e035ba9e538d4d",
    DB: "dcs6tuuaplp5pd",
    dialect: "postgres",
    port: 5432,
    native: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
