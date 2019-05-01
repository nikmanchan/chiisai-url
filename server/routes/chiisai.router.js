const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Handles GET request with URL data
router.get('/:id', (req, res) => {
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

module.exports = router;