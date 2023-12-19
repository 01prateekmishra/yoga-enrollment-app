import React, { useState } from 'react';
import axios from 'axios';

const EnrollmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        batch: '',
        month: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [enrollmentSuccess, setEnrollmentSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic client-side validation
        if (!formData.name || !formData.age || !formData.email || !formData.batch || !formData.month) {
            setErrorMessage('Please fill out all fields');
            return;
        }

        // Validate age
        if (formData.age < 18 || formData.age > 65) {
            setErrorMessage('Invalid age. Age must be between 18 and 65');
            return;
        }

        try {
            // Clear previous error and success messages 
            setErrorMessage('');
            setSuccessMessage('');

            // Call the backend API
            const response = await axios.post('http://localhost:3001/api/enroll', formData);

            // Set success message and update state to show success screen
            setSuccessMessage('Enrollment successful!');

            // Optional: You can reset the form or redirect to another page after successful enrollment
            setFormData({
                name: '',
                age: '',
                email: '',
                batch: '',
                month: '',
            });

            setEnrollmentSuccess(true);
        } catch (error) {
            console.error('Error submitting form:', error.message);
            if (error.response && error.response.status === 400) {
                // Handle the specific error message sent by the server
                setErrorMessage(error.response.data.message);
            } else {
                console.error('Error submitting form:', error.message);
                setErrorMessage('Enrollment failed. Please try again.');
            }
        }
    };

    return (

        <div className="container">
            {enrollmentSuccess ? (
                <div className="success-message show">{successMessage}</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

                    <label>Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />

                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

                    <label>Batch:</label>
                    <select name="batch" value={formData.batch} onChange={handleInputChange} required>
                        <option value="" disabled>Select the batch</option>
                        <option value="6-7AM">6-7AM</option>
                        <option value="7-8AM">7-8AM</option>
                        <option value="8-9AM">8-9AM</option>
                        <option value="5-6PM">5-6PM</option>
                    </select>

                    <label>Month:</label>
                    <select name="month" value={formData.month} onChange={handleInputChange} required>
                        <option value="" disabled>Select the month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>

                    <button type="submit">Enroll</button>
                </form>
            )}
        </div>
    );
};

export default EnrollmentForm;
