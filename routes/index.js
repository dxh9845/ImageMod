var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var multer = require('multer');

var FileAPI = require('file-api')
  , File = FileAPI.File
  , FileList = FileAPI.FileList
  , FileReader = FileAPI.FileReader
  ;

/*  MULTER SETTINGS */
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '../tmp'));
  },

  filename: function (req, file, cb) {
    var fileName = file.originalname.split('.')[0];
    cb(null, fileName + '-' + Date.now() +'.jpg')
  }
});
var upload = multer({ storage: storage, });
 
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Upload an image' });
});

// router.post('/imageProcess', upload.single('displayImage'), function(req, res, next) {
// 	console.log(req.body.imageBlob);
// 	var json = {
// 		message: 'File uploaded successfully',
// 		filename: req.file.filename
// 	};

// 	var file = new File({ path: "./tmp/" + req.file.filename, jsdom: true});
// 	res.render('edit', { rootFile: req.file.fileName, file: file, blobber: req.body.imageBlob } );
// });


router.post('/imageProcess', function(req, res, next) {
	console.log("REached");
	console.log(req)
	res.render('edit')
});

function base64_encode(file) {
	// read binary data
	var bitmap = fs.readFileSync(file);
	// convert binary data to base64 encoded string
	return new Buffer(bitmap).toString('base64');
}

module.exports = router;