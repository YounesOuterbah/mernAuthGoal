const asyncHandler = require("express-async-handler");
const Goal = require("../models/Goals");
const User = require("../models/Users");

// @desc    GET goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.json(goals);
});

// @desc    SET goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.body.id,
  });

  res.json(goal);
});

// @desc    Update goal
// @route   PUT /api/goals
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }

  const user = await User.findById(req.user.id);
  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // logged user matches goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not Authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.json(updatedGoal);
});

// @desc    DELETE goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  await Goal.findByIdAndDelete(req.params.id);

  const user = await User.findById(req.user.id);
  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // logged user matches goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not Authorized");
  }

  res.json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
