'use strict';
const {
  Model
} = require('sequelize');
const {hashPass} = require(`../helpers/bcrypt`)

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static generateForm(data) {
      let obj = {
        email: data.email,
        password: data.password
      }

      return obj
    }
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          args: true,
          msg: `Email is required!`
        },
        notEmpty: {
          args: true,
          msg: `Email can't be empty!`
        },
        isEmail: {
          args: true,
          msg: `Email must be in this format 'youremail@example.com'.`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Password is required!`
        },
        notEmpty: {
          args: true,
          msg: `Password can't be empty!`
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = hashPass(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};