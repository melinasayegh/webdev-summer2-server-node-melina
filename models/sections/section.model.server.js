const mongoose = require('mongoose');
const sectionSchema = require('./section.schema.server');

const sectionModel = mongoose.model('SectionModel', sectionSchema);

findAllSections = () =>
    sectionModel.find();

findAllSectionsForCourse = courseId =>
    sectionModel.find({courseId: courseId});

findSectionById = (sectionId) =>
    sectionModel.findOne(sectionId);

createSection = (courseId, section) =>
    sectionModel.create(section);

deleteSection = sectionId =>
    sectionModel.delete({_id: sectionId});

updateSection = (sectionId, newSection) =>
    sectionModel.update({_id: sectionId}, {$set: newSection});

subSectionSeat = (sectionId) => {
    sectionModel.update({_id: sectionId}, {$inc: {availableSeats: -1}});
};

addSectionSeat = (sectionId) => {
    sectionModel.update({_id: sectionId}, {$inc: {availableSeats: +1}});
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