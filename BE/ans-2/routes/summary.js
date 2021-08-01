const express = require('express');
const { getSummary } = require('../controllers/summary');

const router = express.Router();

router.route('/:id').get(getSummary);

module.exports = router;
