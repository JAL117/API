const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pruebaapi", "admin", "michi123123", {
  host: "database-1.cf8uui4k0410.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = sequelize;