const mongoose = require ('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./recipient');
// const QuestionSchema = require('./question');

// the above is equivalent to this-->const Schema = mongoose.Schema;
//do not use 'require' statements in this file!

const surveySchema = new Schema({
 title: String,
 body: String,
 subject: String,
 recipients: [RecipientSchema],
 yes: { type: Number, default: 0 },
 no: { type: Number, default: 0 },
 _user: { type: Schema.Types.ObjectId, ref: "User" },
 dateSent: Date,
 lastResponded: Date
//  questions: [QuestionSchema]
});

/* _user: { type: Schema.Types.ObjectId, ref: "User" } 
this adds the idea to surveySchema that every survey belongs to a particular user.  
The '_user' object contains the 'ObjectId' is the user that is the owner of the record.
The 'ref' property tells mongoose that the reference we're making this to belongs to the 'user' collection.
the underscore signifies that it establishes a relationship between the surveySchema and userSchema

*/
// this surveySchema provides us with a Survey Collection
mongoose.model('surveys', surveySchema);