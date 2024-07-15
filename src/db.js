const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pruebaapi", "admin", "lolitaayala", {
  host: "pruebaapi.ccevjhrbihxq.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = sequelize;
