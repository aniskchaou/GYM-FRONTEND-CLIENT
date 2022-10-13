

module.exports = {
    HOST: "ec2-54-173-237-110.compute-1.amazonaws.com",
    USER: "gxgahtybckmeku",
    PASSWORD: "c3a0d1445a105a706a252614cfc3d26e38b73ade70820fb781b0b10978842358",
    DB: "d6g3qlmfc7p7q9",
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
