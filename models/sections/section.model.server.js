const mongoose = require('mongoose');
const sectionSchema = require('./section.schema.server');

const sectionModel = mongoose.model('SectionModel', sectionSchema);
const userModel = require('../user/user.model.server');

findAllSections = () =>
    sectionModel.find();

findAllSectionsForCourse = courseId =>
    sectionModel.find({courseId: courseId});

findSectionById = (sectionId) =>
    sectionModel.findById(sectionId);

createSection = (courseId, section) =>
    sectionModel.create(section)
        .then(sectionModel.updateOne(
            {_id: sectionId},
            {$set: {courseId: courseId}}));

deleteSection = sectionId =>
    sectionModel.deleteOne({_id: sectionId});

updateSection = (sectionId, newSection) =>
    sectionModel.updateOne({_id: sectionId}, {$set: {
                title: newSection.title,
                courseId: newSection.courseId,
                maxSeats: newSection.maxSeats,
                takenSeats: newSection.takenSeats,
        }});

enroll = (userId, sectionId) =>
    userModel.findUserById(userId)
        .then(user => {
            user.sections.push(sectionId);
            return user.save();
        });

module.exports = {
    enroll,
    findAllSections,
    findAllSectionsForCourse,
    findSectionById,
    createSection,
    deleteSection,
    updateSection,
    takeSectionSeat,
    loseSectionSeat
};