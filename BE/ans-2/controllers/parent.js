const Parent = require('../models/Parent');

exports.getParents = async (req, res) => {
  const parents = await Parent.find();

  res.status(200).json({
    success: true,
    parents,
  });
};

exports.getParent = async (req, res) => {
  const parent = await Parent.findById(req.params.id);
  if (!parent) {
    return res.status(404).json({
      success: true,
      msg: 'parent not found',
    });
  }

  res.status(200).json({
    success: true,
    parent,
  });
};

exports.createParent = async (req, res) => {
  if (!req.params.id)
    return res
      .status(400)
      .json({ success: false, msg: 'need to send through a student' });

  const parent = await Parent.create({ ...req.body, student: req.params.id });

  res.status(200).json({
    success: true,
    parent,
  });
};

exports.updateParent = async (req, res) => {
  const parent = await Parent.findById(req.params.id);

  if (!parent) {
    return res.status(404).json({
      success: true,
      msg: 'parent not found',
    });
  }

  await Parent.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    msg: 'parent was updated',
  });
};

exports.deleteParent = async (req, res) => {
  const parent = await Parent.findById(req.params.id);

  if (!parent) {
    return res.status(404).json({
      success: true,
      msg: 'parent not found',
    });
  }

  parent.remove();

  res.status(200).json({
    success: true,
    msg: 'parent was removed',
  });
};
