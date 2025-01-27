const { Sequelize } = require('sequelize')
const ConfigData = require('./env')

const sequelize = new Sequelize({
    dialect: ConfigData.db.dialect,
    username: ConfigData.db.user_name,
    password: ConfigData.db.password,
    database: ConfigData.db.db_name,
    host: ConfigData.db.host,
    port: ConfigData.db.port || 5432,
})

module.exports = sequelize;
