module.exports = app => {

    const sectionModel = require('../models/sections/section.model.server');
    const enrollmentModel = require('../models/enrollments/enrollment.model.server')

    /*
    app.put('/api/section/:sectionId/enroll', (req, res) => {
        const sectionId = req.params['sectionId'];
        const currentUser = req.session['currentUser'];
        const studentId = currentUser._id;
        const enrollment = {
            student: studentId,
            section: sectionId
        };
        sectionModel.subSectionSeat(sectionId)
            .then(() => {
                enrollmentModel.createEnrollment(enrollment);
                userModel.createEnrollment(sectionId);
            })
            .then(function (enrollment) {
                res.json(enrollment);
            });
    });
*/
    app.get('/api/section', (req, res) =>
        sectionModel.findAllSections()
            .then(sections => res.json(sections))
    );

    app.get('/api/section/:sectionId', (req, res) =>
        sectionModel.findSectionById()
            .then(section => res.json(section))
    );

    app.get('/api/course/:courseId/section', (req, res) => {
        const courseId = parseInt(req.params['courseId']);
        sectionModel.findAllSectionsForCourse(courseId)
            .then((sections) => {
                console.log(sections)
                res.json(sections)
            })
        }
    );

    app.post('/api/course/:courseId/section', (req, res) => {
        const section = req.body;
        sectionModel.createSection(req.params['courseId'], section)
            .then(section => res.json(section));
        }
    );

    app.put('api/section/:sectionId', (req, res) =>
        sectionModel.updateSection(req.params['sectionId'], req.body)
            .then(section => res.json(section))
    );

    app.delete('/api/section/:sectionId', (req, res) =>
        sectionModel.deleteSection(req.params['sectionId'])
            .then(status => res.sendStatus(200))
    );
};