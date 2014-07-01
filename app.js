/**
 * Module dependencies.
 */

var express = require('express')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , multipart = require('connect-multiparty')
  , multipartMiddleware = multipart();

var app = module.exports = express();

app.use(bodyParser());
app.use(methodOverride());

app.route('/')
    .post(multipartMiddleware, function(req, res, next){
	console.log(req.body);
        console.log(req.files);
    })

if (!module.parent) {
     app.listen(4000);
}