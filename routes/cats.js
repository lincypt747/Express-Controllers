const express = require('express');
const router = express.Router();
const catsCtrl = require('../controllers/cats')

// Our routes dedicated to our cat requests will go here!
//All routes defined prefixed with /cats in the endpoint
router.get('/', catsCtrl.index);

router.get('/:id', catsCtrl.show);


module.exports = router;

