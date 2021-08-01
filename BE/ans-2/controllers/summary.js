const Student = require('../models/Student');

exports.getSummary = async (req, res) => {
  const student = await Student.findById(req.params.id).select(
    '-address, -photoURL'
  );

  if (!student) {
    return res.status(404).json({
      success: true,
      msg: 'student not found',
    });
  }

  res.status(200).json({
    success: true,
    student,
  });
};
