const Student = require('../models/Student');

exports.getStudents = async (req, res) => {
  const students = await Student.find();

  res.status(200).json({
    success: true,
    students,
  });
};

exports.getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return res.status(200).json({
      success: true,
      msg: 'student not found',
    });
  }

  res.status(200).json({
    success: true,
    student,
  });
};

exports.createStudent = async (req, res) => {
  const student = await Student.create(req.body);

  res.status(200).json({
    success: true,
    student,
  });
};

exports.updateStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return res.status(200).json({
      success: true,
      msg: 'student not found',
    });
  }

  await Student.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    msg: 'student was updated',
  });
};

exports.deleteStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return res.status(200).json({
      success: true,
      msg: 'student not found',
    });
  }

  student.remove();

  res.status(200).json({
    success: true,
    msg: 'student was removed',
  });
};
