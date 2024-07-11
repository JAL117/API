const { DataTypes } = require("sequelize");
const sequelize = require("../db.js")
const Usuario = sequelize.define('Usuario', {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports= Usuario;