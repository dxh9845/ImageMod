$(function() {
	// Load functionality on change
	$('body').on('change', '#imagePhoto', function(ev) {
		// Hide the existing container elements 
		$('.container').toggleClass('none');
		// Show the container
		$('.container-fluid').toggleClass('none');
		// Divide and conquer the image
		var canvas = document.createElement('canvas'),
			ctx = canvas.getContext('2d'),
			parts = [],
			img = new Image(),
			url = window.URL || window.webkitURL,
			file = document.getElementById('imagePhoto').files[0],
			src = url.createObjectURL(file);

			img.src = src;
			img.onload = function() {
				var w2 = img.width / 2, // 130
					h2 = img.height / 2; // 40

			    for (var i = 0; i < 4; i++) {

			      var x = (-w2 * i) % (w2 * 2),
			        y = (h2 * i) <= h2 ? 0 : -h2;


			      canvas.width = w2;
			      canvas.height = h2;

			      ctx.drawImage(this, x, y, w2 * 2, h2 * 2); // img, x, y, w, h
			      parts.push(canvas.toDataURL()); // ("image/jpeg") for jpeg


			      // ---------- JUST TO TEST
			      var slicedImage = document.createElement("img")
			      slicedImage.src = parts[i];
			      slicedImage.className += "block contain selectDisable"
			      var div = document.getElementsByClassName('col-md-6')
			      div[i].appendChild(slicedImage);
			      // ----------

			    }
			    console.log(parts);
			    url.revokeObjectURL(src);
			}
	})
});