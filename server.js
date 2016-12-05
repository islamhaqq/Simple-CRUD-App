console.log('May the Node be with you!');

// use express
const express = require('express');
const app = express();

// create server
app.listen(3000, () => {
    console.log('listening on port 3000');
})

// send GET request to server from browser
app.get('/', (response, request) => {
    // do something
})