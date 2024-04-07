const moongose = require('mongoose');
const Schema = moongose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

const User = moongose.model('User', userSchema);

module.exports = User;