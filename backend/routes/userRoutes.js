const express = require("express");
const router = express.Router();
const { getMe, loginUser, registerUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.get("/me", protect, getMe);
router.post("/", registerUser);
router.post("/login", loginUser);

protect;

module.exports = router;
