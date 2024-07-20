const express = require("express");
const router = express.Router();
const {Login} = require('../Controller/Login')


router.post("/login", Login);
module.exports = router;