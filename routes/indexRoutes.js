const express = require("express");
const router = express.Router();
const getIndex = require("../controller/indexController");

router.get("/", getIndex);

module.exports = router;
