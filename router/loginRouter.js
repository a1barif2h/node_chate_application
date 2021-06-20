//external import
const express = require('express');


//internal import

const {getLogin} = require('../controler/loginControler');
const decorateHtmlResponse = require('../middlewares/commen/decorateHtmlRespons');

const router = express.Router();

// login page
router.get('/', decorateHtmlResponse('Login'), getLogin);

module.exports = router