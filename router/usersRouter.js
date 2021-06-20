//external import 
const express = require('express');

//internal exports
const { getUsers } = require('../controler/usersControler');
const decorateHtmlResponse = require('../middlewares/commen/decorateHtmlRespons');

const router = express.Router();

router.get('/', decorateHtmlResponse('Users'), getUsers)


module.exports = router;