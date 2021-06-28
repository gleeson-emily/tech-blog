const User = require('../models/User.js')


const userData = [
    {
        "name": "ILoveCoding",
        "email": "coding25@coding.com",
        "password": "CODECODECODE"
    },
    {
        "name": "CodeGuy",
        "email": "codeguy@code.com",
        "password": "CodeGuyRockssssss"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;