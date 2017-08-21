"use strict";

//module
module.exports ={
  // logic for transforming into the new state
  up: function(queryInterface, Sequelize){

    //creating the table (burgers)
    return queryInterface.createTable("burgers",{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      burger_name: {
        type: Sequelize.STRING
      },
      devoured: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull:false,
        type: Sequelize.DATE
      },
      updatedAT:{
        allowNull: false,
        type: Sequelize.DATE
      }

    });
  },
  // logic for reverting the changes
  down: function(queryInterface, Sequelize){
    return queryInterface.dropTable("burgers");
  }
};
