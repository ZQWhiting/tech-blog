const { Model, DataTypes } = require('sequelize');
const bycrpt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {}

module.exports = Comment;
