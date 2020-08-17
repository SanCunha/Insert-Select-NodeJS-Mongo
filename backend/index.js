const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const port = 3333

app.use(bodyParser.json())

app.use(function (req, res, next) {
    // Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType, Content-Type, Accept, Authorization, tokenacesso");
    next();
});

app.use(routes)

app.listen(port, () => {
    console.log(`Server is Running at http://localhost:${port}`)
})