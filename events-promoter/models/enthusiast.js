'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enthusiast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Enthusiast.init({
    // id: DataTypes.INTEGER,
    name_enthusiast: DataTypes.STRING,
    cpf: DataTypes.STRING,
    sex: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    username: DataTypes.STRING,
    password_enthusiast: DataTypes.STRING,
    contactEmail: DataTypes.STRING,
    contactPhone: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    street: DataTypes.STRING,
    number_place: DataTypes.INTEGER,
    zipCode: DataTypes.STRING,
    // registrationDate: DataTypes.DATE,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enthusiast',
  });
  return Enthusiast;
};

