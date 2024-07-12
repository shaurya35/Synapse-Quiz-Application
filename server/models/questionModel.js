//mongoose config
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//questionSchema
const questionSchema = new Schema({
    level: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true
    },

    content: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: false
    },

    options: {
        type: [String],
        required: true
    }

}, { timestamps: true})

//module config
module.export = mongoose.model('Question', questionSchema)
