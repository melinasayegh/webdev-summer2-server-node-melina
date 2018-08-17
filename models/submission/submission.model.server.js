const mongoose = require('mongoose');
const submissionSchema = require('./submission.schema.server');
const submissionModel = mongoose.model('SubmissionModel', submissionSchema);

findAllSubmissions = () =>
    submissionModel.find();

findSubmissionById = (submissionId) =>
    submissionModel.findById(submissionId);

findAllSubmissionsForQuizAndStudent = (quizId, studentId) => {
    return submissionModel.find({quiz: quizId, student: studentId});
}

findAllSubmissionsForQuiz = quizId =>
    submissionModel.find({quiz: quizId});

createSubmission = submission => {
    return submissionModel.create(submission);
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