

module.exports = {
    HOST: "ec2-54-208-104-27.compute-1.amazonaws.com",
    USER: "lofwdfzefiopcu",
    PASSWORD: "6e3c3405612222f334ba183de4f3256e223e1f9877266fc21b453e0186318116",
    DB: "desbd65qfb62k",
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
