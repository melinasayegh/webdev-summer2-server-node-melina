const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuizModel'
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    answers: [{
        question: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'QuestionModel'
        },
        essayAnswer: String,
        blanksAnswer: {
            variable: String,
            value: String
        },
        trueFalseAnswer: Boolean,
        choiceAnswer: Number
    //    answer: {
    //        type: mongoose.Schema.Types.ObjectId,
    //        ref: 'AnswerModel'
    //    }
    }],
    timestamp: Date
}, {collection: 'submission'});

module.exports = submissionSchema;