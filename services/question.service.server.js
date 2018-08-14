module.exports = app => {

    const questionModel = require('../models/questions/question.model.server');

    findAllQuestions = (req, res) => {
        questionModel.findAllQuestions()
            .then(quizzes => res.send(quizzes))
    };

    findQuestionById = (req, res) => {
        questionModel.findQuestionById(req.params.questionId)
            .then(quiz => res.send(quiz))
    };

    createQuestion = (req, res) =>
        questionModel.createQuestion(req.body)
            .then(
                question => res.json(question),
                error => res.send(error)
            );

    updateQuestion = (req, res) =>
        questionModel.updateQuestion(req.params['questionId'], req.body)
            .then(
                question => res.json(question),
                error => res.send(error)
            );



    app.get('/api/question/', findAllQuestions);
    app.get('/api/question/:questionId', findQuestionById);
    app.post('/api/question', createQuestion);
    app.put('/api/question/:questionId', updateQuestion);

};