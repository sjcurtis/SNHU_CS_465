const express = require('express');
const router = express.Router();
const controller= require('../controllers/rooms');

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways' });
};

module.exports = {
    rooms
};