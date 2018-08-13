const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    title: String,
    points: Number,
    description: String,

    // if essay, no added variable

    // if fill in the blanks
    blanks: [String],

    // if true false
    true: Boolean,

    // if multiple choice
    choices: [{
        text: String,
        value: String,
        correct: Boolean
    }],

    questionType: {
        type: String,
        enum: [
            'ESSAY',
            'FILL_BLANKS',
            'TRUE_FALSE',
            'MULTIPLE_CHOICE'
        ]
    }
}, {collection: 'question'});

module.exports = questionSchema;