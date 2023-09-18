
// import required dependencies
const rtr = require('express').Router();
const path = require('path');

//define a GET route for the notes.html page using the rtr.get() method
rtr.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//define a GET route for the index.html page using the rtr.get() method
rtr.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = rtr;
