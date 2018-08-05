require('./db')();

const userModel = require('../models/user/user.model.server');

userModel.find((err, users) => {
    console.log(users);
});
