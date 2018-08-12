const mongoose = require('mongoose');
const userSchema = require('./user.schema.server');
const userModel = mongoose.model('UserModel', userSchema);


//CRUD functions

findAllUsers = () =>
    userModel.find();

findUserById = userId =>
    userModel.findById(userId);

findUserByCredentials = (username, password) =>
    userModel.findOne({username: username, password: password});

findUserByUsername = (username) =>
    userModel.findOne({username: username});

findUserByIdExpanded = (userId) =>
    userModel.findById(userId).populate('sections').exec();

createUser = (user) =>
    userModel.create(user);

deleteUser = (userId) =>
    userModel.remove({_id: userId});

updateUser = (userId, newUser) =>
    userModel.update({_id: userId}, {$set: newUser});

enrollStudent = (userId, sectionId) => {
    const user = findUserById(userId);
    userModel.user.sections.push(sectionId).then(() => user.save());
}


module.exports = {
    findAllUsers,
    findUserById,
    findUserByCredentials,
    findUserByUsername,
    findUserByIdExpanded,
    createUser,
    deleteUser,
    updateUser,
    enrollStudent
};