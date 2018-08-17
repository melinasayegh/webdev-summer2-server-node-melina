const mongoose = require('mongoose');
const submissionSchema = require('./submission.schema.server');
const submissionModel = mongoose.model('SubmissionModel', submissionSchema);

findAllSubmissions = () =>
    submissionModel.find();

findSubmissionById = (submissionId) =>
    submissionModel.findById(submissionId)
        .populate('quiz')
        .populate('student')
        .populate('answers')
        .populate('answers.question')
        .exec();

findAllSubmissionsForQuizAndStudent = (quizId, studentId) => {
    submissionModel.findOne({quiz: quizId, student: studentId})
        .populate('quiz')
        .populate('student')
        .exec();
}

findAllSubmissionsForQuiz = quizId =>
    submissionModel.find({quiz: quizId})
        .populate('quiz')
        .exec();

createSubmission = submission => {
    submissionModel.create(submission);
};

deleteSubmission = submission =>
    submissionModel.delete(submission);

updateSubmission = (submissionId, newSubmission) =>
    submissionModel.update({_id: submissionId}, {$set: newSubmission});

module.exports = {
    findAllSubmissions,
    findSubmissionById,
    findAllSubmissionsForQuizAndStudent,
    findAllSubmissionsForQuiz,
    createSubmission,
    deleteSubmission,
    updateSubmission
};