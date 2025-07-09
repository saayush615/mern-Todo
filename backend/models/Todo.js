const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    
},{ timestamps: true });
// The timestamps option tells Mongoose to assign createdAt and updatedAt fields to your schema. The type assigned is Date.

module.exports = mongoose.model('Todo', todoSchema);