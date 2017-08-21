"use strict";

module.exports ={

  // logic for transforming into the new state
  up: function(queryInterface, Sequelize){

    //new table
    return queryInterface.createTable("devourers", {
      //columns
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      devourer_name: {
        type: Sequelize.STRING
      },
      burgerId:{
        type:Sequelize.INTEGER,
        references: {
          model: "burgers",
          key: "id"
        },

        //how they will stack up once created or deleted (dynamic)
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      createdAt: {
        allowNull:false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

    });
  },

  // logic for reverting the changes
  down: function(queryInterface,Sequelize){
    return queryInterface.dropTable("devourers");
  }


};
