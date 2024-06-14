const express = require("express");
const router = express.Router();

const basic = require('../Controllers/controller.js');

router.get("/home", basic.home);
router.get("/profile", basic.profile);

module.exports = router;