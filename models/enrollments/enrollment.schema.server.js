const mongoose = require('mongoose');

const enrollmentSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SectionModel'
    },
    grade: String
}, {collection: 'enrollments'});

module.exports = enrollmentSchema;