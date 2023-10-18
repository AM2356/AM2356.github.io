let currentIndex = 0;
const images = [
    "2.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
];

const interval = 4000;
function changeImage() {
    const slide = document.querySelector('.banner-container img[name="slide"]');
    slide.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }
  
function startSlideshow() {
    setInterval(changeImage, interval);
  }

document.addEventListener("DOMContentLoaded", startSlideshow);