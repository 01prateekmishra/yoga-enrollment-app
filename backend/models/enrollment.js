const mongoose = require('mongoose');

// Define the schema for enrollment
const enrollmentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    email: String,
    batch: String,
    month: String,
});
// Create models based on the schemas
const EnrollmentModel = mongoose.model('Enrollment', enrollmentSchema);

module.exports = EnrollmentModel;