module.exports = app => {

    const userModel = require('../models/user/user.model.server');
    const sectionModel = require('../models/sections/section.model.server');
    const enrollmentModel = require('../models/enrollments/enrollment.model.server');

    // find all enrollments
    app.get('/api/enrollment', (req, res) =>
        enrollmentModel.findAllEnrollments()
            .then(enrollments => res.send(enrollments))
    );

    // create enrollment
    app.post('/api/section/:sectionId/enrollment', (req, res) => {
            const sectionId = req.params.sectionId;
            const currentUser = req.session.currentUser;
            const enrollment = {
                student: currentUser._id,
                section: sectionId
            };

            sectionModel.subSectionSeat(sectionId)
                .then(() => {
                    enrollmentModel.createEnrollment(enrollment)
                })
                .then((enrollment) => {
                    res.json(enrollment);
                });
        }
    );

    // find all enrollments
    app.delete('/api/section/:sectionId/enrollment', (req, res) =>
        sectionModel.addSectionSeat(sectionId)
            .then(() => enrollmentModel.deleteEnrollment(sectionId))
            .then(enrollments => res.send(enrollments))
    );

    // enrolls student into a section

    // retrieves all the sections a student is enrolled in

    // un-enrolls a student from a section
};