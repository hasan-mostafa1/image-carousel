import { changeCircle } from "./change-circle.js";
import { createNavCircles } from "./create-nav-circles.js";
import { getNextSlide } from "./get-next-slide.js";
import { getPreviousSlide } from "./get-previous-slide.js";
import { getSlide } from "./get-slide.js";

function setupImageSlider() {
  const slides = document.querySelectorAll(".slides img");
  const sliderNavList = document.querySelector(".slider ul");
  let numOfSlides = slides.length;
  let currentSlideOrder = 1;
  slides.forEach((slide, index) => {
    if (index > 0) {
      slide.classList.add("hide");
    }
  });

  createNavCircles();
  //Event delegation
  sliderNavList.addEventListener("click", (e) => {
    let circleBtn = e.target.closest("button");
    if (circleBtn !== null) {
      let circleSlideOrder = circleBtn.dataset.slideOrder;
      getSlide(currentSlideOrder, circleSlideOrder);
      changeCircle(currentSlideOrder, circleSlideOrder);
      currentSlideOrder = circleSlideOrder;
    }
  });

  setInterval(() => {
    let nextSlideOrder = getNextSlide(currentSlideOrder, numOfSlides);
    changeCircle(currentSlideOrder, nextSlideOrder);
    currentSlideOrder = nextSlideOrder;
  }, 5000);

  const nextBtn = document.querySelector(".next-btn");
  nextBtn.addEventListener("click", () => {
    let nextSlideOrder = getNextSlide(currentSlideOrder, numOfSlides);
    changeCircle(currentSlideOrder, nextSlideOrder);
    currentSlideOrder = nextSlideOrder;
  });

  const previousBtn = document.querySelector(".previous-btn");
  previousBtn.addEventListener("click", () => {
    let previousSlideOrder = getPreviousSlide(currentSlideOrder, numOfSlides);
    changeCircle(currentSlideOrder, previousSlideOrder);
    currentSlideOrder = previousSlideOrder;
  });
}

export { setupImageSlider };
