const express = require('express');
const app = express();
const request = require('request');

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.listen(3000, () => console.log('btc trader listening on port 3000!'))


// app.get('/api', (req,res) => {

//     let options = {
//         url: 'http://api.bitfinex.com/v1/pubticker/btcusd'
//     }
// }

app.get('/api', (req, res) => {

    let options = {
        url: 'http://api.bitfinex.com/v1/pubticker/btcusd',
    
    };
        request(options, function (error, data) {
            

            let btcInfo = JSON.parse(data.body)

            if (error) {
                console.log('uh oh')
            };
            console.log(btcInfo.last_price);
            // res.render('pages/artist', { artist: artist, albums: releases.releases });
        })
    });