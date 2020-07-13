'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Password extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
  };
  Password.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Name is required!`
        },
        notEmpty: {
          args: true,
          msg: `Name can't be empty!`
        }
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `URL is required!`
        },
        notEmpty: {
          args: true,
          msg: `URL can't be empty!`
        },
        isUrl: {
          args: true,
          msg: `URL must be in URL format!`
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
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: `Username/Email is required!`
        },
        notEmpty: {
          args: true,
          msg: `Username/Email can't be empty!`
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Password',
  });
  return Password;
};