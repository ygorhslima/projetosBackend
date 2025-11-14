import { Sequelize } from "sequelize";

let sequelize = new Sequelize('postapp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export {sequelize, Sequelize};