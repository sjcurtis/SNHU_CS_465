const express = require('express');
const router = express.Router();
const controller= require('../controllers/travel');

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways' });
};

module.exports = {
    travel
};