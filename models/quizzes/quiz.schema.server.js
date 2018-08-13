const mongoose = require('mongoose')

const quizSchema = mongoose.Schema({
    title: String
}, {collection: 'quiz'});

module.exports = quizSchema