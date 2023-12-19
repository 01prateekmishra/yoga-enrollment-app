const mongoose = require('mongoose');

// Define the schema for User
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
});
// Create models based on the schemas
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;