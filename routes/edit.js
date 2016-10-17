var express = require('express');
var router = express.Router();
var lwip = require('lwip');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('edit', { title: 'Edit' });
});


// lwip.open('public/images/mid.png', function(err, image) {
//     if (err) return console.log(err);

//     image.extract(230, 230, 370, 300, function(err, eyes) {
//         eyes.writeFile('lena_eyes.png', function(err) {
//             if (err) return console.log("eyes:", err);
//             console.log('eyes: done');
//         });

//         eyes.extract(0, 0, 70, 71, function(err, left_eye) {
//             left_eye.writeFile('lena_eyes_left.png', function(err) {
//                 if (err) return console.log("eyes left:", err);
//                 console.log('eyes left: done');
//             });
//         });

//         eyes.extract(71, 0, 141, 71, function(err, right_eye) {
//             right_eye.writeFile('lena_eyes_right.png', function(err) {
//                 if (err) return console.log("eyes right:", err);
//                 console.log('eyes right: done');
//             });
//         });
//     });

//     image.extract(240, 320, 350, 380, function(err, eyes) {
//         eyes.writeFile('lena_mouth.png', function(err) {
//             if (err) return console.log("mouth:", err);
//             console.log('mouth: done');
//         });
//     });

// });


module.exports = router;