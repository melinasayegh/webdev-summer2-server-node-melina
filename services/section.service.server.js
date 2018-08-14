module.exports = app => {

    const sectionModel = require('../models/sections/section.model.server');

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
                res.json(sections)
            })
        }
    );

    app.get('/api/section/student/:studentId', (req, res) => {
            const studentId = parseInt(req.params['studentId']);
            sectionModel.findAllSectionsForStudent(studentId)
                .then((sections) => {
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