const mongoose = require ('mongoose');
const { Schema } = mongoose;
// the above is equivalent to this-->const Schema = mongoose.Schema;
//do not use 'require' statements in this file!

//when we use Mongoose we lose the ability to have user collections' with different properties (e.g. collection_id_1 has "height" property while collection_id_2 doesn't have the "height" property).

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

//to create a mongoDb class we need to run the code below.
//we will use this model class to create a new record inside our DB whenever a user signs in to our application for the very first time.
mongoose.model('users',userSchema);