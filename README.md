# Yoga Enrollment App

The Yoga Enrollment App simplifies the process of enrolling in monthly yoga classes. This application features a React-based frontend and a Node.js/Express backend. Users can seamlessly fill out enrollment forms and choose preferred batches for yoga sessions.

## Live Demo

Check out the live demo of the Yoga Enrollment App: [Yoga Enrollment App](https://yoga-enrollment-app.onrender.com/)
## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js and npm
- MongoDB installed locally or a MongoDB Atlas account

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/01prateekmishra/yoga-enrollment-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd yoga-enrollment-app
   ```

3. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

4. Install dependencies for the frontend:

   ```bash
   cd frontend
   npm install
   ```

### Setting Up MongoDB

1. Ensure that MongoDB is running either locally or you have a MongoDB Atlas account.

2. Update the MongoDB connection string in `server.js` with your actual connection string:

   ```javascript
   // server.js

   mongoose.connect('your-mongodb-connection-string');
   ```

### Running the Application

1. Start the server:

   ```bash
   cd backend
   node server.js
   ```

   The server will run on `http://localhost:3001`.

2. Start the client:

   ```bash
   cd frontend
   npm start
   ```

   The client will run on `http://localhost:3000`.

3. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage

- Fill out the enrollment form with the required details.
- Click the "Enroll" button to submit the form.
- The application will process the enrollment and display a success or error message.

## Built With

- **React**: Frontend library for building user interfaces.
- **Node.js/Express**: Backend framework for building web applications.
- **MongoDB/Mongoose**: Database for storing enrollment data.

# Development Approach

## Overview

The Yoga Enrollment App streamlines the enrollment process for monthly yoga classes, emphasizing ease of use. It is built using React for the frontend, Node.js/Express for the backend, and MongoDB for data storage.

## Folder Structure

The project follows a modular folder structure to maintain a clear separation of concerns and adhere to the MVC (Model-View-Controller) architecture.

- **frontend**: Contains the React frontend application.
- **backend**: Contains the Node.js/Express backend application.
  - **controllers**: Handles the business logic, including the mock payment function.
  - **models**: Defines the data model for enrollment.
  - **routes**: Defines the API routes.
- **public**: Contains static assets for the React application.

## Backend Development

### Database Integration

- MongoDB is used as the database to store enrollment data.
- Mongoose is utilized as the ODM (Object Data Modeling) library for MongoDB.

### Controller

- The `enrollmentController` handles the logic for enrollment, including the mock payment function (`CompletePayment`).
- It interacts with the MongoDB database to save enrollment data.

### Routes

- The `enrollmentRoutes` file defines the API routes for enrollment.
- The `/api/enroll` endpoint handles both enrollment and payment.

## Frontend Development

### React Components

- The `EnrollmentForm` component is responsible for rendering the enrollment form.
- State hooks are used to manage form data, error messages, and success messages.

### Form Submission

- Axios is used for making asynchronous HTTP requests to the backend.
- Form data is sent to the `/api/enroll` endpoint for processing.

### User Interface

- The user interface is designed to be simple and intuitive, providing a smooth enrollment experience.
- Error and success messages are displayed to provide feedback to the user.

## Database Schema

Here's an extended version of the ER (Entity-Relationship) diagram representing the database schema for the Yoga Enrollment App:

### Entities:

1. **User:**
   - Attributes: 
     - id (Primary Key)
     - name
     - age
     - email

2. **Enrollment:**
   - Attributes: 
     - id (Primary Key)
     - email
     - user_id (Foreign Key -> User)
     - batch_id (Foreign Key -> Batch)
     - month

4. **Payment:**
   - Attributes:
     - id (Primary Key)
     - user_id (Foreign Key -> User)
     - amount
     - timestamp

### Relationships:

- Each User can have multiple Enrollments (One-to-Many relationship).
- Each Enrollment is associated with one User.
- Each Enrollment is associated with one Batch.
- Each Payment is associated with one User.
