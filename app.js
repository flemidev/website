const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const post = require('./api/post');

app.use(bodyParser.json());

const db = require('./databaseConnection');


app.use('/api/post', post);

app.listen('5000', () => {
    console.log("Listening to port 5000");
})