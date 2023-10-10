
const express = require('express')
const router = express();
const schoolController = require('../controller/schoolController')


router.get('/', schoolController.get)


router.get('/:id', schoolController.getById)
router.get('/provincia/:province', schoolController.getByProvince)
router.get('/distrito/:district', schoolController.getByDistrict)
router.get('/posto/:post', schoolController.getByPost)
router.get('/localidade/:locality', schoolController.getByLocality)


module.exports = router;