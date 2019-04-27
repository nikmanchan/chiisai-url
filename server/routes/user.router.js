const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
    // Send back user object from the session (previously queried from the database)
    res.send(req.user);
});

// Handles POST request with new user data
router.post('/sign-up', (req, res, next) => {
    const username = req.body.username;
    const password = encryptLib.encryptPassword(req.body.password);
    const queryText = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id';
    pool.query(queryText, [username, password])
        .then(() => { res.sendStatus(201); })
        .catch((err) => { next(err); });
});

module.exports = router;
