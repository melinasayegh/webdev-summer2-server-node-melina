const mongoose = require('mongoose');
const answerSchema = mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    },
    trueFalseAnswer: Boolean,
    multipleChoiceAnswer: Number,
    fillBlanksAnswers: {
        variable: String,
        value: String
    },
    essayAnswer: String
}, {collection: 'answer'});
module.exports = answerSchema;