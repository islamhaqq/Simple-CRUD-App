// import and use express
const express = require('express');
const app = express();

// import body-parser
const bodyParser = require('body-parser');

// import MongoDB
const mongoClient = require('mongodb').MongoClient;

// use body-parser
// parse request and response objects using body-parser
app.use(bodyParser.urlencoded({extended:true}));

// connect to MongoDB via MongoClient connect method
mongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds025459.mlab.com:25459/star-wars-quotes', (err, database) => {
    // ... start the server
});

// create server
app.listen(3000, () => {
    console.log('listening on port 3000');
});

// send GET request to server from browser
app.get('/', (req, res) => {
    // serve index.html file
    res.sendFile(__dirname + '/index.html');
});

// handle POST request from form
// parse <form> POST request
app.post('/quotes', (req, res) => {
    console.log('POST request sent');
    // log the parsed request body
    console.log(req.body);
});