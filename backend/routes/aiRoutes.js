const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

// Standard REST Routing
router.post('/ask-ai', aiController.askAI);
router.post('/save', aiController.saveFlow);
router.get('/history', aiController.getHistory);

module.exports = router;
