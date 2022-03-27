const express = require('express');
const router = express.Router();

const RouterLocations = require('../components/locations')
const RouterProperties = require('../components/properties')
router.use('/locations', RouterLocations)
router.use('/properties', RouterProperties)

module.exports = router;