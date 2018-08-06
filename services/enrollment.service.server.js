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
    app.post('/api/enrollment', (req, res) =>
        enrollmentModel.createEnrollment(req.body)
            .then(enrollment => res.send(enrollment))
    );

    // enrolls student into a section

    // retrieves all the sections a student is enrolled in

    // un-enrolls a student from a section
};