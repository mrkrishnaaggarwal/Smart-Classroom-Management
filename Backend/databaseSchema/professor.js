const mongoose = require('mongoose');
const profSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    classes: {
        type:[String],
        required:true
    }
});

const Professor = mongoose.model('Professor', profSchema);

module.exports = Professor;