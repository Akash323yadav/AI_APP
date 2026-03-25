const mongoose = require('mongoose');

const NodeDataSchema = new mongoose.Schema({
    prompt: {
        type: String,
        required: true,
    },
    response: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('NodeData', NodeDataSchema);
