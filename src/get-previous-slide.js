function getPreviousSlide(currentSlideOrder, numOfSlides) {
  const currentSlide = document.querySelector(
    `.slides img:nth-child(${currentSlideOrder})`,
  );
  currentSlide.classList.add("hide");

  let previousSlideOrder = null;
  if (currentSlideOrder - 1 <= 0) {
    previousSlideOrder = numOfSlides;
  } else {
    previousSlideOrder = currentSlideOrder - 1;
  }

  const previousSlide = document.querySelector(
    `.slides img:nth-child(${previousSlideOrder})`,
  );
  previousSlide.classList.remove("hide");

  return previousSlideOrder;
}

export { getPreviousSlide };
