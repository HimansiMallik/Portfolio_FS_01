let currentSlide = 0;
let slides = [];

// Load slides after page loads
document.addEventListener("DOMContentLoaded", function(){
  slides = document.querySelectorAll(".slide");
  showSlide(currentSlide);
});

// Show slide
function showSlide(index){
  if(slides.length === 0) return;

  slides.forEach(s => s.classList.remove("active"));

  currentSlide = index;

  if(currentSlide >= slides.length) currentSlide = 0;
  if(currentSlide < 0) currentSlide = slides.length - 1;

  slides[currentSlide].classList.add("active");
}

// Buttons
function nextSlide(){
  showSlide(currentSlide + 1);
}

function prevSlide(){
  showSlide(currentSlide - 1);
}

// Auto slide
setInterval(() => {
  nextSlide();
}, 3000);