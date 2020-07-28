const express = require("express");
const router = express.Router();
const AuthController = require("../Controller/AuthController.js");

router.get("/signup", AuthController.getSignup);

router.get("/login", AuthController.getLogin);

router.get("/forgetPassword", AuthController.getForgetPassword);

module.exports = router;
