'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promoter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Promoter.init({
    /*
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    */
    name_promoter: DataTypes.STRING,
    cnpj: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    sex: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
    username: DataTypes.STRING,
    password_promoter: DataTypes.STRING,
    contactEmail: DataTypes.STRING,
    contactPhone: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    street: DataTypes.STRING,
    number_place: DataTypes.INTEGER,
    zipCode: DataTypes.STRING,
    site: DataTypes.STRING
    // registrationDate: DataTypes.DATE,
    // token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Promoter',
  });
  return Promoter;
};

