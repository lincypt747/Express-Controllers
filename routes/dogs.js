const express = require('express');
const router = express.Router();
const dogsCtrl = require('../controllers/dogs')

//All routes defined prefixed with /dogs in the endpoint
router.get('/', dogsCtrl.index);

router.get('/:breed', dogsCtrl.show);

module.exports = router;
