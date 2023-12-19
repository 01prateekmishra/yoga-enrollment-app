// REST endpoint for form submission
const UserModel = require('../models/user');
const EnrollmentModel = require('../models/enrollment');
const PaymentModel = require('../models/payment');

function CompletePayment(userDetails, paymentDetails) {
    // Simulate a successful payment for demonstration purposes
    // In a real implementation, you would integrate with a payment gateway
    // and handle the payment process securely.
    const paymentResponse = {
        success: true,
        message: 'Payment completed successfully',
        // Add any other payment-related details if needed
    };

    return paymentResponse;
}
exports.formSubmit = async (req, res) => {
    const userData = req.body;

    // Basic validation
    if (!userData.name || !userData.age || !userData.email || !userData.batch || !userData.month) {
        return res.status(400).json({ success: false, message: 'Incomplete user information' });
    }

    // Validate age
    if (userData.age < 18 || userData.age > 65) {
        return res.status(400).json({ success: false, message: 'Invalid age' });
    }

    try {
        // Check if the user is already enrolled for the specified month
        const existingEnrollment = await EnrollmentModel.findOne({ email: userData.email });

        if (existingEnrollment && existingEnrollment.month === userData.month) {
            return res.status(400).json({ success: false, message: 'User is already enrolled for this month' });
        }
        // Create a new user
        const user = await UserModel.create(userData);

        // Create a new enrollment
        const enrollmentData = {
            user: user._id,
            email: userData.email,
            batch: userData.batch,
            month: userData.month,
        };
        const enrollment = await EnrollmentModel.create(enrollmentData);

        // Mock payment function
        const paymentDetails = {
            user: user,
            amount: 500, // Monthly fee
        };

        // Store payment details
        await PaymentModel.create(paymentDetails);

        const paymentResponse = CompletePayment(userData, { amount: 500 }); // Assuming a fixed amount of 500

        // Check payment response and send appropriate response to frontend
        if (paymentResponse.success) {
            res.status(200).json({
                success: true,
                message: 'Enrollment and payment completed successfully',
                user,
                enrollment
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Payment failed. Please try again.',
            });
        }
    }
    catch (error) {
        console.error('Error submitting form:', error.message);
        return res.status(500).json({ success: false, message: 'Enrollment failed' });
    }
};