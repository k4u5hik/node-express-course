const mongoose = require('mongoose');

//Schema
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Task name is required'],
        trim: true,
        maxlength: [20, 'Task name cannot be more than 20 characters']
    },

    completed: {
        type: Boolean,
        default: false
    }
})



module.exports = mongoose.model('Task', TaskSchema);