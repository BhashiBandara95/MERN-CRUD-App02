const express = require("express"); // Import express
const router = express.Router(); // Import Router
const User = require("../Model/UserModel"); // Import User Model
const UserController = require("../Controllers/UserControllers"); // Import User Controller

// Create Routes path
router.get("/", UserController.getAllUsers);

// export
module.exports = router;
