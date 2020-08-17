const { Router } = require('express');

const ContactController = require('./App/controllers/ContactController');

const router = Router();

router.get('/contacts', ContactController.index);

module.exports = router;
