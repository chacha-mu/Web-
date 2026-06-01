

window.onload = function () {

  const slides = document.getElementById("slides");

  let currentIndex = 0;

  function updateSlide() {
    slides.style.transform =
      "translateX(-" + currentIndex * 100 + "%)";
  }

  window.nextSlide = function () {
    currentIndex++;

    if (currentIndex >= 4) {
      currentIndex = 0;
    }

    updateSlide();
  };

  window.prevSlide = function () {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = 3;
    }

    updateSlide();
  };

};
