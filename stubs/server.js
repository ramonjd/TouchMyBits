/* eslint no-console: 0 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

var app = express();
app.set('env', process.env.NODE_ENV || 'development');
app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 9999);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/authenticate', function(req, res) {
    var code = req.body.code;
    if (code === '123') {
      res.status(200);
      res.json({
        success: true
      });
    } else {
      res.status(403);
      res.json({
        success: false
      });
    }
});

var httpServer = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
