
const express = require('express');
const OTPController = require('../service/OtpService');

const router = express.Router();

// Handle form submission
router.post('/sendOtp',OTPController.sendOTP );
router.post('/verifyOtp',OTPController.verifyOTP );




module.exports = router;
