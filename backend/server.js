const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const enrollmentRoutes = require('./routes/formRoute');
const dotenv = require('dotenv')
const app = express();
const PORT = 3001;

dotenv.config('/env');

const cors = require('cors');
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
// Use enrollment routes
app.use('/api', enrollmentRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
