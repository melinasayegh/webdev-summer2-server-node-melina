const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    title: String,
    points: Number,
    description: String,
    questionType: {
        type: String,
        enum: [
            'ESSAY', 'FILL_BLANKS', 'TRUE_FALSE', 'MULTIPLE_CHOICE'
        ]
    },
    // if essay:
    essay: String,
    // if fill in the blanks:
    blanks: [String],
    // if true false:
    true: Boolean,
    // if multiple choice:
    choices: [{
        text: String,
        value: String,
        correct: Boolean
    }]
}, {collection: 'question'});
module.exports = questionSchema;