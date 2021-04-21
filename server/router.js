require('dotenv').config();
const express = require('express');
// const controllers = require('./controllers');
const router = express.Router();

const response = {
    success: (req, res, data, status) => {
        res.status(status || 200).send({
            error: '',
            body: data
        });
    },
    error: (req, res, error, status, message) => {
        console.error(message);
        res.status(status || 500).send({
            error: error,
            body: ''
        });
    }
};

router.get('/flashcards', (req, res) => {
    res.send('GET Flashcards');
});

router.post('/flashcards', (req, res) => {
    res.send('POST Flashcards');
});

module.exports = router;