const express = require('express');
const pg = require('pg');
const router = express.Router();

const Pool = pg.Pool; // a pool is like a pool of connections you can make. 

const pool = new Pool({
  database: 'shoe_store', //name of database
  host: 'localhost', // where is the database
  port: 5432, // port of databse. 5432 is default for postgres
  max: 10, // how many connections (queries) at one time
  idleTimeoutMillis: 30000 // 30 seconds to try to connect, otherwise cancel query
});


// GET
router.get('/', (req, res) => {
    console.log('shoes are expensive');
    let queryText = 'SELECT * FROM shoes;';
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error maing GET query', error);
        res.sendStatus(500);
    });

});

// POST
router.post('/', (req, res) => {
    console.log(req.body);
    const shoe = (req.body);
    console.log('adding shoes');
    pool.query(`INSERT INTO "shoes" ("name", "cost")
                VALUES ($1, $2);`, [shoe.name, shoe.cost])
                .then((results) => {
                    res.sendStatus(200);
                })
                .catch((error) => {
                    console.log('error with postgres post', error);
                    res.sendStatus(500);
                });
})

module.exports = router;