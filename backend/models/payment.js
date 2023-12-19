const mongoose = require('mongoose');

// Define the schema for payment
const paymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: Number,
    timestamp: { type: Date, default: Date.now },
});

// Create models based on the schemas
const PaymentModel = mongoose.model('Payment', paymentSchema);

module.exports = PaymentModel;