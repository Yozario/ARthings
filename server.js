var express = require('express');
const fs = require('fs');
const path = require('path');
const PORT=8080; 

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function () {
    console.log('Server started on port ' + PORT);
  });