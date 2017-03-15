(function() {
	var image = [];
    var i = 0;

	image[0] = "./images/calculator.png";
	image[1] = "./images/freshtomato_screenshot.png";
	image[2] = "./images/gameSwap screen shot320x130.png";
	image[3] = "./images/localweatherpage.png";
	image[4] = "./images/map.png";
	image[5] = "./images/pomodoro screen shot.png";
	image[6] = "./images/udacity blog.png";

    function slideImage(){
      var imagesLength = image.length;
	    document.slider.src = image[i];
	    if(i == 0){
	      var pastImage = document.getElementById("image["+(imagesLength- 1)+"]");
	    }
	    else if(i > 0){
	      pastImage = document.getElementById("image["+(i-1)+"]");
        }
        pastImage.style.border = "none"
	    var currentImages = document.getElementById("image["+i+ "]");
	    currentImages.style.border = "thick solid #F60"
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