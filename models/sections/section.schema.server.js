const mongoose = require('mongoose')

const sectionSchema = mongoose.Schema({
    title: String,
    courseId: Number,
    maxSeats: Number,
    availableSeats: Number,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'}]
}, {collection: 'section'});

module.exports = sectionSchema;