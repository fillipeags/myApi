const { Router } = require('express');

const ContactController = require('./App/controllers/ContactController');

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);

module.exports = router;
