// Textos para el carrusel
 const carouselTexts = [
  "Lorem ipsum dolore",
  "consectetur adipiscing elit",
  "Vestibulum facilisis",
];

const carouselElement = document.getElementById("text-carousel");

let currentIndex = 0;

function updateCarousel() {
  carouselElement.innerHTML = carouselTexts[currentIndex];
  currentIndex = (currentIndex + 1) % carouselTexts.length;
}

setInterval(updateCarousel, 2000);