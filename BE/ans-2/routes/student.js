const express = require('express');
const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('../controllers/student');

const router = express.Router();

const parentRouter = require('./parent');
router.use('/:id/parent', parentRouter);

router.route('/').get(getStudents).post(createStudent);

router.route('/:id').get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;
