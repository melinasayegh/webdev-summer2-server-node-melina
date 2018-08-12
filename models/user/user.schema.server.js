const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    address: String,
    role: {
        type: String,
        enum : ['ADMIN','FACULTY','STUDENT'],
        default: 'STUDENT'
    },
    sections: [String]
}, {collection: 'user'});

module.exports = userSchema