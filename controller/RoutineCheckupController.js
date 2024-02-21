
const express = require('express');
const RoutineCheckupController = require('../service/RoutineCheckupService');

const router = express.Router();

// Handle form submission
router.post('/addRoutineCheckup',RoutineCheckupController.addCheckup );

router.get('/RoutineCheckup', RoutineCheckupController.getAllRoutineCheckups);

router.get('/RoutineCheckup/:id', RoutineCheckupController.getSingleRoutineCheckup);


router.put('/RoutineCheckup/:id', RoutineCheckupController.updateRoutineCheckup);
router.delete('/RoutineCheckup/:id', RoutineCheckupController.deleteRoutineCheckup);


module.exports = router;
