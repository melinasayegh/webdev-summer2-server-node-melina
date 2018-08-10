const mongoose = require('mongoose');
const sectionSchema = require('./section.schema.server');

const sectionModel = mongoose.model('SectionModel', sectionSchema);
const userModel = require('../user/user.model.server');

findAllSections = () =>
    sectionModel.find();

findAllSectionsForCourse = courseId =>
    sectionModel.find({courseId: courseId});

//findAllSectionsForStudent = studentId =>
//    sectionModel.find({students: type: studentId});

findSectionById = (sectionId) =>
    sectionModel.findById(sectionId);

createSection = (courseId, section) =>
    sectionModel.create(section);

deleteSection = sectionId =>
    sectionModel.deleteOne({_id: sectionId});

updateSection = (sectionId, newSection) =>
    sectionModel.updateOne({_id: sectionId}, {$set: {
                title: newSection.title,
                courseId: newSection.courseId,
                maxSeats: newSection.maxSeats,
                takenSeats: newSection.takenSeats,
        }});

subSectionSeat = (sectionId) => {
    return sectionModel.update({
        _id: sectionId
    }, {
        $inc: {seats: -1}
    });
};

addSectionSeat = (sectionId) => {
    return sectionModel.update({
        _id: sectionId
    }, {
        $inc: {seats: _1}
    });
};


module.exports = {
    findAllSections,
    findAllSectionsForCourse,
    findSectionById,
    createSection,
    deleteSection,
    updateSection,
    subSectionSeat,
    addSectionSeat
};