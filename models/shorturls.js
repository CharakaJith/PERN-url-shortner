'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShortUrls extends Model {
    static associate(models) {}
  }

  ShortUrls.init(
    {
      exposableId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      originalUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      originalUrlHost: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortUrlHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortUrlDomain: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ShortUrls',
      underscored: true,
    }
  );

  return ShortUrls;
};
