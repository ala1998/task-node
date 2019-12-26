const express = require('express');
const router = express.Router();
const interactionsController = require('../controllers/interactions');

router.get('/interactions', interactionsController.getAll);
router.get('/interactions/:id', interactionsController.getById);
router.get('/interactions/:drugCode', interactionsController.getByDrugCode);
router.get('/interactions/:diseaseCode', interactionsController.getByDiseaseCode);
router.get('/interactions/:drugCode/:diseaseCode/:type', interactionsController.getByAll);
router.post('/interactions', interactionsController.save);
router.put('/interactions', interactionsController.update);
router.delete('/interactions/:id', interactionsController.delete);

router.get('/fake-data', interactionsController.saveFake);

module.exports = router;