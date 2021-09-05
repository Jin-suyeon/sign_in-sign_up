"use strict";

const express = require("express");
const router = express.Router();

const controllers = require("../../controllers/home/home.ctrl");

router.get("/", controllers.home);

router.get("/login", controllers.login);

module.exports = router;
