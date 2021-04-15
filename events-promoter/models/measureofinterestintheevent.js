'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class measureOfInterestInTheEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  measureOfInterestInTheEvent.init({
    // id: DataTypes.INTEGER,
    id_event: DataTypes.INTEGER,
    numberOfEnthusiastsWhoDeclaredInterestInAttending: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'measureOfInterestInTheEvent',
  });
  return measureOfInterestInTheEvent;
};

