var express = require('express');
var router = express.Router();
var lwip = require('lwip');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  	console.log(res)
  	res.render('edit', { title: 'Edit' });
});

function base64_encode(file) {
	// read binary data
	var bitmap = fs.readFileSync(file);
	// convert binary data to base64 encoded string
	return new Buffer(bitmap).toString('base64');
}

module.exports = router;