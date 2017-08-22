"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {

    // Add seeded burgers to database (note that the date needs to be manually added here)
    return queryInterface.bulkInsert("burgers", [
      {burger_name: "BoomShakalaka", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Whooper", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Triple Stack", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Bacon Western Cheeseburger", devoured: false, createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: function (queryInterface, Sequelize) {

    // Remove the seeded burgers (note the: "{truncate: true}", which resets the primary keys)
    return queryInterface.bulkDelete("burgers", null, {truncate : true});

  }

};
