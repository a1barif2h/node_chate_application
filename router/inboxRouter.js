// external import 

const express = require('express');

// internal import
const { getInbox } = require('../controler/inboxController');
const decorateHtmlResponse = require('../middlewares/commen/decorateHtmlRespons');

const router = express.Router();

router.get('/', decorateHtmlResponse('Inbox') , getInbox)

module.exports = router;