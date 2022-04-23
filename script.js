// Reference: W3 schools how to slideshow.
//=======================================================================================
// By default, slide display is set to none.  
// When the page is loaded assume slideIndex as first slide and display the slide.
//=======================================================================================
let slideIndex = 1;
showSlides(slideIndex);

//=======================================================================================
// Next/previous controls
//=======================================================================================
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//=======================================================================================
// Thumbnail image controls
//=======================================================================================
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//=======================================================================================
// Show the slides
// slideIndex is a global variable.
//=======================================================================================
function showSlides(n) {
  // get all the elements of the specified class.
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Make sure the slideIndex is between [1 to number of slides].
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  
  //reset all the dots and set all the slides display to none
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    dots[i].className = dots[i].className.replace(" active", "");  
  } 

  // Display the selected slides and highlight the corresponding dot. 
  // Since arrays are indexed from 0, slides and dots are accessed as slideIndex-1.
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

