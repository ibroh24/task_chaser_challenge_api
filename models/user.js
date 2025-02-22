'use strict';
const { NOW } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
     
    }
  }
  User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        onUpdate: DataTypes.NOW,
    },
},
{
    timestamps: false,
    sequelize,
    modelName: 'User',
    tableName: 'users'
});
  // sequelize.sync({ alter: true }).then(() => {
  //   console.log('table created');
  // }).catch((error) => {
  //   console.error('Unable to create table : ', error);
  // });
  return User;
};