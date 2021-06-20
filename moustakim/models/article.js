'use strict';
const { unique } = require('faker');
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      Article.belongsTo(models.User,{foreignKey: 'userId'})//relation 1n
      Article.hasMany(models.Comment,{foreignKey: 'articleId'})//relation 1n
      Article.belongsToMany(models.Tag, {through: 'ArticleTags'})//relation nn
    }
  };
  Article.init({
    title: {
     type: DataTypes.STRING,
     unique:true
    }
      ,
    content: DataTypes.TEXT,
    published: {
      type:DataTypes.BOOLEAN,
      defaultValue:true
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};