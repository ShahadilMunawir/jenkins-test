var express = require("express");
var app = express();

app.get('/', (req, res) => {
    console.log("HIT FOUND");
    res.send("Hello DOCKER + NODE");
});

app.listen(5000);
