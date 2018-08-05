module.exports = () =>  {
    const mongoose = require('mongoose');
    const databaseName = 'course-manager';
    var connectionString = 'mongodb://localhost/';
    connectionString += databaseName;
    mongoose.connect(connectionString);
}