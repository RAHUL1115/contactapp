'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let user = [];
    for (let i = 0; i < 10; i++) {
      user.push({
        id: uuidv4(),
        username: `user${i}`,
        password: false,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      })
    }

    await queryInterface.bulkInsert('users', user, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
