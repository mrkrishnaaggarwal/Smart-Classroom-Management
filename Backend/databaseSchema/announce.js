const mongoose = require('mongoose');
const announceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    professorName: {
        type: String,
        required: true
    },
    
});

const announce = mongoose.model('announceSchema', announceSchema);

module.exports = announce;