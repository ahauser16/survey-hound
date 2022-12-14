const mongoose = require ('mongoose');
const { Schema } = mongoose;
// the above is equivalent to this-->const Schema = mongoose.Schema;
//do not use 'require' statements in this file!

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users',userSchema);