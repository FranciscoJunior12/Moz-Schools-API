
const express = require('express')
const router = express();
const schoolController = require('../controller/schoolController')


router.get('/', schoolController.index)


module.exports = router;