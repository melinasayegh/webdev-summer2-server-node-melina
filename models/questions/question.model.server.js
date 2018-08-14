const mongoose = require('mongoose');
const questionSchema = require('./question.schema.server');
const questionModel = mongoose.model('QuestionModel', questionSchema);

findAllQuestions = () =>
    questionModel.find();

findQuestionById = questionId =>
    questionModel.findById(questionId);

createQuestion = question =>
    questionModel.create(question);

updateQuestion = (questionId, newQuestion) =>
    questionModel.update({_id: questionId}, {$set: newQuestion});

deleteQuestion = questionId =>
    questionModel.remove({_id: questionId});

module.exports = {
    findAllQuestions,
    findQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion
};