const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const pool = require('./modules/pool');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const urlRouter = require('./routes/url.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/url', urlRouter);
app.use('/chiisai/:id', function (req, res, next) {
    console.log("hit chiisai route!")
    let id = req.params.id;

    const queryText = `SELECT * FROM "shortened_URLs" WHERE id = $1;`;
    // Get all urlData by id from shortened_URLs column
    pool.query(queryText, [id])
        .then(results => {
            // set urlData
            let urlData = results.rows[0].original_URL;
            const queryText2 = `UPDATE "shortened_URLs" SET "hit_count" = "hit_count" + 1 WHERE "id" = $1;`;

            // Update hit_count
            pool.query(queryText2, [id])
                .then(results => {
                    console.log('success with update hit_count', results.rows)
                })
                .catch(error => {
                    console.log('ERROR with updating hit count in database:', error);
                    res.sendStatus(500);
                })
            res.redirect(urlData);
        })
        .catch(error => {
            console.log('ERROR with GET URL data from database:', error);
            res.sendStatus(500);
        })
});

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});