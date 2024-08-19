const User = require("../models/users");

module.exports = {
  list: async (req, res) => {
    const users = await User.find();
    res.status(200).send({
      error: false,
      data: users,
      message: "List of users",
      details: "List of users",
    });
  },

  create: async (req, res) => {
    const user = User.create(req.body);
    res.status(201).send({
      error: false,
      data: user,
      message: "User created",
      details: "User created",
    });
  },

  read: async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).send({
      error: false,
      data: user,
      message: "User found",
      details: "User found",
    });
  },

  update: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send({
      error: false,
      data: user,
      message: "User updated",
      details: "User updated",
    });
  },

  delete: async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({
      error: false,
      data: user,
      message: "User deleted",
      details: "User deleted",
    });
  },
};
