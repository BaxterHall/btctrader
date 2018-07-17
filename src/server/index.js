var express = require('express');
var app = express();

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.listen(3000, () => console.log('btc trader listening on port 3000!'))
