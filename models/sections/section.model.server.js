const mongoose = require('mongoose');
const sectionSchema = require('./section.schema.server');

const sectionModel = mongoose.model('SectionModel', sectionSchema);

findAllSections = () =>
    sectionModel.find();

findAllSectionsForCourse = courseId =>
    sectionModel.find({courseId: courseId});

findAllSectionsForStudent = studentId =>
    sectionModel.find({studentId: studentId});

findAllSectionsForCourseAndStudent = (courseId, studentId) =>
    sectionModel.find({courseId: courseId, studentId: studentId});

findSectionById = (sectionId) =>
    sectionModel.findById(sectionId);

createSection = (courseId, section) =>
    sectionModel.create(section);

deleteSection = sectionId =>
    sectionModel.delete({_id: sectionId});

updateSection = (sectionId, newSection) =>
    sectionModel.update({_id: sectionId}, {$set: newSection});

subSectionSeat = (sectionId) =>
    sectionModel.update({_id: sectionId}, {$inc: {availableSeats: -1}});

addSectionSeat = (sectionId) =>
    sectionModel.update({_id: sectionId}, {$inc: {availableSeats: +1}});

module.exports = {
    findAllSections,
    findAllSectionsForCourse,
    findAllSectionsForStudent,
    findAllSectionsForCourseAndStudent,
    findSectionById,
    createSection,
    deleteSection,
    updateSection,
    subSectionSeat,
    addSectionSeat
};