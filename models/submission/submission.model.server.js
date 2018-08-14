const mongoose = require('mongoose');
const submissionSchema = require('submission.schema.server');
const submissionModel = mongoose.model('SubmissionModel', submissionSchema);

findAllSubmissions = () =>
    submissionModel.find();

findSubmissionById = (submissionId) =>
    submissionModel.findById(submissionId)
        .populate('answers')
        .populate('answers.question')
        .exec();

findAllSubmissionsForStudent = studentId =>
    submissionModel.find({student: studentId});

findAllSubmissionsForQuiz = quizId =>
    submissionModel.find({quiz: quizId});

createSubmission = submission =>
    submissionModel.create(submission);

deleteSubmission = submission =>
    submissionModel.delete(submission);

updateSubmission = (submissionId, newSubmission) =>
    submissionModel.update({_id: submissionId}, {$set: newSubmission});

module.exports = {
    findAllSubmissions,
    findSubmissionById,
    findAllSubmissionsForStudent,
    findAllSubmissionsForQuiz,
    createSubmission,
    deleteSubmission,
    updateSubmission
};