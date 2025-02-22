const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.post('/api/v1/auth/register',  AuthController.register);
router.post('/api/v1/auth/login',  AuthController.login);

module.exports = router;