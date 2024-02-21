// routes/index.js

const express = require('express');
const Router = express.Router();

const userController = require('../controller/UserController');
Router.use("/user",userController)

const MedicalHistoryController = require('../controller/MedicalFormController')
Router.use('/UserMedicalHistory',MedicalHistoryController)

const ReportController = require('../controller/ReportsController')
Router.use('/Reports',ReportController)

const RoutineCheckupController = require('../controller/RoutineCheckupController')
Router.use('/RoutineCheckup',RoutineCheckupController)

const OTPController = require('../controller/OTPController')
Router.use('/otp',OTPController)


module.exports = Router;
