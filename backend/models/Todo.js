const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    
},{ timestamps: true });
// The timestamps option tells Mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date.

module.exports = mongoose.model('Todo', todoSchema);