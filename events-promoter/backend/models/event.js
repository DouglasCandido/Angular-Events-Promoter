'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Event.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cnpj_promoter: DataTypes.STRING,
    name_event: DataTypes.STRING,
    description_event: DataTypes.STRING,
    theme: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    street: DataTypes.STRING,
    number_place: DataTypes.INTEGER,
    zipCode: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    site: DataTypes.STRING,
    eventDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};




