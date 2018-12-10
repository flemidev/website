const express = require('express');
const router = express.Router();
const db = require('../databaseConnection');

router.get('/', (req, res) => {
    let sql = '';
    /*db.query(sql, (err, result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })*/
    res.send('Hello world');
})

module.exports = router;