const { Model, DataTypes } = require('sequelize');
const bycrpt = require('bcrypt');
const sequelize = require('../config/connection');

class Post extends Model {}


module.exports = Post