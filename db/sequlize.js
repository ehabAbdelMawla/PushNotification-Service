const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './DB/database.sqlite'
});

module.exports.sequelize = sequelize;