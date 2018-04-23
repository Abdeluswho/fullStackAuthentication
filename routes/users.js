const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users')

router.post('/signup', (req, res) => {
    UsersController.signUp
})

router.post('/signin', (req, res) => {
    UsersController.signIn
})

router.get('/secret', (req, res) => {
    UsersController.secret
})

module.exports = router;