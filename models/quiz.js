const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    questions: {
        type: [Object],
        required: true
    },
    participants: {
        type: [Object],
        default: []
    }
});

module.exports = mongoose.model('Quiz', quizSchema);
