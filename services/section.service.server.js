module.exports = app => {

    const sectionModel = require('../models/sections/section.model.server');

    app.put('/api/section/:sectionId/enroll', (req, res) => {
        const currentUser = req.session['currentUser'];
        sectionModel.enroll(currentUser._id, req.params['sectionId'])
            .then(status => res.sendStatus(200))
    });

    app.get('/api/section', (req, res) =>
        sectionModel.findAllSections()
            .then(sections => res.send(sections))
    );

    app.get('/api/section/:sectionId', (req, res) =>
        sectionModel.findSectionById()
            .then(section => res.send(section))
    );

    app.get('/api/course/:courseId/section', (req, res) =>
        sectionModel.findAllSectionsForCourse(req.params['courseId'])
            .then(sections => res.send(sections))
    );

    app.get('/api/section/:sectionId/', (req, res) =>
        sectionModel.findAllSectionsForCourse(req.params['courseId'])
            .then(sections => res.send(sections))
    );

    app.post('/api/course/:courseId/section', (req, res) =>
        sectionModel.createSection(req.params['courseId'], req.body)
            .then(section => res.send(section))
    );

    app.put('api/section/:sectionId', (req, res) =>
        sectionModel.updateSection(req.params['sectionId'], req.body)
            .then(section => res.send(section))
    );

    app.delete('/api/section/:sectionId', (req, res) =>
        sectionModel.deleteSection(req.body)
            .then(status => res.sendStatus(200))
    );
};