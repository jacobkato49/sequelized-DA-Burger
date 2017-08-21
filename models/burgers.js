"use strict";

module.exports= function(sequelize, DataTypes){
  var burgers= sequelize.define("burgers",{
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    devourerId: DataTypes.INTEGER
  },{
    classMethods: {
      associate: function(models){

        //each of the burger has one and only one devourers associated with it
        burgers.hasOne(models.devourers) /**make sure the key is stored on the devourer**/
      }
    }
  });
  return burgers;
}
