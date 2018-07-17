
const express = require('express')
const app = express()
const path = require("path");

app.get('/', express.static(path.join(__dirname, 'public')))

app.listen(8080, () => console.log('Example app listening on port 8080!'))