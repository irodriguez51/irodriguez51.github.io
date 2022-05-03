'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
// define endpoint for exercise 2 here
app.get('/math/circle/:r', function(req, res){
    let radius = req.params['r'];
    let area = Math.PI * radius * radius;
    let circumference = Math.PI * 2 * radius;

    let result = `area: ${area}, circumference: ${circumference}`

    res.type('json');
    res.send([result]);
});

app.get('/hello/name', function(req, res){
    if (req.query.first){
        var first = req.query.first;
    }
    else{
        res.status(400).send('No first name provided!');
    }
    if (req.query.last){
        var last = req.query.last;
    }
    else{
        res.status(400).send('No last name provided!');
    }

    res.type('text');
    res.send(`Hello ${first} ${last}`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);