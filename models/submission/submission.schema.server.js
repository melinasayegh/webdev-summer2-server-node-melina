const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuizModel'
    },
    answers: [{
        fillBlanksAnswers: {
            variable: String,
            value: String
        },
        multipleChoiceAnswer: Number,
        trueFalseAnswer: Boolean,
        essayAnswer: String,
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'QuestionModel'
        }
    }]
}, {collection: 'submission'});
module.exports = submissionSchema;