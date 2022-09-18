const mongoose = require('mongoose');
const { Schema } = mongoose;

// this is a subdocument collection
const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;