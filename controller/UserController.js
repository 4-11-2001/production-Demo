const express = require("express");
const userController = require("../service/userService");

const router = express.Router();

// Handle form submission
router.post("/addUser", userController.addUser);

router.get("/user", userController.getAllUser);

router.get("/user/:id", userController.getSingleUser);

router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/login", userController.loginUser);

module.exports = router;
