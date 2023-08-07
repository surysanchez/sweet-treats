const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All path starts with 'api/users'
// POST /api/users
router.post('/', usersCtrl.create);
router.post("/login", usersCtrl.login);

module.exports = router;