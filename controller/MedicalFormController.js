
const express = require('express');
const MedicalHistoryController = require('../service/MedicalHistoryService');

const router = express.Router();

// Handle form submission
router.post('/addUserMedicalHistory',MedicalHistoryController.addMedicalHistory );

router.get('/allUsersHistory',MedicalHistoryController.getAllUsersMedicalHistory );

router.get('/usersMedicalHistory/:id', MedicalHistoryController.getSingleUserMedicalHistory);


router.put('/userMedicalHistory/:id', MedicalHistoryController.updateMedicalHistory);
router.delete('/userMedicalHistory/:id', MedicalHistoryController.deleteUserMedicalHistory);


module.exports = router;
