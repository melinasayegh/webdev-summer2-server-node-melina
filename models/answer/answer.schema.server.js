const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    },
    trueFalseAnswer: Boolean,
    multipleChoiceAnswer: Number,
    fillBlanksAnswers: [String],
    essayAnswer: String
}, {collection: 'answer'});

module.exports = answerSchema;