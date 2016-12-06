// import and use express
const express = require('express');
const app = express();

// import body-parser
const bodyParser = require('body-parser');

// use body-parser
app.use(bodyParser.urlencoded({extended:true}));

// create server
app.listen(3000, () => {
    console.log('listening on port 3000');
})

// send GET request to server from browser
app.get('/', (req, res) => {
    // serve index.html file
    res.sendFile(__dirname + '/index.html');
})

// handle POST request from form
app.post('/quotes', (req, res) => {
    console.log('POST request sent');
})