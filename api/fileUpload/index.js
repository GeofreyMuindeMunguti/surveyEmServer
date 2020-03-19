const express = require('express');

const controller = require('./fileUpload.controller.js');
const router = express.Router();

router.post('/uploadCompanyLogo', controller.uploadCompanyLogo);
router.delete('/removeCompanyLogo/:name', controller.removeCompanyLogo);

module.exports = router;
