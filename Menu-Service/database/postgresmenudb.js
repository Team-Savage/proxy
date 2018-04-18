const Sequelize = require('sequelize');
const sequelize = new Sequelize('menudata', 'postgres', 'postgres', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});