const express = require('express');
const Router = express.Router();

// @route   '/api/users/me'
// @desc    GET all me
// @access  PUBLIC
Router.get('/me', (req, res) => res.send('Hey it\'s Joey'));

module.exports = Router;