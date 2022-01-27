const mongoose = require('mongoose');
const Sequelize = require("sequelize");
const { ClickHouse } = require('clickhouse');

const {pg,mg,ch} = require("../config/db.config.js");

var isProduction = process.env.NODE_ENV === 'production';


const sequelize = new Sequelize(pg.DB, pg.USER, pg.PASSWORD, {
  host: pg.HOST,
  port: pg.PORT,
  dialect: pg.dialect,
  operatorsAliases: false,
  logging: !isProduction,
  pool: {
    max: pg.pool.max,
    min: pg.pool.min,
    acquire: pg.pool.acquire,
    idle: pg.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.affairs_fields = require("./affairs_fields.model.js")();

// `mongodb://${mg.USER}:${mg.PASSWORD}@${mg.HOST}:${mg.PORT}/${mg.DB}`
db.mongoose = mongoose.connect('mongodb://localhost:4017/nabu_app');

if(!isProduction){
  db.mongoose.set('debug', true);
}


db.user =  require('./User');
db.article =  require('./Article');
db.comment =  require('./Comment');


db.ClickHouse = ClickHouse;
db.clickhouse =  new ClickHouse(ch);

module.exports = db;
