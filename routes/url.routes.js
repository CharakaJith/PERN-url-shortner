const express = require('express');
const router = express.Router();
const UrlController = require('../controllers/url.controllers');

router.post('/short', UrlController.shortNewUrl);
router.get('/:hash', UrlController.getUrlByHash);

module.exports = router;
