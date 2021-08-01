const express = require('express');
const {
  getParents,
  getParent,
  createParent,
  updateParent,
  deleteParent,
} = require('../controllers/parent');

const router = express.Router({ mergeParams: true });

router.route('/').get(getParents).post(createParent);

router.route('/:id').get(getParent).put(updateParent).delete(deleteParent);

module.exports = router;
