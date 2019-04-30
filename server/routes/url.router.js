const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles POST request with new URL data
router.post('/', (req, res) => {
    const queryText = `INSERT into "shortened_URLs" ("original_URL", "user_id") 
    VALUES ($1, $2) RETURNING id;`
    let longURL = req.body.originalURL;
    // Re-validate that original URL from client is in correct format
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    // If original URL is valid, INSERT data into shortened_URLs table
    if (regexp.test(longURL)) {
        pool.query(queryText, [longURL, req.user.id]
        ).then(() => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('Error with URL data INSERT statement into shortened_URLs table:', error);
            res.sendStatus(500)
        })
    } else{
        console.log('Invalid URL sent to server')
    }
});

module.exports = router;
