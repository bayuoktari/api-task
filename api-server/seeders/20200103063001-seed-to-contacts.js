'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      {
        name: 'John Doe',
        phone: '081237127281',
        email: 'jhon.doe@mail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Elsa Miller',
        phone: '081273654823',
        email: 'elsa.miller@mail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kelly Starlie',
        phone: '081283736123',
        email: 'kelly.starlie@mail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Billy Ellie',
        phone: '081827361721',
        email: 'billyellie@mail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}); People
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
