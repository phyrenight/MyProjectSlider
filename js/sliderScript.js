(function() {
	var images = [];
    var i = 0;

	images[0] = "./images/calculator.png";
	images[1] = "./images/freshtomato_screenshot.png";
	images[2] = "./images/gameSwap screen shot320x130.png";
	images[3] = "./images/localweatherpage.png";
	images[4] = "./images/map.png";
	images[5] = "./images/pomodoro screen shot.png";
	images[6] = "./images/udacity blog.png";

    function slideImage(){
      var imagesLength = images.length;

	    document.slider.src = images[i];

	    if(i < (imagesLength-1)){
	      i++;
        }
	    else{
	      i = 0;
	    }

      setTimeout(slideImage, 5000);
    }
    slideImage();
})();