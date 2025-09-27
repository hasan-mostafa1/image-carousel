function getNextSlide(currentSlideOrder, numOfSlides) {
  const currentSlide = document.querySelector(
    `.slides img:nth-child(${currentSlideOrder})`,
  );
  currentSlide.classList.add("hide");

  let nextSlideOrder = null;
  if (currentSlideOrder + 1 > numOfSlides) {
    nextSlideOrder = 1;
  } else {
    nextSlideOrder = currentSlideOrder + 1;
  }

  const nextSlide = document.querySelector(
    `.slides img:nth-child(${nextSlideOrder})`,
  );
  nextSlide.classList.remove("hide");

  return nextSlideOrder;
}

export { getNextSlide };
