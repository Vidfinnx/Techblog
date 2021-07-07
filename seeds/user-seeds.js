const { User } = require('../models');

const testUsers = [{
        username: 'Veikko',
        password: '123456'

    },
    {
        username: 'Blanka',
        password: 'Electric1'
    },
    {
        username: 'Ryu',
        password: 'Thestrongest'
    },
    {
        username: 'Ken',
        password: 'Dragonpunch'
    }
];

const seedUsers = () => User.bulkCreate(testUsers);

module.exports = seedUsers;