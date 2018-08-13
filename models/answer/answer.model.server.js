const mongoose = require('mongoose');
const answerSchema = require('./answer.schema.server');
const answerModel = mongoose.model('AnswerModel', answerSchema);

findAllAnswers = () =>
    answerModel.find();

findAnswerById = answerId =>
    answerModel.findById(answerId);

createAnswer = answer =>
    answerModel.create(answer);

deleteAnswer = answerId =>
    answerModel.delete({_id: answerId});

updateAnswer = (answerId, newAnswer) =>
    answerModel.update({_id: answerId}, {$set: newAnswer});

module.exports = {
    findAllAnswers,
    findAnswerById,
    createAnswer,
    deleteAnswer,
    updateAnswer
};