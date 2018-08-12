module.exports = app => {

    const sectionModel = require('../models/sections/section.model.server');
    const enrollmentModel = require('../models/enrollments/enrollment.model.server');

    // find all enrollments
    app.get('/api/enrollment', (req, res) =>
        enrollmentModel.findAllEnrollments()
            .then(enrollments => res.send(enrollments))
    );

    // enrolls student into a section
    app.post('/api/section/:sectionId/enrollment', (req, res) => {
            let sectionId = req.params['sectionId'];
            let currentUser = req.session['currentUser'];
            if (currentUser !== undefined) {
                let enrollment = {
                    student: currentUser._id,
                    section: sectionId
                };
                enrollmentModel.createEnrollment(enrollment)
                    .then(() => sectionModel.subSectionSeat(sectionId))
                    .then(() => res.send(enrollment));
            }
        }
    );

    // retrieves all the sections a student is enrolled in
    app.get('/api/student/section/', (req, res) => {
            let currentUser = req.session.currentUser;
            if (currentUser !== undefined) {
                let studentId = currentUser._id;
                enrollmentModel.findAllSectionsForStudent(studentId)
                    .then((enrollments) => res.send(enrollments));
            }
        }
    );

    // un-enrolls a student from a section
    app.delete('/api/section/:sectionId/enrollment', (req, res) => {
            let currentUser = req.session.currentUser;
            let sectionId = req.params['sectionId'];
            if (currentUser !== undefined) {
                let studentId = currentUser._id;
                sectionModel.addSectionSeat(sectionId)
                    .then(() => enrollmentModel.deleteEnrollment(studentId, sectionId))
                    .then(enrollments => res.send(enrollments));
            }
        }
    );
};