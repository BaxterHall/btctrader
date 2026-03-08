const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(express.static(__dirname + './../../')); //serves the index.html
app.listen(3000, () => console.log('btc trader listening on port 3000!'))

app.get('/api', cors(), async (req, res) => {
    try {
        const response = await axios.get('https://api.bitfinex.com/v1/pubticker/btcusd');
        res.json(response.data);
    } catch (error) {
        console.log('Error fetching BTC price:', error.message);
        res.status(500).json({ error: 'Failed to fetch price' });
    }
});
