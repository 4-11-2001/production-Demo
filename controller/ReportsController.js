
const express = require('express');
const ReportController = require('../service/ReportsService');

const router = express.Router();

// Handle form submission
router.post('/addReport',ReportController.addreport );

router.get('/Report', ReportController.getAllReports);

router.get('/report/:id', ReportController.getSingleReport);


router.put('/report/:id', ReportController.updateReport);
router.delete('/report/:id', ReportController.deleteReport);


module.exports = router;
