var express = require('express');
var router = express.Router();
var locationsController = require('../controllers/locations');
var othersController = require('../controllers/others');

// set locations route
router.get('/', locationsController.homeList);
router.get('/location', locationsController.locationInfo);
router.get('/location/review/new', locationsController.addReview);

// set others route
router.get('/about', othersController.about);

module.exports = router;
