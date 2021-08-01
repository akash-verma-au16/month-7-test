const mongoose = require('mongoose');

const ParentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  occupation: {
    type: String,
  },
  designation: {
    type: String,
  },
  student: {
    type: mongoose.Schema.ObjectId,
    ref: 'Student',
  },
});

ParentSchema.statics.getStudent = async function (studentId) {
  const obj = await this.aggregate([
    {
      $match: { student: studentId },
    },
    {
      $group: {
        _id: '$student',
        parents: {
          $push: {
            _id: '$_id',
            name: '$name',
            phoneNumber: '$phoneNumber',
            email: '$email',
            occupation: '$occupation',
            designation: '$designation',
          },
        },
      },
    },
  ]);

  try {
    await this.model('Student').findByIdAndUpdate(studentId, {
      parents: obj[0].parents,
    });
  } catch (err) {
    console.error(err);
  }
};

ParentSchema.post('save', function () {
  this.constructor.getStudent(this.student);
});

module.exports = mongoose.model('Parent', ParentSchema);
