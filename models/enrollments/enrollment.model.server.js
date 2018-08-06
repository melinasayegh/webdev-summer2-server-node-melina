const mongoose = require('mongoose');
const enrollmentSchema = require('./enrollment.schema.server');

const enrollmentModel = mongoose.model('EnrollmentModel', enrollmentSchema);
const userModel = require('../user/user.model.server');
const sectionModel = require('../sections/section.model.server');

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


module.exports = {
    findAllEnrollments,
    findAllEnrollmentsForSection,
    findAllEnrollmentsForStudent,
    findAllEnrollmentByStudentAndSection,
    createEnrollment
};