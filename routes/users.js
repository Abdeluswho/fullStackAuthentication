const express = require('express');
const router = require("express-promise-router")();
const passport = require('passport');
const passportConfig = require('../passport')

const { validateBody, schemas } = require("../helpers/routeHelpers");
const UsersController = require('../controllers/users')

const passportSignin = passport.authenticate('local', { session: false })
const passportJWT = passport.authenticate('jwt', { session: false })

router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signUp)

router.route('/signin')
    .post(validateBody(schemas.authSchema), passportSignin, UsersController.signIn)

router.route('/secret')
    .get(passportJWT, UsersController.secret)

module.exports = router;