"use strict";

module.exports = function(sequelize, DataTypes){
  var devourers = sequelize.define("devourers",{
    devourer_name: DataTypes.STRING,
    burgerId: DataTypes.INTEGER
  },{
    classMethods:{
      associate: function(models){
      //might not need this
      }
    }
  });
  return devourers;

};
