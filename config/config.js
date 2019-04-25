const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    port: process.env.port,
    database: `${process.env.database_host}:${process.env.database_port}/${process.env.database_name}`
};