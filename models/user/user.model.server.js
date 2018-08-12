const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');
const userModel = mongoose.model('UserModel', userSchema);


//CRUD functions

findAllUsers = () =>
    userModel.find();

findUserById = userId =>
    userModel.findOne({_id: userId});

findUserByCredentials = (username, password) =>
    userModel.findOne({username: username, password: password});

findUserByUsername = (username) =>
    userModel.findOne({username: username});

createUser = (user) =>
    userModel.create(user);

deleteUser = (userId) =>
    userModel.remove({_id: userId});

updateUser = (userId, newUser) =>
    userModel.update({_id: userId}, {$set: newUser});

module.exports = {
    findAllUsers,
    findUserById,
    findUserByCredentials,
    findUserByUsername,
    createUser,
    deleteUser,
    updateUser
};