module.exports = app => {

    const submissionModel = require('../models/submission/submission.model.server');

    findAllSubmissions = (req, res) => {
        submissionModel.findAllSubmissions()
            .then(quizzes => res.send(quizzes))
    };

    findSubmissionsForQuiz = (req, res) => {
        const quizId = parseInt(req.params['quizId']);
        submissionModel.findAllSubmissionsForQuiz(quizId)
            .then(quizzes => res.send(quizzes))
    };

    findSubmissionsForQuizAndStudent = (req, res) => {
        let studentId = req.session['currentUser'];
        const quizId = req.params['quizId'];
        submissionModel.findAllSubmissionsForQuizAndStudent(quizId, studentId)
            .then(quizzes => res.send(quizzes))
    };

    findSubmissionById = (req, res) => {
        submissionModel.findSubmissionById(req.params.sid)
            .then(quiz => res.send(quiz))
    };

    createSubmission = (req, res) => {
        let submission = req.body;
        let studentId = req.session['currentUser'];
        let newSubmission = {
            quiz: submission.quiz,
            student: studentId,
            answers: submission.answers,
            timestamp: submission.timestamp
        };
        submissionModel.createSubmission(newSubmission)
            .then(quiz => res.send(quiz))
    };

    updateSubmission = (req, res) => {
        submissionModel.updateSubmission(req.params.sid, req.body)
            .then(status => res.send(status))
    };

    deleteSubmission = (req, res) => {
        submissionModel.deleteSubmission(req.params.sid)
            .then(status => res.send(status))
    };

    submitQuiz = (req, res) => {
        let currentUser = req.session['currentUser'];
        let quiz = req.body;
        submissionModel.createSubmission(quiz, currentUser)
            .then(quiz => res.send(quiz));

    };

    app.post('/api/submission', createSubmission);
    app.get('/api/submission', findAllSubmissions);
    app.post('/api/quiz/:quizId/submission', submitQuiz);
    app.get('/api/quiz/:quizId/submission', findAllSubmissionsForQuiz);
    app.get('/api/quiz/:quizId/submission/student', findAllSubmissionsForQuizAndStudent);
    app.get('/api/submission/:sid', findSubmissionById);
    app.put('/api/submission/:sid', updateSubmission);
    app.delete('/api/submission/:sid', deleteSubmission);
};