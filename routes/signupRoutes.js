const express = require('express')
const router = express.Router();
const signupController = require('../controller/signupController')

router.get('/', signupController.signupController)
router.post('/new',signupController.signupNewController)

module.exports = router;