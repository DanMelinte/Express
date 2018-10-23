var express = require('express');
var app = express();

app.all('/', function(req, res, next) {
    console.log("Order question...");
    next();
});

app.get('/', function(req, res) {
    res.send("Send data");
});

app.get('/:id', function (req, res) {
   let id = req.params.id;
   res.send("Seen POST question :  " + id);
});
  
app.post('/', function (req, res) {
    res.send("Seen PUT question :  ");
});

app.put('/', function (req, res) {
    res.send("Seen PUT question :  ");
});

app.patch('/', function (req, res) {
    res.send("Seen PATCH question :  ");
});

app.delete('/', function (req, res) {
    res.send("Seen DELETE question :  ");
});

app.listen(3000, function () {
   console.log("Port |3000| is active");
});