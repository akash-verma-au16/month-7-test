const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  rollNumber: {
    type: String,
  },
  standard: {
    type: String,
  },
  section: {
    type: String,
  },
  photoURL: {
    type: String,
  },
  address: {
    line1: {
      type: String,
    },
    line2: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  parents: {
    type: Array,
  },
});

module.exports = mongoose.model('Student', StudentSchema);
