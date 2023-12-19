const express = require('express');
const router = express.Router();
const formController = require('../controller/formController')

// Endpoint to handle enrollment
router.post('/enroll', formController.formSubmit);

module.exports = router;