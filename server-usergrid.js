var argo = require('argo');
var express = require('express');
var request = require('request');
var url = 'https://api.usergrid.com/billadona/sandbox/cities';

var app = express();

var proxy = argo()
    .build();

app.get('/', function(req, res) {
    request(url, function(err, response, body){
        if(err){console.log('ERROR OCCURED'); return; }
        else
        {
            res.send(body);
        }
    });
});

app.all('*', proxy.run);

app.listen(3000);
