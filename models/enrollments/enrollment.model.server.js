const mongoose = require('mongoose');
const enrollmentSchema = require('./enrollment.schema.server');

const enrollmentModel = mongoose.model('EnrollmentModel', enrollmentSchema);

findAllEnrollments = () =>
    enrollmentModel.find();

findAllEnrollmentsForSection = sectionId =>
    enrollmentModel.find({sectionId: sectionId});

findAllEnrollmentsForStudent = studentId =>
    enrollmentModel.find({studentId: studentId});

findAllEnrollmentByStudentAndSection = (userId, sectionId) =>
    enrollmentModel.find({studentId: studentId, sectionId: sectionId});

createEnrollment = enrollment =>
    enrollmentModel.create(enrollment);

deleteEnrollment = (studentId, sectionId) =>
    enrollmentModel.deleteOne({student: studentId, section: sectionId});


module.exports = {
    findAllEnrollments,
    findAllEnrollmentsForSection,
    findAllEnrollmentsForStudent,
    findAllEnrollmentByStudentAndSection,
    createEnrollment,
    deleteEnrollment
};