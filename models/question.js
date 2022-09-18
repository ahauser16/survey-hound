const mongoose = require('mongoose');
const { Schema } = mongoose;

// this is a subdocument collection
const questionSchema = new Schema({
    questionTitle: String,
    questionText: String,
    questionType: {
        button,
        radio,
        checkbox,
        textArea,
    },

});

module.exports = questionSchema;