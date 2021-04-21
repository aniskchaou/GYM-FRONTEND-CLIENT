

module.exports = {
    HOST: "ec2-34-236-215-156.compute-1.amazonaws.com",
    USER: "chbyiyvpixlzez",
    PASSWORD: "5b961ee894b0d83e8254d99a023484edb893aac3ec1d10f1bbdb67d0d5e69713",
    DB: "d44nd3kpidbi5r",
    dialect: "postgres",
    port: 5432,
    native: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};