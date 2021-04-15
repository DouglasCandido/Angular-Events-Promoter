'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comment.init({
    // id: DataTypes.INTEGER,
    comment_about_the_event: DataTypes.STRING,
    cpf_enthusiast: DataTypes.STRING,
    id_event: DataTypes.INTEGER
    // commentRegistrationDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};

