module.exports = app => {

    const enrollmentModel = require('../models/enrollments/enrollment.model.server');

    // find all enrollments
    app.get('/api/enrollment', (req, res) =>
        enrollmentModel
            .findAllEnrollments()
            .then(enrollments => res.send(enrollments))
    );

    // create enrollment
    app.post('/api/enrollment', (req, res) =>
        enrollmentModel
            .createEnrollment(req.body)
            .then(enrollment => res.send(enrollment))
    );
};