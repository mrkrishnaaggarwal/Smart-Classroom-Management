const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
    Monday: [{ type: String, default: '' }],
    Tuesday: [{ type: String, default: '' }],
    Wednesday: [{ type: String, default: '' }],
    Thursday: [{ type: String, default: '' }],
    Friday: [{ type: String, default: '' }],
});

const classSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    timetable: {
        type: timetableSchema,
        required: true
    }
});


const Class = mongoose.model('Class', classSchema);

module.exports = Class;
