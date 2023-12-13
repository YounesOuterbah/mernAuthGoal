const asyncHandler = require("express-async-handler");

// @desc    GET goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.json({ message: "Get goals" });
});

// @desc    SET goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (req.body) {
    res.send(req.body);
  } else {
    res.json({ message: "something went wrong" });
  }

  res.json({ message: "Set goal" });
});

// @desc    Update goal
// @route   PUT /api/goals
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Update goal ${req.params.id}` });
});

// @desc    DELETE goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
