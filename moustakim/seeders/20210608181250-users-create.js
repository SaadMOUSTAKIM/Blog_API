'use strict';

var fakerStatic = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
    var data = [];
    for(var i=0;i<20;i++){
        data.push({
          username: fakerStatic.name.findName(),
          email: fakerStatic.internet.email(),
          password: fakerStatic.internet.password(),
          role: i==0 ? 'admin': (i%2==0 ? 'author' : 'guest'),
          createdAt: new Date(),
          updatedAt: new Date()
        });
    }
    await queryInterface.bulkInsert('Users',data,{});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
