const express = require('express');
const diaryController = require('../controller/diaryController');
const router = express.Router();

router.get("/", diaryController.diaryHome);
router.post("/", diaryController.diaryContent);

// get route for the js fetch
router.get("/data", diaryController.sendDairyContent)

module.exports = router;