const mongoose = require('mongoose');
const enrollmentSchema = require('./enrollment.schema.server');

const enrollmentModel = mongoose.model('EnrollmentModel', enrollmentSchema);

findAllEnrollments = () =>
    enrollmentModel.find();

findAllEnrollmentsForSection = sectionId =>
    enrollmentModel.find({section: sectionId});

findAllSectionsForStudent = studentId =>
    enrollmentModel.find({student: studentId})
        .populate('section')
        .exec();

findAllEnrollmentByStudentAndSection = (userId, sectionId) =>
    enrollmentModel.find({student: studentId, section: sectionId});

createEnrollment = enrollment =>
    enrollmentModel.create(enrollment);

deleteEnrollment = (studentId, sectionId) =>
    enrollmentModel.deleteOne({student: studentId, section: sectionId});

updateEnrollment = (enrollmentId, newEnrollment) =>
    enrollmentModel.update({_id: enrollmentId}, {$set: newEnrollment});

module.exports = {
    findAllEnrollments,
    findAllEnrollmentsForSection,
    findAllSectionsForStudent,
    findAllEnrollmentByStudentAndSection,
    createEnrollment,
    deleteEnrollment,
    updateEnrollment
};