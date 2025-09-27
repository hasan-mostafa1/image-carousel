function getSlide(currentSlideOrder, targetSlideOrder) {
  const currentSlide = document.querySelector(
    `.slides img:nth-child(${currentSlideOrder})`,
  );
  currentSlide.classList.add("hide");

  const nextSlide = document.querySelector(
    `.slides img:nth-child(${targetSlideOrder})`,
  );
  nextSlide.classList.remove("hide");

  return targetSlideOrder;
}

export { getSlide };
